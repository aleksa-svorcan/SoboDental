<template>
  <canvas ref="canvas" class="main-background" id="canvas"></canvas>
</template>

<script>

export default{
  name: 'MainBackground',
  data () {
    return {
      width: 300,
      height: 300
    }
  },
  mounted () {
    this.setCanvasSize()
    // register window resize event handler
    window.addEventListener('resize', this.onResize)

    this.draw()
  },
  destroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    initTimeline () {
      // create a timeline
      this.$timeline = new TimelineMax({
        paused: true
      })
      
      this.$timeline
        .from(this.$refs.canvas, 3, {
          opacity: 0,
          repeat: -1,
          backgroundColor:"rgba(210, 252, 169, 1.000)",
          onComplete:repeat,
          onCompleteParams:['{self}']
        })
        .to(this.$refs.canvas, 3, {
          repeat: -1,
          opacity: 0,
          backgroundColor:"rgba(249, 207, 249, 1.000)"
        })

      this.timelineReady = true;
    },
    onResize () {
      this.setCanvasSize()
      this.draw()
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
    draw () {
      let canvasEl = this.$refs.canvas
      let context = canvasEl.getContext('2d')

      let gradient = context.createLinearGradient(0, 0, 0, this.height)
      gradient.addColorStop(0, 'rgba(249, 207, 249, 1.000)')
      gradient.addColorStop(1, 'rgba(210, 252, 169, 1.000)')

      context.fillStyle = gradient
      context.fillRect(0, 0, this.width, this.height);
    }
  }
}
</script>

<style>
.main-background {
  pointer-events: none;
  z-index: -1;
  position: absolute;
}
</style>
