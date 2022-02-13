import { QRCode, QRCodeOptions } from '../core/qrcode';
import big from './terminal/terminal';
import small from './terminal/terminal-small';

export const render = (qrData: QRCode, options: QRCodeOptions): string => {
    if (options && options.small) {
        return small(qrData, options);
    }
    return big(qrData);
};

export default render;
