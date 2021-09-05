import { PlaneBufferGeometry, Mesh } from "three"
import { createStandardMaterial } from './material'

function createWorldPlane() {
    const planeGeometry = new PlaneBufferGeometry(1000, 1000)
    planeGeometry.rotateX(-(Math.PI / 2))
    const material = createStandardMaterial('/textures/checker.jpg')
    const mesh = new Mesh(planeGeometry, material)
    return mesh
}

export { createWorldPlane }