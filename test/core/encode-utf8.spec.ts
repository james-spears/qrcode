import encodeUtf8 from '../../src/core/encode-utf8';

const testCases = [
    '\u{FF9F}\u{FF65}\u{273F}\u{30FE}\u{2572}(\u{FF61}\u{25D5}\u{203F}\u{25D5}\u{FF61})\u{2571}\u{273F}\u{FF65}\u{FF9F}',
    '\u{1D306}',
    '\u{1F435} \u{1F648} \u{1F649} \u{1F64A}',
    '\u{1F4A9}',
    '\u{E5}\u{DF}\u{2202}\u{192}\u{A9}\u{2D9}\u{2206}\u{2DA}\u{AC}\u{2026}\u{E6}',
    'Hello, World!',
    'Power\u{644}\u{64F}\u{644}\u{64F}\u{635}\u{651}\u{628}\u{64F}\u{644}\u{64F}\u{644}\u{635}\u{651}\u{628}\u{64F}\u{631}\u{631}\u{64B} \u{963} \u{963}h \u{963} \u{963}\u{5197}',
    '\u{1D57F}\u{1D58D}\u{1D58A} \u{1D596}\u{1D59A}\u{1D58E}\u{1D588}\u{1D590} \u{1D587}\u{1D597}\u{1D594}\u{1D59C}\u{1D593} \u{1D58B}\u{1D594}\u{1D59D} \u{1D58F}\u{1D59A}\u{1D592}\u{1D595}\u{1D598} \u{1D594}\u{1D59B}\u{1D58A}\u{1D597} \u{1D599}\u{1D58D}\u{1D58A} \u{1D591}\u{1D586}\u{1D59F}\u{1D59E} \u{1D589}\u{1D594}\u{1D58C}',
    '\u{C0AC}\u{D68C}\u{ACFC}\u{D559}\u{C6D0} \u{C5B4}\u{D559}\u{C5F0}\u{AD6C}\u{C18C}',
];

const badStrings = [
    {
        input: 'abc123',
        expected: [0x61, 0x62, 0x63, 0x31, 0x32, 0x33],
        name: 'Sanity check',
    },
    {
        input: '\uD800',
        expected: [0xef, 0xbf, 0xbd],
        name: 'Surrogate half (low)',
    },
    {
        input: '\uDC00',
        expected: [0xef, 0xbf, 0xbd],
        name: 'Surrogate half (high)',
    },
    {
        input: 'abc\uD800123',
        expected: [0x61, 0x62, 0x63, 0xef, 0xbf, 0xbd, 0x31, 0x32, 0x33],
        name: 'Surrogate half (low), in a string',
    },
    {
        input: 'abc\uDC00123',
        expected: [0x61, 0x62, 0x63, 0xef, 0xbf, 0xbd, 0x31, 0x32, 0x33],
        name: 'Surrogate half (high), in a string',
    },
    {
        input: '\uDC00\uD800',
        expected: [0xef, 0xbf, 0xbd, 0xef, 0xbf, 0xbd],
        name: 'Wrong order',
    },
];

describe('encode-utf8', () => {
    describe('test strings', () => {
        for (const input of testCases) {
            it(`should encode "${input}"`, () => {
                const actual = Buffer.from(encodeUtf8(input));
                const expected = Buffer.from(input, 'utf8');

                expect(actual).toEqual(expected);
            });
        }
    });

    describe('web platform test', () => {
        for (const testCase of badStrings) {
            it(testCase.name, () => {
                const actual = Array.from(new Uint8Array(encodeUtf8(testCase.input)));

                expect(actual).toEqual(testCase.expected);
            });
        }
    });
});