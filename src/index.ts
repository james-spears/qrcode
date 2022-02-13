import { create, QRCode, QRCodeOptions } from './core/qrcode';

import CanvasRenderer from './renderer/canvas';
import SvgRenderer from './renderer/svg';
import TerminalRenderer from './renderer/terminal';
import Utf8Renderer from './renderer/utf8';

declare const window: Window & typeof globalThis & { qr: QR };

class QR {
    constructor() {
        if (typeof window !== 'undefined') {
            if (typeof window.qr !== 'undefined') {
                // This should be a singleton.
                throw Error('qr is already defined');
            }
            window.qr = this;
        }
    }

    static getStringRendererFromType(
        type?: string
    ): (qrData: QRCode, options: QRCodeOptions) => string {
        switch (type) {
            case 'svg':
                return SvgRenderer;

            case 'utf8':
                return Utf8Renderer;

            case 'canvas':
                return CanvasRenderer;

            case 'terminal':
            default:
                return TerminalRenderer;
        }
    }

    encode(text: string, opts: QRCodeOptions): string {
        const params = opts ? opts : { type: 'terminal', version: 2 };
        const renderer = QR.getStringRendererFromType(params.type);
        const data = create(text, params);
        return renderer(data, params);
    }
}

export default new QR();
