import { ErrorCorrectionLevel } from '../src/core/error-correction-level';
import qr from '../src/index';

const encode = qr.encode;

describe('e2e', () => {
    describe('svg', () => {
        it('version undefined (default version 1)', () => {
            const exp =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h29v29H0z"/><path stroke="#000000" d="M4 4.5h7m3 0h1m3 0h7M4 5.5h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m4 0h1m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m2 0h2m3 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h2m1 0h2m1 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m2 0h1m1 0h1m2 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h7M13 11.5h2M4 12.5h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m3 0h1m2 0h1M6 13.5h4m1 0h1m2 0h2m1 0h1m1 0h1m3 0h2M4 14.5h1m1 0h1m3 0h6m1 0h3m1 0h4M7 15.5h3m2 0h6m1 0h2m2 0h1M4 16.5h1m1 0h1m1 0h1m1 0h1m2 0h3m1 0h3m1 0h1m1 0h2M12 17.5h1m5 0h1m2 0h1m2 0h1M4 18.5h7m2 0h1m2 0h1m3 0h2m1 0h2M4 19.5h1m5 0h1m3 0h1m3 0h1m4 0h1M4 20.5h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h2M4 21.5h1m1 0h3m1 0h1m3 0h2m1 0h1m1 0h1m3 0h1M4 22.5h1m1 0h3m1 0h1m1 0h4m1 0h3m2 0h1m1 0h1M4 23.5h1m5 0h1m3 0h4m1 0h3m1 0h1M4 24.5h7m1 0h4m1 0h3m2 0h3"/></svg>\n';

            const str = encode('test', { type: 'svg' });

            expect(str).toEqual(exp);
        });

        it('version 1', () => {
            const exp =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h29v29H0z"/><path stroke="#000000" d="M4 4.5h7m3 0h1m3 0h7M4 5.5h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m4 0h1m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m2 0h2m3 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h2m1 0h2m1 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m2 0h1m1 0h1m2 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h7M13 11.5h2M4 12.5h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m3 0h1m2 0h1M6 13.5h4m1 0h1m2 0h2m1 0h1m1 0h1m3 0h2M4 14.5h1m1 0h1m3 0h6m1 0h3m1 0h4M7 15.5h3m2 0h6m1 0h2m2 0h1M4 16.5h1m1 0h1m1 0h1m1 0h1m2 0h3m1 0h3m1 0h1m1 0h2M12 17.5h1m5 0h1m2 0h1m2 0h1M4 18.5h7m2 0h1m2 0h1m3 0h2m1 0h2M4 19.5h1m5 0h1m3 0h1m3 0h1m4 0h1M4 20.5h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h2M4 21.5h1m1 0h3m1 0h1m3 0h2m1 0h1m1 0h1m3 0h1M4 22.5h1m1 0h3m1 0h1m1 0h4m1 0h3m2 0h1m1 0h1M4 23.5h1m5 0h1m3 0h4m1 0h3m1 0h1M4 24.5h7m1 0h4m1 0h3m2 0h3"/></svg>\n';

            const str = encode('test', { type: 'svg', version: 1 });

            expect(str).toEqual(exp);
        });

        it('version 2', () => {
            const exp =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h33v33H0z"/><path stroke="#000000" d="M4 4.5h7m2 0h1m2 0h1m2 0h2m1 0h7M4 5.5h1m5 0h1m2 0h4m5 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h2m4 0h1m1 0h1m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h3m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h2m3 0h4m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h4m1 0h1m1 0h1M4 12.5h1m1 0h5m2 0h1m4 0h2m2 0h5M7 13.5h1m1 0h1m1 0h5m3 0h2m1 0h4m1 0h1M6 14.5h7m1 0h1m1 0h1m5 0h1m1 0h1m1 0h3M5 15.5h1m6 0h1m5 0h1m1 0h5m2 0h2M4 16.5h1m2 0h1m1 0h2m2 0h2m5 0h1m1 0h2m2 0h3M4 17.5h1m3 0h2m3 0h2m1 0h4m1 0h2M4 18.5h1m2 0h2m1 0h1m3 0h1m2 0h5m1 0h1m1 0h1m1 0h2M4 19.5h1m3 0h1m2 0h1m1 0h2m1 0h2m1 0h1m5 0h1m2 0h1M4 20.5h1m1 0h5m1 0h1m3 0h1m1 0h8m1 0h2M12 21.5h1m6 0h2m3 0h1m1 0h2M4 22.5h7m2 0h1m1 0h2m2 0h2m1 0h1m1 0h5M4 23.5h1m5 0h1m1 0h1m1 0h2m2 0h1m1 0h1m3 0h1m1 0h1m1 0h1M4 24.5h1m1 0h3m1 0h1m1 0h1m1 0h2m4 0h6m1 0h2M4 25.5h1m1 0h3m1 0h1m1 0h3m1 0h6m3 0h1m2 0h1M4 26.5h1m1 0h3m1 0h1m1 0h1m4 0h2m1 0h1m1 0h3m3 0h1M4 27.5h1m5 0h1m2 0h2m1 0h2m4 0h1m1 0h2m2 0h1M4 28.5h7m1 0h2m2 0h1m1 0h2m1 0h4m2 0h2"/></svg>\n';

            const str = encode('test', { type: 'svg', version: 2 });
            expect(str).toEqual(exp);
        });

        it('version 3', () => {
            const exp =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h37v37H0z"/><path stroke="#000000" d="M4 4.5h7m1 0h3m1 0h1m4 0h1m1 0h2m1 0h7M4 5.5h1m5 0h1m2 0h2m1 0h1m3 0h2m1 0h1m2 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h1m1 0h1m1 0h1m1 0h2m5 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h4m2 0h5m3 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m2 0h1m1 0h2m1 0h1m1 0h2m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h8m2 0h1m1 0h1m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h3m1 0h1m1 0h1m2 0h4M4 12.5h1m3 0h1m1 0h4m1 0h6m1 0h1m2 0h5m2 0h1M7 13.5h1m4 0h1m8 0h1m1 0h3m2 0h1m1 0h3M5 14.5h3m1 0h2m1 0h3m2 0h3m2 0h1m1 0h1m7 0h1M5 15.5h5m1 0h2m2 0h1m1 0h1m1 0h2m4 0h1m1 0h1M4 16.5h1m1 0h1m3 0h1m5 0h2m5 0h4m1 0h3M4 17.5h4m1 0h1m1 0h1m4 0h3m1 0h1m1 0h2m3 0h1m3 0h2M6 18.5h1m1 0h5m1 0h2m4 0h2m1 0h1m1 0h4m1 0h1m1 0h1M7 19.5h1m3 0h2m5 0h1m2 0h4m1 0h1m1 0h3m1 0h1M4 20.5h1m1 0h1m2 0h6m1 0h5m1 0h1m4 0h5M4 21.5h1m2 0h1m1 0h1m1 0h2m1 0h3m4 0h1m1 0h3m2 0h3m1 0h1M6 22.5h1m1 0h4m1 0h7m2 0h1m1 0h1m4 0h1m2 0h1M8 23.5h2m1 0h1m1 0h1m3 0h1m1 0h2m4 0h1m1 0h1m3 0h2M4 24.5h3m3 0h1m3 0h4m5 0h6m1 0h2M12 25.5h7m1 0h1m1 0h3m3 0h1m2 0h2M4 26.5h7m1 0h1m2 0h1m4 0h2m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 27.5h1m5 0h1m2 0h1m4 0h1m2 0h4m3 0h5M4 28.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h4m1 0h1m1 0h8M4 29.5h1m1 0h3m1 0h1m2 0h1m2 0h2m3 0h1m1 0h1m1 0h2m1 0h3M4 30.5h1m1 0h3m1 0h1m3 0h1m1 0h1m2 0h1m2 0h5m1 0h2m1 0h2M4 31.5h1m5 0h1m2 0h1m1 0h1m2 0h3m2 0h1m1 0h4m2 0h2M4 32.5h7m1 0h5m1 0h1m4 0h3m1 0h1m2 0h2"/></svg>\n';

            const str = encode('test', { type: 'svg', version: 3 });
            expect(str).toEqual(exp);
        });

        it('version 4', () => {
            const exp =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h41v41H0z"/><path stroke="#000000" d="M4 4.5h7m4 0h3m1 0h4m1 0h1m5 0h7M4 5.5h1m5 0h1m2 0h1m2 0h3m2 0h1m1 0h1m2 0h3m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h2m2 0h2m2 0h5m2 0h1m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h3m3 0h1m1 0h1m2 0h5m2 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m2 0h1m3 0h1m2 0h1m2 0h1m2 0h1m1 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h2m1 0h1m3 0h2m1 0h1m1 0h2m4 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h5m1 0h2m5 0h2m1 0h1M4 12.5h1m1 0h5m2 0h4m2 0h2m1 0h1m1 0h2m4 0h5M4 13.5h1m1 0h2m1 0h1m1 0h1m1 0h2m3 0h2m5 0h2m1 0h1m3 0h3M4 14.5h1m1 0h1m2 0h2m2 0h1m1 0h2m2 0h2m1 0h1m1 0h2m3 0h8M4 15.5h1m1 0h1m1 0h2m4 0h2m2 0h2m5 0h2m1 0h1m1 0h1m1 0h3m1 0h1M4 16.5h1m4 0h3m1 0h1m1 0h1m3 0h1m2 0h1m2 0h1m2 0h3m2 0h1m1 0h2M5 17.5h1m1 0h1m3 0h1m1 0h9m2 0h1m1 0h1m4 0h1m2 0h1m1 0h1M4 18.5h1m1 0h9m1 0h2m3 0h1m1 0h1m2 0h3m4 0h3M6 19.5h2m4 0h2m1 0h1m2 0h1m1 0h5m2 0h1m1 0h1m1 0h1m2 0h1M7 20.5h1m1 0h3m1 0h1m3 0h1m5 0h1m1 0h4m4 0h3M4 21.5h1m1 0h1m1 0h1m3 0h2m1 0h3m1 0h4m1 0h1m4 0h1m1 0h1m2 0h2M4 22.5h1m2 0h4m1 0h4m1 0h1m3 0h1m1 0h1m2 0h3m4 0h1M12 23.5h4m1 0h1m2 0h5m2 0h1m1 0h1m1 0h1m1 0h3M4 24.5h1m3 0h4m1 0h1m1 0h2m3 0h1m2 0h5m3 0h1m1 0h1M4 25.5h1m1 0h1m1 0h1m2 0h3m2 0h2m1 0h1m2 0h1m2 0h1m2 0h2m2 0h2m1 0h2M4 26.5h1m1 0h1m1 0h4m3 0h3m1 0h2m1 0h1m1 0h2m3 0h4m2 0h1M4 27.5h1m1 0h1m7 0h3m1 0h2m5 0h2m1 0h1m1 0h1m1 0h2M4 28.5h1m1 0h1m2 0h2m1 0h4m1 0h1m1 0h2m1 0h1m1 0h2m2 0h5m1 0h2M12 29.5h2m1 0h1m1 0h3m5 0h4m3 0h3M4 30.5h7m2 0h1m1 0h1m3 0h2m1 0h1m1 0h2m2 0h1m1 0h1m1 0h1m1 0h3M4 31.5h1m5 0h1m1 0h1m2 0h1m1 0h3m5 0h2m1 0h1m3 0h1m1 0h1m1 0h1M4 32.5h1m1 0h3m1 0h1m1 0h2m3 0h3m2 0h1m2 0h1m2 0h5m1 0h3M4 33.5h1m1 0h3m1 0h1m1 0h1m2 0h1m1 0h5m2 0h1m1 0h6m2 0h1M4 34.5h1m1 0h3m1 0h1m1 0h2m3 0h2m2 0h1m1 0h1m2 0h1m1 0h1m3 0h3M4 35.5h1m5 0h1m3 0h3m3 0h5m3 0h5m1 0h1M4 36.5h7m1 0h3m2 0h1m5 0h1m1 0h3m2 0h1m1 0h4"/></svg>\n';

            const str = encode('test', { type: 'svg', version: 4 });
            expect(str).toEqual(exp);
        });

        it('too much data', () => {
            try {
                encode('https://www.google.com', { type: 'svg', version: 2 });
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
            }
        });
    });

    describe('canvas', () => {
        it('version undefined (default 1)', () => {
            try {
                encode('test', {
                    type: 'canvas',
                    errorCorrectionLevel: ErrorCorrectionLevel.L,
                });
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
            }
        });

        it('version 1', () => {
            try {
                encode('test', {
                    type: 'canvas',
                    errorCorrectionLevel: ErrorCorrectionLevel.L,
                });
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
            }
        });

        it('version 2', () => {
            const exp =
                'data:image/png;base64,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';
            const str = encode('test', {
                type: 'canvas',
                version: 2,
                errorCorrectionLevel: ErrorCorrectionLevel.L,
            });
            expect(str).toEqual(exp);
        });

        it('version 3', () => {
            const exp =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAXNSR0IArs4c6QAACGpJREFUeF7tndFu4zAMBNv//+gccG92AQ8GS6mJuvdKmyKXI4p20tz36/V6ffVfFRhS4LtADSlZN/8VKFAFYVSBAjUqZ50VqDIwqkCBGpWzzgpUGRhVoECNyllnBaoMjCpQoEblrLMCVQZGFShQo3LWWYEqA6MKFKhROeusQJWBUQUK1KicdRYD9f39vVVF+vrWPR57/T2Z3fff13s3fanYBQo2RIEihK72AlWgLkTQBiK8ClSBem+gUsLvO4BmIrKTP9pxZKd8Kb7UTvGRndan+3/om36nfDogAoCGVltgK1g6tNv4f1tfq8/4kUcF1QHejiRbEALUxlOgnhUrUCFRtIGow6T2MPwvWt/6Xw6UfY9iO5D1bwVaDQzFQwW3+Vt9Kb7tM9TqhK1/K1CBcoq1Q4FeBapAOQUK1Ge9h7JHUnrGT69HdFK89n56Kp1ej2Y0iv+4GYoKQIKsLpBdn/JZHS8d8ZTPx89QVAASYHWB7PqUz+p4C9StAj3ynhEmIP88UOMzgPywmNYnwKmAqX96s0/+qcMeN0ONC1KgLEOX6z9+hipQ7huzPfKGPxym7WePKALa+utQDgWnApJ9umDT/ih+stt4aOai9Syw2t9p34dKh9C0o+gCbO7ABUoKXqAc0tQhnbeBH22dDsjuINtRKF7rzwqe5vfnjrxUYLrfPqVYgN7dP+mT2lNgx18bpAnR/e9e8NXxkT6pvUDJGWt1wVf7T4Gh+wtUgSJGlP3XgVLRLrg4HaLTGYuGbJtyWlC73vT18Qw1HZD1V6CsYmuvL1DhkdkOdVWgQBWo0ZYVA2WPHJpZ7I6nmcOuR+qSP9KD/NNT4vT9pB+t96Ne05/l3RcggSghKpC9n64nAQvUs0LtUETQzV6gCtRFgXaoKxCpHsuPPAqQjjA6MmnGoiM29b/7fpuvbLif92MZJAgJYAEtUKTo7TF/+AuS4zOUBYDSt/4KFClaoB4VSodkC2yPvMVDOe0HKvj0kUgzGgFE+dh4qWOS3cZjrx/XI30PRQkUqNdFItKDNgTpbe0F6qaY3eHjAm7+w1ALDF0/rkc7FEkOM0OBunbg3UBR+WjH0JFB/q2djiDqkGS38Vh96CFiWs/4tQEJQgWhhGkIJoEpPrJT/AQM2Wn9VB+6v0ANv4ijghYoUuhqb4cCvQrUZqBsy1xdIHsE2vinj2Crh12f8iO7w+kX/nLYCkgJk50Eebf7aeYpUDcFCtRt5pCvHQpUgXpsknaD/XmgUsGsgHQ9HYE0g9ERSfbp+Ehfe4SSPmSPn/JIQEqYCkgFoPtpfSu4zXd1fNP5ETBkL1A3hSwA9OLS+qOC0Xr2frre2gtUgbLMPM+E6Wd5dATYaHe3cBu/jY/yTztYer898imf5R2KAqAZie4nQen+AnVVKNazHer6O98kaDvU8xZth5IfNheoxUDZI4WuX90hpp+SLGC0PuVPI8K0f6rXj3jSI48WTAUnAWl9GjrT+KbvL1BQ0VTwAgVHzPDPEdkN2g71ev4rFBKUjpT0/naom4K2I6VHEhWA4kkBsfFTvAQk5UP3U7z2/uUdKk3YFpgKRPHY9Uhw8kfxkn/Kh+4vUMPfFyJB04IVqHTL9Mi7KFCghoGyLZee4qhA1HHSeKbjo3jSckx3WIp3+QxlA5guWFoQip8++/v1gsKIQPml+sUfvVCA1p4WLBWE4k3jI/9p/L8O9Oo35SRgO9RVgT8PFO1YAoruJ3vq3wI9vZ5dP+1AFH8MdNqhVhd8tX9bUCrI6ngLFFSACkD26QLvXs8CXaAKFDF/sRPQxwNFalkB6AyfFpzec5F9+j2YzY/0og44Hn86QxWotU9pBHSBAgJJILuDCXhbMOq4FD/FY/Oz6y2Pvx1q9ld6bYHpSLLAW2Df7shLd5S9nwSgHUiC2wLSegQY3U/xkp3yIT3J/48NkXYoCwQlSHYSIC0QrU92io86ki0gXT8dL60Xf5ZXoK5/11egqCcvfo9kgaSCtUM9P3WSPiEOX3GHoha42k5ApkeMPTJS4G1BKf/UbutXoORrDNrhBcpuCYvs4utpB7ZDPf92g9WPytkO1Q51USDtLzFQ9gggwslOMw0JMh3v9Ho2P8rH+iP9yV6gSCHZwVYfsQSIneFoQ1h5CpRV7HY9FYQ6SAoA+ScAKX4rT4GyihWoR8XGgRonPvxBMNqhxBPlQ09JqZ3iI/90BFN+tP4P/6s/y7MBpQKQwHRE0BFk47Px2AKTfxtvXK8C9SwhFZgKmtqpwOS/QN0UmBasHcr9SC0Bvf3ISwu4GijbgdIj0RbIXr96ZqR4lg/lBer56y1UIGsvUPAY3g7lkCpQBcoRA1cXqBAo6mB05KYFoJnKxmdnOrqenvIofkv7x89QtmAkIAFIAhOg1k5AFKiwZduCECDkjwCygNJ6BAhtIIrX6kH+jnttQAJbAel6EtgCQ/G3Qy3+Yfl0B1MBCShan4Cz/ineFDjrH/Nb/dELCZgeGVZQEpDiLVDPSH38UF6grgrQhrF6UUc6boayApHg7VDX33p4O6BsQO8OCAG5O19azz4kkD+yLz/yKACyUwGtnWa2NB66n+xpPpQf+af4yF6gbk+lKJj8Bin5Szsy+W+HuilEO8raaQdTgWg9up/s5J9mPMqP/FN8ZB/vULRgap/ecVSg9DUBdSDSI813e37T76FIoNSeCmwLXKBcxdqhwv+Pz8n99UUdY/rIovXGN0w7VPaDYQXqqkDcoaygvf5sBQrU2fXdnl2B2i752QsWqLPruz27ArVd8rMXLFBn13d7dgVqu+RnL1igzq7v9uwK1HbJz16wQJ1d3+3ZFajtkp+9YIE6u77bsytQ2yU/e8ECdXZ9t2dXoLZLfvaCBers+m7P7h9xss75v58KswAAAABJRU5ErkJggg==';
            const str = encode('test', {
                type: 'canvas',
                version: 3,
                errorCorrectionLevel: ErrorCorrectionLevel.L,
            });
            expect(str).toEqual(exp);
        });

        it('version 3 - ecl M', () => {
            const exp =
                'data:image/png;base64,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';
            const str = encode('test', {
                type: 'canvas',
                version: 3,
                errorCorrectionLevel: ErrorCorrectionLevel.M,
            });
            expect(str).toEqual(exp);
        });

        it('version 3 - ecl Q', () => {
            const exp =
                'data:image/png;base64,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';
            const str = encode('test', {
                type: 'canvas',
                version: 3,
                errorCorrectionLevel: ErrorCorrectionLevel.Q,
            });
            expect(str).toEqual(exp);
        });

        it('version 3 - ecl H', () => {
            const exp =
                'data:image/png;base64,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';
            const str = encode('test', {
                type: 'canvas',
                version: 3,
                errorCorrectionLevel: ErrorCorrectionLevel.H,
            });
            expect(str).toEqual(exp);
        });
    });

    describe('utf8', () => {
        it('version undefined (default 1)', () => {
            try {
                encode('test', {
                    type: 'utf8',
                    version: 1,
                });
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
            }
        });

        it('version 2', () => {
            const exp = [
                '                                         ',
                '                                         ',
                '    █▀▀▀▀▀█  █  █▄█▀ ▀▄▄▀█▀▄  █▀▀▀▀▀█    ',
                '    █ ███ █ █ ▀▄▄   ▄█  ▀▀██▄ █ ███ █    ',
                '    █ ▀▀▀ █  ▄▀▀▀ █ ▀  ███ ▀▄ █ ▀▀▀ █    ',
                '    ▀▀▀▀▀▀▀ ▀ ▀▄▀▄▀ ▀▄█▄█▄▀▄▀ ▀▀▀▀▀▀▀    ',
                '       ▀▀ ▀█ █▄ ▄█▄   ▄▄█ █▀█▄ ▄▄██▄▄    ',
                '     ▄█▄▀▄▀▄█ ▀█ █▄▄▀█▀█▀▀ ███ █▄▄ ▀     ',
                '    ▄▄▄ █▀▀▄▀  ▄▄  ▄▄▄▄▄ ▀█▀ ▄▄▀▀ ▄█▀    ',
                '    ▄ ██  ▀  ████ ▀▀██▄  ▄ ▄▄  ▄▀█▄ ▄    ',
                '    ▀▀▀███▀ █ ▄█▄▄ ▄▀▄  ▄ ▄█▄▄█ ▀█ ▀█    ',
                '     ▀  █ ▀▀██▀  ▀    █▀▄ █▀█▄   ██ ▀    ',
                '    █▀█▄█ ▀▀ ▄▄▀▄██▀▀▄█▄  ▀ ▄ █▄▀█ █     ',
                '    █ █▄▄█▀▄█ █▀▄▄▄▄▀  ▀▀▀██▄ ▀▄  ▀▄▄    ',
                '    ▀▀▀   ▀▀▄█▄ ▀███▀  █ █▀██▀▀▀█▄███    ',
                '    █▀▀▀▀▀█ ▀ ▄▄  ▄ █  ▀▀▄▄ █ ▀ █▀ █▄    ',
                '    █ ███ █ █▄█ ▄ █▀ █▀█▀▀█▄▀▀▀█▀  ▀     ',
                '    █ ▀▀▀ █  █▄▄▄▀▄ ▀▄   █ ▀██  ▀▄▄██    ',
                '    ▀▀▀▀▀▀▀  ▀ ▀▀ ▀▀    ▀▀  ▀▀  ▀        ',
                '                                         ',
                '                                         ',
            ].join('\n');
            const str = encode('http://www.google.com', {
                type: 'utf8',
                errorCorrectionLevel: ErrorCorrectionLevel.H,
            });
            expect(str).toEqual(exp);
        });
    });
});
