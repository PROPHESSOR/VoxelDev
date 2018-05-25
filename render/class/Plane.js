/**
 * Copyright (c) 2018 PROPHESSOR
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

'use strict';

class Plane {
    constructor(constant = 'y', vtx1, vtx2) {
        if (!constant) {
            this.vtx1 = new Vertex(0, 0, 0);
            this.vtx2 = new Vertex(0, 0, 0);
            this.vtx3 = new Vertex(0, 0, 0);
            this.vtx4 = new Vertex(0, 0, 0);
            return;
        }

        if (constant === 'y') {
            this.vtx1 = new Vertex(vtx1.x, vtx1.y, vtx1.z);
            this.vtx2 = new Vertex(vtx2.x, vtx1.y, vtx1.z);
            this.vtx3 = new Vertex(vtx2.x, vtx1.y, vtx2.z);
            this.vtx4 = new Vertex(vtx1.x, vtx1.y, vtx2.z);
        }
        if (constant === 'x') {
            this.vtx1 = new Vertex(vtx1.x, vtx1.y, vtx1.z);
            this.vtx2 = new Vertex(vtx1.x, vtx2.y, vtx1.z);
            this.vtx3 = new Vertex(vtx1.x, vtx2.y, vtx2.z);
            this.vtx4 = new Vertex(vtx1.x, vtx1.y, vtx2.z);
        }
        if (constant === 'z') {
            this.vtx1 = new Vertex(vtx1.x, vtx1.y, vtx1.z);
            this.vtx2 = new Vertex(vtx2.x, vtx1.y, vtx1.z);
            this.vtx3 = new Vertex(vtx2.x, vtx2.y, vtx1.z);
            this.vtx4 = new Vertex(vtx1.x, vtx2.y, vtx1.z);
        }
    }

    *[Symbol.iterator]() {
        yield* this.vtx1;
        yield* this.vtx2;
        yield* this.vtx3;
        yield* this.vtx4;
    }
}
