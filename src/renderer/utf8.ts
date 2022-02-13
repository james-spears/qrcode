import { QRCode, QRCodeOptions } from '../core/qrcode';
import { getOptions } from './utils';

export interface Blocks {
    WW: string;
    WB: string;
    BB: string;
    BW: string;
}

const BLOCK_CHAR: Blocks = {
    WW: ' ',
    WB: '▄',
    BB: '█',
    BW: '▀',
};

const INVERTED_BLOCK_CHAR: Blocks = {
    BB: ' ',
    BW: '▄',
    WW: '█',
    WB: '▀',
};

function getBlockChar(top: number, bottom: number, blocks: Blocks) {
    if (top && bottom) return blocks.BB;
    if (top && !bottom) return blocks.BW;
    if (!top && bottom) return blocks.WB;
    return blocks.WW;
}

export const render = (qrData: QRCode, options: QRCodeOptions): string => {
    const opts = getOptions(options);
    let blocks = BLOCK_CHAR;
    if (opts.color?.dark.hex === '#ffffff' || opts.color?.light.hex === '#000000') {
        blocks = INVERTED_BLOCK_CHAR;
    }

    const size = qrData.modules.size;
    const data = qrData.modules.data;

    let output = '';
    let hMargin = Array(size + (opts.margin || 0) * 2 + 1).join(blocks.WW);
    hMargin = Array((opts.margin || 0) / 2 + 1).join(hMargin + '\n');

    const vMargin = Array((opts.margin || 0) + 1).join(blocks.WW);

    output += hMargin;
    for (let i = 0; i < size; i += 2) {
        output += vMargin;
        for (let j = 0; j < size; j++) {
            const topModule = data[i * size + j];
            const bottomModule = data[(i + 1) * size + j];

            output += getBlockChar(topModule, bottomModule, blocks);
        }

        output += vMargin + '\n';
    }

    output += hMargin.slice(0, -1);

    return output;
};

export default render;
