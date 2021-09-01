import {
    BoxBufferGeometry,
    TextureLoader,
    Mesh,
    BackSide,
    MeshBasicMaterial,
} from 'three'

// Box Sides Layout:
// -- up -- --
// bk lf fr rt
// -- dn -- --
function createSkyBox() {
    const loader = new TextureLoader()
    const frontTexture = loader.load('/skyboxes/arid/arid_ft.jpg')
    const backTexture = loader.load('/skyboxes/arid/arid_bk.jpg')
    const upTexture = loader.load('/skyboxes/arid/arid_up.jpg')
    const downTexture = loader.load('./skyboxes/arid/arid_dn.jpg')
    const rightTexture = loader.load('/skyboxes/arid/arid_rt.jpg')
    const leftTexture = loader.load('/skyboxes/arid/arid_lf.jpg')

    const materials = []
    materials.push(new MeshBasicMaterial({map: frontTexture}))
    materials.push(new MeshBasicMaterial({map: backTexture}))
    materials.push(new MeshBasicMaterial({map: upTexture}))
    materials.push(new MeshBasicMaterial({map: downTexture}))
    materials.push(new MeshBasicMaterial({map: rightTexture}))
    materials.push(new MeshBasicMaterial({map: leftTexture}))
    for(let i = 0; i < materials.length; i++) {
        materials[i].side = BackSide
    }
    
    const boxGeometry = new BoxBufferGeometry(10000, 10000, 10000)
    return new Mesh(boxGeometry, materials)
}

export { createSkyBox }