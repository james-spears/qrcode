import { Dijkstra } from '../../src/core/dijkstra';
const findPath = Dijkstra.findPath;

describe('dijkstra.js', function () {
    describe('.findPath()', function () {
        it('should find the path between two points, all edges have weight 1', function () {
            // A B C
            // D E F
            // G H I
            const graph = {
                a: { b: 10, d: 1 },
                b: { a: 1, c: 1, e: 1 },
                c: { b: 1, f: 1 },
                d: { a: 1, e: 1, g: 1 },
                e: { b: 1, d: 1, f: 1, h: 1 },
                f: { c: 1, e: 1, i: 1 },
                g: { d: 1, h: 1 },
                h: { e: 1, g: 1, i: 1 },
                i: { f: 1, h: 1 },
            };
            const path = findPath(graph, 'a', 'i');
            expect(path).toEqual(['a', 'd', 'e', 'f', 'i']);
        });

        it('should find the path between two points, weighted edges', function () {
            const graph = {
                a: { b: 10, c: 100, d: 1 },
                b: { c: 10 },
                d: { b: 1, e: 1 },
                e: { f: 1 },
                f: { c: 1 },
                g: { b: 1 },
            };

            let path = findPath(graph, 'a', 'c');
            expect(path).toEqual(['a', 'd', 'e', 'f', 'c']);
            path = findPath(graph, 'd', 'b');
            expect(path).toEqual(['d', 'b']);
        });

        //     it('should throw on unreachable destination', function () {
        //         const graph = {
        //             a: {b: 10, c: 100, d: 1},
        //             b: {c: 10},
        //             d: {b: 1, e: 1},
        //             e: {f: 1},
        //             f: {c: 1},
        //             g: {b: 1}
        //         };

        //         expect(function () { findPath(graph, 'c', 'a'); }).to.throwException();
        //         expect(function () { findPath(graph, 'a', 'g'); }).to.throwException();
        //     });

        //     it('should throw on non-existent destination', function () {
        //         const graph = {
        //             a: {b: 10, c: 100, d: 1},
        //             b: {c: 10},
        //             d: {b: 1, e: 1},
        //             e: {f: 1},
        //             f: {c: 1},
        //             g: {b: 1}
        //         };

        //         expect(function () { findPath(graph, 'a', 'z'); }).to.throwException();
        //     });
    });

    // describe('.singleSourceShortestPaths()', function () {
    //     it('should find all paths from a node', function () {
    //         const graph = {
    //             a: { b: 10, c: 100, d: 1 },
    //             b: { c: 10 },
    //             d: { b: 1, e: 1 },
    //             e: { f: 1 },
    //             f: { c: 1 },
    //             g: { b: 1 },
    //         };

    //         // All paths from 'a'
    //         const paths = Dijkstra.singleSourceShortestPaths(graph, 'a');
    //         expect(paths).toEqual({
    //             d: 'a',
    //             b: 'd',
    //             e: 'd',
    //             f: 'e',
    //             c: 'f',
    //         });
    //     });
    // });
});
