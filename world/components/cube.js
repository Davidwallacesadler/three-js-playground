/* eslint-disable no-unused-vars */
import { 
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    TextureLoader, 
    Vector2} from "three";

function createCube() {
    const boxGeo = new BoxBufferGeometry(2, 2, 2)
    const material = createMaterial()
    const cube = new Mesh(boxGeo, material)
    cube.rotation.set(-0.5, -0.1, 0.0)
    const radiansPerSecond = Math.PI / 8
    cube.tick = (delta, time) => {
        // if (time % 2 <= 1) {
        //     cube.position.x += 2 * delta
        // } else {
        //     cube.position.x -= 2 * delta
        // }
        // cube.rotation.x += radiansPerSecond * delta
        // cube.rotation.y += radiansPerSecond * delta
        // cube.rotation.z += radiansPerSecond * delta
    }
    return cube
}

function createMaterial() {
    const loader = new TextureLoader()
    const texture = loader.load(
        '/wallpaper.jpg'
    )
    // texture.offset = new Vector2(1, 0.7)
    // texture.repeat.set(0.25, 0.25)
    // texture.rotation = Math.PI / 4
    // texture.center.set(0, 0)
    const material = new MeshStandardMaterial({
        map: texture,
        bumpMap: texture,
        transparent: true,
    })
    return material
}

export { createCube }
