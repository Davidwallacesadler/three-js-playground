import { createCamera } from './components/camera'
import { createScene } from './components/scene'
import { createLights } from './components/lights'
// import { group } from './components/meshGroup'
import { createSkyBox } from './components/skybox'
import { createWorldPlane } from './components/plane'
import { createAxes } from './components/axes'
// import { createFlatText } from './components/text'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'
import { Loop } from './systems/Loop'
import { createControls } from './systems/controls'

// Module Scoped vars:
let camera
let renderer
let scene
let loop

class World {
    constructor(container) {
        camera = createCamera()
        renderer = createRenderer()
        scene = createScene()
        loop = new Loop(camera, scene, renderer)
        container.append(renderer.domElement)

        const controls = createControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.enableKeys = true
        // controls.autoRotate = true
        controls.minDistance = 0
        controls.maxDistance = 900
        controls.tick = () => {
            controls.update();
        }

        // createFlatText(`foobar`, scene)
        const skybox = createSkyBox()
        const worldPlane = createWorldPlane()
        const { ambientLight, mainLight } = createLights()
        const axes = createAxes()
        scene.add(skybox, worldPlane, mainLight, ambientLight, axes)
        loop.animatables.push(controls)
        
        // eslint-disable-next-line no-unused-vars
        const resizer = new Resizer(container, camera, renderer)
    }

    // Call to draw a single frame - if no animations are needed
    render() {
        renderer.render(scene, camera) // Draws a single frame
    }

    // Call to start a stream of rendering
    start() {
        loop.start()
    }

    stop() {
        loop.stop()
    }

    getLoopState() {
        return loop.isRendering
    }
}

export { World }
