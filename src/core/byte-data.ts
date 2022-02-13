import encodeUtf8 from './encode-utf8';
import { BitBuffer } from './bit-buffer';
import * as Mode from './mode';

export class ByteData {
    mode: Mode.Mode;
    #data: Uint8Array;

    constructor(data: string) {
        this.mode = Mode.BYTE;
        this.#data = new Uint8Array(encodeUtf8(data));
    }

    get data(): string {
        return this.#data.toString();
    }

    static getBitsLength(length: number): number {
        return length * 8;
    }

    getLength(): number {
        return this.#data.length;
    }

    getBitsLength(): number {
        return ByteData.getBitsLength(this.#data.length);
    }

    write(bitBuffer: BitBuffer): void {
        for (let i = 0, l = this.#data.length; i < l; i++) {
            bitBuffer.put(this.#data[i], 8);
        }
    }
}
