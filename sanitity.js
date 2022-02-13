import qr from './dist/index.js';
import fs from 'fs';

let str = qr.encode('http://www.google.com', { type: 'terminal', small: true });

fs.writeFileSync('terminal.txt', str);
