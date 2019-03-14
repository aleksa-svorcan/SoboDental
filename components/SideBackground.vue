<template>
  <div ref="sidebackground" class="sidebackground"></div>
</template>

<script>
export default{
  name: 'SideBackground',
  data () {
  	return {
  		animationDuration: 0.7
  	}
  },
  computed: {
  	sideBackgroundCondition () {
  		return this.$store.state.isSidebarOpen
  	}
  },
  methods: {
  	expandBackground () {
  			TweenMax.to(this.$refs.sidebackground, this.animationDuration, {
  				scaleX: 2.5
  			})
  	},
  	shrinkBackground () {
  			TweenMax.to(this.$refs.sidebackground, this.animationDuration, {
  				scaleX: 1
  			});
  	}
  },
  watch: {
  	sideBackgroundCondition : function(value) {
  		if (value) {
  			this.expandBackground()
  		}else {
  			this.shrinkBackground()
  		}
  	}
  }
}
</script>

<style>
.sidebackground{
	pointer-events: none;
	z-index: 0;
	position: fixed;
	top: 0;
	right: 0;
	height: 100%;
	background: #fff;
	width: 20%;
	transform-origin: right center;
	/*transform:translateX(60%);*/
}

@media (max-width: 768px) {
	.sidebackground {
    width: 25%;
	}
}
</style>
