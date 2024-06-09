import qr from './dist/index.js';
import assert from 'assert/strict';

let exp =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h29v29H0z"/><path stroke="#000000" d="M4 4.5h7m1 0h2m1 0h1m2 0h7M4 5.5h1m5 0h1m1 0h1m1 0h2m2 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h2m1 0h1m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m3 0h3m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h2m2 0h1m1 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m4 0h2m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h7M13 11.5h1m1 0h2M4 12.5h1m2 0h7m2 0h2m2 0h1m1 0h3M4 13.5h1m2 0h1m4 0h1m3 0h1m1 0h2m2 0h1M5 14.5h3m2 0h3m1 0h1m3 0h1m2 0h2m1 0h1M5 15.5h2m2 0h1m2 0h4m1 0h1m2 0h1m1 0h2M5 16.5h1m1 0h2m1 0h1m2 0h2m2 0h1m1 0h3m1 0h1M12 17.5h1m3 0h1m3 0h1m1 0h3M4 18.5h7m1 0h3m1 0h1m1 0h5M4 19.5h1m5 0h1m1 0h2m1 0h8m1 0h1M4 20.5h1m1 0h3m1 0h1m1 0h2m1 0h2m2 0h1m1 0h1m1 0h1M4 21.5h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h2M4 22.5h1m1 0h3m1 0h1m2 0h5m2 0h1m1 0h3M4 23.5h1m5 0h1m3 0h3m1 0h1m3 0h3M4 24.5h7m1 0h1m5 0h3"/></svg>\n';
let str = qr.encode('I am a pony!', { type: 'svg' });

assert(str === exp);

exp =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h33v33H0z"/><path stroke="#000000" d="M4 4.5h7m1 0h1m2 0h1m2 0h1m1 0h1m1 0h7M4 5.5h1m5 0h1m1 0h1m1 0h2m4 0h1m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h2m1 0h1m1 0h1m1 0h1m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m2 0h2m1 0h2m2 0h1m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m2 0h1m1 0h1m1 0h1m2 0h1m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M16 11.5h2m2 0h1M4 12.5h1m2 0h8m3 0h1m1 0h2m2 0h1m1 0h3M5 13.5h1m5 0h1m2 0h2m1 0h3m1 0h1m1 0h5M4 14.5h1m3 0h3m2 0h1m1 0h3m1 0h2m1 0h2m1 0h1m2 0h1M4 15.5h2m1 0h1m3 0h3m1 0h1m2 0h2m3 0h1m1 0h4M4 16.5h1m3 0h1m1 0h2m4 0h1m2 0h4m5 0h1M4 17.5h2m1 0h3m1 0h3m4 0h3m3 0h1m2 0h1M4 18.5h2m4 0h10m1 0h1m2 0h5M4 19.5h1m1 0h4m2 0h1m2 0h1m3 0h1m3 0h2m1 0h1m1 0h1M4 20.5h1m1 0h9m3 0h1m1 0h5m1 0h2M12 21.5h6m2 0h1m3 0h1m2 0h1M4 22.5h7m1 0h4m4 0h1m1 0h1m1 0h2m2 0h1M4 23.5h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h3m3 0h1m2 0h2M4 24.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h10m1 0h2M4 25.5h1m1 0h3m1 0h1m1 0h1m1 0h1m3 0h2m1 0h3m1 0h1m1 0h2M4 26.5h1m1 0h3m1 0h1m2 0h2m1 0h1m1 0h1m1 0h2m1 0h2m1 0h3M4 27.5h1m5 0h1m2 0h1m4 0h1m3 0h3m1 0h3M4 28.5h7m1 0h3m2 0h2m1 0h1m4 0h1m2 0h1"/></svg>\n';

str = qr.encode('http://www.google.com', { type: 'svg', errorCorrectionLevel: 0 });

assert(str === exp);

str = qr.encode('qrcode', { type: 'svg', errorCorrectionLevel: 0 });

console.log(str);

console.log('pass');
