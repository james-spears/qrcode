import { QRCode, QRCodeOptions } from '../core/qrcode';
import { RGBAColor, getOptions, hex2rgba } from './utils';

function getColorAttrib(color: RGBAColor, attrib: string): string {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';

    return alpha < 1
        ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
        : str;
}

function svgCmd(cmd: string, x: number, y?: number): string {
    let str = cmd + x;
    if (typeof y !== 'undefined') str += ' ' + y;

    return str;
}

function qrToPath(data: Uint8Array, size: number, margin: number): string {
    let path = '';
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;

    for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);

        if (!col && !newRow) newRow = true;

        if (data[i]) {
            lineLength++;

            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow
                    ? svgCmd('M', col + margin, 0.5 + row + margin)
                    : svgCmd('m', moveBy, 0);

                moveBy = 0;
                newRow = false;
            }

            if (!(col + 1 < size && data[i + 1])) {
                path += svgCmd('h', lineLength);
                lineLength = 0;
            }
        } else {
            moveBy++;
        }
    }

    return path;
}

const render = (qrData: QRCode, options: QRCodeOptions): string => {
    const opts = getOptions(options);
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const qrcodesize = size + (opts.margin || 0) * 2;
    const dark = opts.color?.dark || hex2rgba('#000000ff');
    const light = opts.color?.light || hex2rgba('#ffffffff');

    const bg = !light.a
        ? ''
        : '<path ' +
          getColorAttrib(light, 'fill') +
          ' d="M0 0h' +
          qrcodesize +
          'v' +
          qrcodesize +
          'H0z"/>';

    const path =
        '<path ' +
        getColorAttrib(dark, 'stroke') +
        ' d="' +
        qrToPath(data, size, opts.margin || 0) +
        '"/>';

    const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';

    const width = !opts.width
        ? ''
        : 'width="' + opts.width + '" height="' + opts.width + '" ';

    const svgTag =
        '<svg xmlns="http://www.w3.org/2000/svg" ' +
        width +
        viewBox +
        ' shape-rendering="crispEdges">' +
        bg +
        path +
        '</svg>\n';

    return svgTag;
};

export const svg = (qrData: QRCode, options: QRCodeOptions): string => {
    const svgTag = render(qrData, options);

    const xmlStr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
        svgTag;

    return xmlStr;
};

export default render;
