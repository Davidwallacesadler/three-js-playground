import { 
    // Color, 
    TextureLoader,
    Scene } from "three"

function createScene() {
    const scene = new Scene()
    // scene.background = new Color('hotpink')
    const loader = new TextureLoader();
    const bgTexture = loader.load('/wallpaper.jpg');
    scene.background = bgTexture;
    return scene
}

export { createScene }