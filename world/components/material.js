import { TextureLoader, MeshStandardMaterial } from "three"

function createStandardMaterial(teturePath, matParams) {
    if (arguments.length) {
        const loader = new TextureLoader()
        const texture = loader.load(teturePath)
        let material
        if (matParams) {
            material = new MeshStandardMaterial({
                map: texture,
                ...matParams,
            })
        } else {
            material = new MeshStandardMaterial({
                map: texture,
            })
        }
        return material
    }
    return new MeshStandardMaterial()
}

export { createStandardMaterial }