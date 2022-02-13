import { QRCode, QRCodeOptions } from '../core/qrcode';
import { getOptions, getImageWidth, qrToImageData } from './utils';

function clearCanvas(
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement & { style: CSSStyleDeclaration },
    size: number
): void {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    const style = {} as CSSStyleDeclaration;
    style.height = size + 'px';
    style.width = size + 'px';

    if (!canvas.style) canvas.style = style;
}

function getCanvasElement(): HTMLCanvasElement {
    try {
        return document.createElement('canvas');
    } catch (e) {
        throw new Error('You need to specify a canvas element');
    }
}

export const draw = (qrData: QRCode, options: QRCodeOptions): HTMLCanvasElement => {
    const opts = getOptions(options);
    const canvasEl = opts.canvas ? opts.canvas : getCanvasElement();
    const ctx = canvasEl.getContext('2d');
    const size = getImageWidth(qrData.modules.size, opts);
    canvasEl.height = size;
    canvasEl.width = size;
    const image = ctx?.createImageData(size, size) || new ImageData(size, size);
    qrToImageData(image?.data, qrData, opts);

    clearCanvas(ctx, canvasEl, size);
    ctx?.putImageData(image || new ImageData(0, 0), 0, 0);
    return canvasEl;
};

export const render = (qrData: QRCode, options: QRCodeOptions): string => {
    const opts = options;
    const canvasEl = draw(qrData, opts);

    const type = opts.type || 'image/png';
    const rendererOpts = opts.rendererOpts || {};

    return canvasEl.toDataURL(type, rendererOpts.quality);
};

export default render;
