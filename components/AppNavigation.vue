<template>
	<section ref="navbar" class="section-nav">
		<div class="section-nav__item" v-for="(item, index) in items" :key="index">
			<a
				class="section-nav__a"
				v-scroll-to="'#' + item"
				v-on:click="linkOnClick">
				{{item}}
			</a>
		</div>
	</section>
</template>

<script>
import {TimelineMax} from 'gsap'

export default {
	name: 'app-navigation',
	data () {
		return {
			timelineReady: false,
			items: [
				'Intro',
				'Community',
				'Mission',
				'Testimonials',
				'Facts',
				'Team',
				'Services',
				'Patients',
				'Office'
			]
		}
	},
	computed: {
		isSidebarOpen () {
			return this.$store.state.isSidebarOpen
		},
		isMemberOpen () {
			return this.$store.state.isMemberOpen
		}
	},
	mounted () {
		this.initTimeline()
	},
	methods: {
		linkOnClick () {
			const self = this
			window.setTimeout(() => {
				self.$store.commit('setSidebarOpen', false)
				self.hide()
			}, 420);
		},
		initTimeline () {
			this.$timeline = new TimelineMax({
				paused: true
			})

			let els = this.$el.querySelectorAll('.section-nav__item')

			this.$timeline
				.to(this.$refs.navbar, 0.3, {x:0})
				.staggerFrom(els, 0.3, {
					x: 20,
					opacity: 0,
					clearProps: 'all'
				}, 0.05)

			this.timelineReady = true;
		},
		show () {
			if (!this.timelineReady) return
			this.$timeline.play()
		},
		hide () {
			if (!this.timelineReady) return
			this.$timeline.reverse()
		},
	},
	watch: {
		isSidebarOpen: function (isOpen) {
			if (isOpen) {
				this.show()
			} else {
				this.hide()
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../design/index.scss';

.section-nav {
	display:flex;
	flex-direction:column;
	z-index: 4;
	position: fixed;
	top: 50%;
	right: 0;
	height: 400px;
	background: #fff;
	width: 15%;
	transform-origin: right center;
	transform:translateX(100%);

	.section-nav__a {
		cursor:pointer;
		text-decoration: none;
    text-transform: uppercase;
    font-size: 10px;

    @include media-breakpoint-up(md) {
    	font-size: 18px;
    }
	}
	.section-nav__item{		
		text-align: right;
    margin-right: 50px;
    position: relative;
    padding-right: 24px;
    margin-bottom: 8px;

	}
	.section-nav__item:after {
		display:none;
    content: " ";
    position: absolute;
    width: 40px;
    height: 2px;
    background: #000;
    top: 50%;
    left: 100%;
    @include media-breakpoint-up(md) {
    	display: inline;
    }
	}
}
</style>
