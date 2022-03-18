import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'

export default class Experience {
    constructor(canvas) {
        // Global access
        window.experience = this

        // Options
        this.canvas = canvas

        // Setup
        this.sizes = new Sizes()
        this.time = new Time()

        this.sizes.on('resize', () => {
            this.resize()
        })
    }

    resize() {
        
    }
}