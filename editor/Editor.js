Global.Editor = new class Editor {
    constructor(width, height, depth) {
        [this.img_width, this.img_height, this.img_depth] = [width, height, depth];
        this.buffer = new Uint8ClampedArray(width * height * depth);
        /* 
            ^
            | ->
        */
    }
    
    /** Преобразовывает координаты в отступ по буфферу
     * @param  {number} x - X координата
     * @param  {number} y - Y координата
     * @param  {number} z - Z координата
     * @returns {number} offset
     */
    xyzToOffset(x, y, z) {
        return (z * y) + x;
    }

    *[Symbol.iterator]() {
        yield* this.buffer[Symbol.iterator];
    }
}(5, 5)
