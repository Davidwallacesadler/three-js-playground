import { Clock } from "three"

const clock = new Clock() // Need to know how long the last frame took

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera
        this.scene = scene
        this.renderer = renderer
        this.animatables = []
        this.isRendering = false
    }

    start(){
        this.isRendering = true
        this.renderer.setAnimationLoop(() => {
            this.tick()
            this.renderer.render(this.scene, this.camera)
        })
    }

    stop(){
        this.isRendering = false
        this.renderer.setAnimationLoop(null)
    }

    tick() {
        const time = clock.elapsedTime
        const frameDelta = clock.getDelta()
        for(let i = 0; i < this.animatables.length; i++) {
            this.animatables[i].tick(frameDelta, time)
        }
    }
}

export { Loop }