/**
 * Copyright (c) 2018 PROPHESSOR
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

class Cube {
    /**
     * @param  {Vertex} vtx1 - Левый верхний ближный угол
     * @param  {Vertex} vtx2 - Правый нижний дальний угол
     */
    constructor(vtx1, vtx2) {
        const vtx3 = new Vertex(vtx2.x, vtx1.y, vtx1.z); // Правый верхний ближний
        const vtx4 = new Vertex(vtx2.x, vtx2.y, vtx1.z); // Правый нижний ближний
        const vtx5 = new Vertex(vtx1.x, vtx2.y, vtx1.z); // Левый нижний ближний
        const vtx6 = new Vertex(vtx1.x, vtx1.y, vtx2.z); // Левый верхний дальний
        const vtx7 = new Vertex(vtx2.x, vtx1.y, vtx2.z); // Правый верхний дальний
        const vtx9 = new Vertex(vtx2.x, vtx2.y, vtx2.z); // Правый нижний дальний
        const vtx10 = new Vertex(vtx1.x, vtx2.y, vtx2.z); // Левый нижний дальний

        // Front
        this.plane1 = new Plane('z', vtx1, vtx4);
        // Back
        this.plane2 = new Plane('z', vtx6, vtx9);
        // Top
        this.plane3 = new Plane('y', vtx1, vtx7);
        // Bottom
        this.plane4 = new Plane('y', vtx5, vtx9);
        // Right
        this.plane5 = new Plane('x', vtx1, vtx10);
        // Left
        this.plane6 = new Plane('x', vtx3, vtx9);

        // Colors
        const colors = [
            [1.0, 1.0, 1.0, 1.0],    // Front face: white
            [1.0, 0.0, 0.0, 1.0],    // Back face: red
            [0.0, 1.0, 0.0, 1.0],    // Top face: green
            [0.0, 0.0, 1.0, 1.0],    // Bottom face: blue
            [1.0, 1.0, 0.0, 1.0],    // Right face: yellow
            [1.0, 0.0, 1.0, 1.0]     // Left face: purple
        ];

        this.colors = [];

        for (let j = 0; j < 6; j++) {
            const c = colors[j];

            for (let i = 0; i < 4; i++) {
                this.colors = this.colors.concat(c);
            }
        }

        this.colorBuffer = gl.createBuffer();
    }

    *[Symbol.iterator]() {
        yield* this.plane1;
        yield* this.plane2;
        yield* this.plane3;
        yield* this.plane4;
        yield* this.plane5;
        yield* this.plane6;
    }

    static get cubeVertexIndices() {
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,40,31,32,33,34,35,36];
        [
            0, 0x1, 2, /*  */0, 2, 3,      // front
            4, 0x5, 6, /*  */4, 6, 7,      // back
            8, 0x9, 10, /* */8, 10, 11,    // top
            12, 13, 14, /* */12, 14, 15,   // bottom
            16, 17, 18, /* */16, 18, 19,   // right
            20, 21, 22, /* */20, 22, 23    // left
        ];

    }
}
