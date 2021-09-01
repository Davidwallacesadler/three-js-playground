import { World } from "./World"

function main() {
    const container = document.getElementById(`container`)
    if (container) {
        const world = new World(container)
        world.start()
    }
}

export { main }
