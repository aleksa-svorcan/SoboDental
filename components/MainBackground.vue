<template>
  <canvas
    id="granim-canvas"
    class="main-background"
    ref="canvas">
  </canvas>
</template>

<script>
import Granim from 'granim'

export default {
  name: 'MainBackground',
  data () {
    return {
      width: 300,
      height: 300
    }
  },
  mounted () {
    this.setCanvasSize()

    window.addEventListener('resize', this.onResize)
    // initialize granim (canvas gradient animation)
    this.initGranim()
  },
  destroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    initGranim () {
      let granimInstance = new Granim({
        element: '#granim-canvas',
        name: 'granim',
        direction: 'top-bottom',
        opacity: [1, 1],
        states : {
          "default-state": {
            gradients: [
              [ '#e2ffff', '#ccffff' ],
              [ '#f3e7e9', '#e3eeff' ],
              [ '#cfd9df', '#e2ebf0' ],
              [ '#e2d1c3', '#fdfcfb' ],
              [ '#ffe3e8', '#f0c5cd' ],
              [ '#d9ded8', '#ebc0fd' ],
              [ '#fedeec', '#fedeec' ],
              [ '#f0c5cd', '#ffe3e8' ],
              [ '#ace0f9', '#fff1eb' ],
              [ '#fdfcfb', '#caf9f7' ]
            ],
            transitionSpeed: 4500
          }
        },
      })
    },
    onResize () {
      this.setCanvasSize()
    },
    setCanvasSize () {
      // get viewport width / height
      let appW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      let appH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      this.width = appW
      this.height = appH
      let canvasEl = this.$refs.canvas
      // update canvas size
      canvasEl.height = this.height
      canvasEl.width = this.width
    },
  }
}
</script>

<style>
.main-background {
  pointer-events: none;
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
