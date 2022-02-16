/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
export interface Path {
    value: string;
    cost: number;
}

export class PriorityQueue {
    sorter: (a: { cost: number }, b: { cost: number }) => number;
    queue: Path[];

    constructor(sorter?: (a: { cost: number }, b: { cost: number }) => number) {
        this.sorter = sorter || PriorityQueue.defaultSorter;
        this.queue = [];
    }

    static defaultSorter(a: { cost: number }, b: { cost: number }): number {
        return a.cost - b.cost;
    }

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push(value: string, cost: number): void {
        const item = { value: value, cost: cost };
        this.queue.push(item);
        this.queue.sort(this.sorter);
    }

    /**
     * Return the highest priority element in the queue.
     */
    pop(): Path | undefined {
        return this.queue.shift();
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}

export class Dijkstra {
    static singleSourceShortestPaths(
        graph: Record<string, Record<string, number>>,
        s: string,
        d: string
    ): Record<string, string> {
        // Predecessor map for each node that has been encountered.
        // node ID => predecessor node ID
        const predecessors: Record<string, string> = {};

        // Costs of shortest paths from s to all nodes encountered.
        // node ID => cost
        const costs: Record<string, number> = {};
        costs[s] = 0;

        // Costs of shortest paths from s to all nodes encountered; differs from
        // `costs` in that it provides easy access to the node that currently has
        // the known shortest path from s.
        // XXX: Do we actually need both `costs` and `open`?
        const open = new PriorityQueue();
        open.push(s, 0);

        let closest: Path | undefined,
            u: string | undefined,
            v: string | undefined,
            costOfSToU: number | undefined,
            adjacentNodes: Record<string, number>,
            costOfE: number,
            costOfSToUPlusCostOfE: number,
            costOfSToV: number,
            firstVisit: boolean;
        while (!open.empty()) {
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            if (closest) {
                u = closest.value;
                costOfSToU = closest.cost;

                // Get nodes adjacent to u...
                adjacentNodes = graph[u] || {};

                // ...and explore the edges that connect u to those nodes, updating
                // the cost of the shortest paths to any or all of those nodes as
                // necessary. v is the node across the current edge from u.
                for (v in adjacentNodes) {
                    if (Object.prototype.hasOwnProperty.call(adjacentNodes, v)) {
                        // Get the cost of the edge running from u to v.
                        costOfE = adjacentNodes[v];

                        // Cost of s to u plus the cost of u to v across e--this is *a*
                        // cost from s to v that may or may not be less than the current
                        // known cost to v.
                        costOfSToUPlusCostOfE = costOfSToU + costOfE;

                        // If we haven't visited v yet OR if the current known cost from s to
                        // v is greater than the new cost we just found (cost of s to u plus
                        // cost of u to v across e), update v's cost in the cost list and
                        // update v's predecessor in the predecessor list (it's now u).
                        costOfSToV = costs[v];
                        firstVisit = typeof costs[v] === 'undefined';
                        if (firstVisit || costOfSToV > costOfSToUPlusCostOfE) {
                            costs[v] = costOfSToUPlusCostOfE;
                            open.push(v, costOfSToUPlusCostOfE);
                            predecessors[v] = u;
                        }
                    }
                }
            }
        }

        if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
            const msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
            throw new Error(msg);
        }

        return predecessors;
    }

    static extractShortestPathFromPredecessorList(
        predecessors: Record<string, string>,
        d: string
    ): string[] {
        const nodes = [];
        let u = d;
        let predecessor;
        while (u) {
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessor;
        }
        nodes.reverse();
        return nodes;
    }

    static findPath(
        graph: Record<string, Record<string, number>>,
        s: string,
        d: string
    ): string[] {
        const predecessors = Dijkstra.singleSourceShortestPaths(graph, s, d);
        return Dijkstra.extractShortestPathFromPredecessorList(predecessors, d);
    }
}
