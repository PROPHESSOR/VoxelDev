Global.Keyboard = new class Keyboard extends EventEmitter {
    constructor() {
        super();
        window.addEventListener('keydown', (event) => {
            this.emit('keydown', event.keyCode, event)
        })
        window.addEventListener('keyup', (event) => {
            this.emit('keyup', event.keyCode, event)
        })
        // window.addEventListener('keypress', (event) => {
        //     this.emit('keypress', event.keyCode, event)
        // })
    }
}()
