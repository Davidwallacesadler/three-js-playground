import { PerspectiveCamera } from "three"

function createCamera() {
    
    const camera = new PerspectiveCamera(
        55, // FOV
        window.innerWidth / window.innerHeight, // Aspect Ratio
        10, // Near Clipping Plane
        30000 // Far Clipping Plane
    )
    camera.position.set(0, 10, 20)
    camera.tick = (delta) => {
        // camera.rotation.x += * delta
        // camera.zoom.set += 1 * delta
    }
    return camera
}

export { createCamera }