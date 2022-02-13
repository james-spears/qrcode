import { QRCode, QRCodeOptions } from '../../core/qrcode';

const backgroundWhite = '\x1b[47m';
const backgroundBlack = '\x1b[40m';
const foregroundWhite = '\x1b[37m';
const foregroundBlack = '\x1b[30m';
const reset = '\x1b[0m';
const lineSetupNormal = backgroundWhite + foregroundBlack; // setup colors
const lineSetupInverse = backgroundBlack + foregroundWhite; // setup colors

export interface Pallette extends Record<string, string> {
    '00': string;
    '01': string;
    '02': string;
    10: string;
    11: string;
    12: string;
    20: string;
    21: string;
    22: string;
}

const createPalette = function (
    lineSetup: string,
    foregroundWhite: string,
    foregroundBlack: string
): Pallette {
    return {
        // 1 ... white, 2 ... black, 0 ... transparent (default)

        '00': reset + ' ' + lineSetup,
        '01': reset + foregroundWhite + '▄' + lineSetup,
        '02': reset + foregroundBlack + '▄' + lineSetup,
        10: reset + foregroundWhite + '▀' + lineSetup,
        11: ' ',
        12: '▄',
        20: reset + foregroundBlack + '▀' + lineSetup,
        21: '▀',
        22: '█',
    };
};

/**
 * Returns code for QR pixel
 * @param {Uint8Array} modules
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @return {'0' | '1' | '2'}
 */
const mkCodePixel = function (
    modules: Uint8Array,
    size: number,
    x: number,
    y: number
): '0' | '1' | '2' {
    const sizePlus = size + 1;
    if (x >= sizePlus || y >= sizePlus || y < -1 || x < -1) return '0';
    if (x >= size || y >= size || y < 0 || x < 0) return '1';
    const idx = y * size + x;
    return modules[idx] ? '2' : '1';
};

/**
 * Returns code for four QR pixels. Suitable as key in palette.
 * @param {Uint8Array} modules
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @return {keyof palette}
 */
const mkCode = function (
    modules: Uint8Array,
    size: number,
    x: number,
    y: number
): string {
    return mkCodePixel(modules, size, x, y) + mkCodePixel(modules, size, x, y + 1);
};

export default (qrData: QRCode, options: QRCodeOptions): string => {
    const size = qrData.modules.size;
    const data = qrData.modules.data;

    const inverse = !!(options && options.inverse);
    const lineSetup = options && options.inverse ? lineSetupInverse : lineSetupNormal;
    const white = inverse ? foregroundBlack : foregroundWhite;
    const black = inverse ? foregroundWhite : foregroundBlack;

    const palette = createPalette(lineSetup, white, black);
    const newLine = reset + '\n' + lineSetup;

    let output = lineSetup; // setup colors

    for (let y = -1; y < size + 1; y += 2) {
        for (let x = -1; x < size; x++) {
            output += palette[mkCode(data, size, x, y)];
        }

        output += palette[mkCode(data, size, size, y)] + newLine;
    }

    output += reset;

    return output;
};
