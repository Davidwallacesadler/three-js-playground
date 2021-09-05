import { FontLoader,
         TextGeometry,
         MeshBasicMaterial, 
         Mesh } from "three"

// import font from "@/node_modules/three/examples/fonts/helvetiker_regular.typeface.json"

function createFlatText(string, group) {
    const loader = new FontLoader()
    loader.load('/fonts/helvetiker_regular.typeface.json', function (font) {
        const params = {
            font,
            size: 80,
            height: 0,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0,
            bevelSize: 0,
            bevelOffset: 0,
            bevelSegments: 0,
        }
        const text = new TextGeometry(string, params)
        const material = new MeshBasicMaterial({
            color: 0xffffff,
        })
        group.add(new Mesh(text, material))
    })
}

function loadFont() {
    const loader = new FontLoader()
    loader.load('/fonts/helvetiker_regular.typeface.json', function (font) {
        return font
    })
}

export { createFlatText, loadFont }