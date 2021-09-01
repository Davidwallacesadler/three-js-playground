<template>
    <main class="page-wrapper">
        <button class="control-button" @click="handleButtonClick()">{{buttonText}}</button>
        <div class="world-wrapper">
            <div id="container" />
        </div>
    </main>
</template>

<script>
import { World } from '../world/World.js'
let world
function main() {
    const container = document.getElementById(`container`)
    if (container) {
        world = new World(container)
        world.start()
    }
}

export default {
name: `MyWorld`,
data() {
    return {
        isRendering: true,
    }
},
computed: {
    buttonText() {
        return this.isRendering ? `Stop Rendering` : `Start Rendering`
    },
},
mounted() {
    main()
},
methods: {
    handleButtonClick() {
        if (this.isRendering) {
            this.stopAnimationLoop()
        } else {
            this.startAnimationLoop()
        }
        this.isRendering = !this.isRendering
    },
    startAnimationLoop() {
        world.start()
    },
    stopAnimationLoop() {
        world.stop()
    },
}
}

</script>

<style>
.control-button {
    background: white;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 0px 1px gray;
    color: darkslategray;
    top: 1rem;
    left: 1rem;
    position: absolute;
}
.control-button:hover {
    cursor: pointer;
}
#container {
    height: 100vh;
}
</style>