import { QRCode, QRCodeOptions } from '../core/qrcode';

export interface RGBAColor {
    r: number;
    g: number;
    b: number;
    a: number;
    hex: string;
}

export interface CanvasOptions {
    width?: number;
    margin?: number;
    scale?: number;
    type?: string;
    color: { dark: RGBAColor; light: RGBAColor };
    rendererOpts?: Record<string, unknown>;
    style?: { height: string; width: string };
    small?: boolean;
    inverse?: boolean;
}

export function hex2rgba(hex: number | string): RGBAColor {
    if (typeof hex === 'number') {
        hex = hex.toString();
    }

    if (typeof hex !== 'string') {
        throw new Error('Color should be defined as hex string');
    }

    let hexCode = hex.slice().replace('#', '').split('');
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error('Invalid hex color: ' + hex);
    }

    // Convert from short to long form (fff -> ffffff)
    if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply(
            [],
            hexCode.map(function (c) {
                return [c, c];
            })
        );
    }

    // Add default alpha value
    if (hexCode.length === 6) hexCode.push('F', 'F');

    const hexValue = parseInt(hexCode.join(''), 16);

    return {
        r: (hexValue >> 24) & 255,
        g: (hexValue >> 16) & 255,
        b: (hexValue >> 8) & 255,
        a: hexValue & 255,
        hex: '#' + hexCode.slice(0, 6).join(''),
    };
}

export function getOptions(options: QRCodeOptions): QRCodeOptions {
    const margin =
        typeof options.margin === 'undefined' ||
        options.margin === null ||
        options.margin < 0
            ? 4
            : options.margin;

    const width = options.width && options.width >= 21 ? options.width : undefined;
    const scale = options.scale || 4;

    return {
        ...options,
        width: width,
        scale: width ? 4 : scale,
        margin: margin,
        color: {
            dark: options?.color?.dark || hex2rgba('#000000ff'),
            light: options?.color?.light || hex2rgba('#ffffffff'),
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {},
    };
}

export function getScale(qrSize: number, opts: QRCodeOptions): number | undefined {
    return opts.width && opts.width >= qrSize + (opts.margin || 0) * 2
        ? opts.width / (qrSize + (opts.margin || 0) * 2)
        : opts.scale || 1;
}

export function getImageWidth(qrSize: number, opts: QRCodeOptions): number {
    const scale = getScale(qrSize, opts) || 0;
    return Math.floor((qrSize + (opts.margin || 0) * 2) * scale);
}

export function qrToImageData(
    imgData: Uint8ClampedArray,
    qr: QRCode,
    opts: QRCodeOptions
): void {
    const size = qr.modules.size;
    const data = qr.modules.data;
    const scale = getScale(size, opts) || 1;
    const symbolSize = Math.floor((size + (opts?.margin || 0) * 2) * scale);
    const scaledMargin = (opts?.margin || 0) * scale;
    const dark = opts.color?.dark || hex2rgba('#000000ff');
    const light = opts.color?.light || hex2rgba('#ffffffff');
    const palette = [light, dark];

    for (let i = 0; i < symbolSize; i++) {
        for (let j = 0; j < symbolSize; j++) {
            let posDst = (i * symbolSize + j) * 4;
            let pxColor = opts.color?.light || hex2rgba('#ffffffff');

            if (
                i >= scaledMargin &&
                j >= scaledMargin &&
                i < symbolSize - scaledMargin &&
                j < symbolSize - scaledMargin
            ) {
                const iSrc = Math.floor((i - scaledMargin) / scale);
                const jSrc = Math.floor((j - scaledMargin) / scale);
                pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
            }

            imgData[posDst++] = pxColor?.r;
            imgData[posDst++] = pxColor?.g;
            imgData[posDst++] = pxColor?.b;
            imgData[posDst] = pxColor?.a;
        }
    }
}
