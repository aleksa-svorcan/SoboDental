const autoplayMixin = {
	created () {
    this.interval = null
    this.timeout = null
	},
	mounted () {
    // listen for component events
    this.$on('next-slide', this.pauseAutoPlay)
    this.$on('prev-slide', this.pauseAutoPlay)
    this.$on('nav-slide', this.pauseAutoPlay)
 		//start
    this.startAutoPlay()
  },
  methods: {
  	startAutoPlay () {
  		const self = this
  		let intervalDuration = 3000
      self.interval = setInterval(() => {
        self.increaseIndex()
      }, intervalDuration)
    },
    pauseAutoPlay () {
    	const self = this
    	let startAutoplayIn = 10000
    	console.log('pausing autoplay')
      clearInterval(self.interval)
      console.log('autoplay interval cleared')
      clearTimeout(self.timeout)
      console.log('autoplay timeout cleared')
      self.timeout = setTimeout(() => {

      	self.startAutoPlay()
      }, startAutoplayIn)
      console.log('autoplay timeout, will start again in', startAutoplayIn)
    }
  }
}

export default autoplayMixin