import { DirectionalLight, HemisphereLight } from "three"

function createLights() {
    // const ambientLight = new AmbientLight('white', 2)
    const ambientLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        3, // intensity
      );
    const mainLight = new DirectionalLight('white', 0)
    mainLight.position.set(10,10,10) // Default target is (0,0,0)
    return { ambientLight, mainLight }
}

export { createLights }