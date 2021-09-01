import { createCamera } from './components/camera'
// import { createCube } from './components/cube'
import { createScene } from './components/scene'
import { createLights } from './components/lights'
import { createMeshGroup } from './components/meshGroup'
import { createSkyBox } from './components/skybox'

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

        const skybox = createSkyBox()
        // const cube = createCube()
        const group = createMeshGroup()
        const { ambientLight, mainLight } = createLights()
        scene.add(skybox, group, mainLight, ambientLight)
        loop.animatables.push(group)
        // loop.animatables.push(camera)
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
