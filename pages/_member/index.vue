<template>
	<div class="member-detail">
		<div class="member-detail__media">
			<img ref="image" :src="memberImageSrc" class="member__media__image" />
		</div>
		<div class="member-detail__text" ref="content">
			<div class="member-detail__text__inner" >
				<h2 class="member__title" v-html="member.fields.title" />
				<div class="member__text" v-html="member.fields.bio"/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'member-detail',
	data () {
      return {
        timelineReady: false
      }
    },
	head () {
		return {
      title: this.member.fields.title,
      meta: [
        { hid: this.member.fields.name, name: this.member.fields.title, content: this.member.fields.bio }
      ]
    }
   },
	computed: {
		isMemberOpen () {
			return this.$store.state.isMemberOpen
		},
		member () {
			return this.$store.getters.getMemberBySlug(this.$route.params.member)
		},
		memberImageSrc () {
	  return require('@/assets/img/' + this.member.fields.image)
		}
		},
		mounted () {
    this.initTimeline()
    this.$timeline.play()
    },
		methods: {
			initTimeline () {
      this.$timeline = new TimelineMax({
        paused: true
      })
      this.$timeline
        .from(this.$refs.image, 1, {
          opacity: 0,
          ease: Power2.easeInOut
        })
        .from(this.$refs.content, 0.5, {
          x: 50,
          opacity: 0,
          ease: Power2.easeInOut
        }, '-=2')
      this.timelineReady = true;
    }
	}
}
</script>

<style lang="scss" scoped>
@import '../../design/index.scss';

.member-detail {
	position: relative;
	display: flex;
	flex-direction:column;
	width: 100%;
	height: 100%;
	pointer-events: all;

	@include media-breakpoint-up(md) {
		padding-top: 200px;
		flex-direction:row;
	}
	@include media-breakpoint-up(lg) {
		padding-top: 0;	
	}

	.member-detail__media {
		position: relative;
		height: 50%;
		padding: 20px;
		
		@include media-breakpoint-up(md) {
			flex: 0 0 50%;
			height:100%;
			padding: 0;
		}

		.member__media__image {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	.member-detail__text {
		position: relative;
		height: 50%;
		overflow-y: auto;
		margin-top: 100px;
		box-sizing: border-box;
		padding: 20px;
		
		@include media-breakpoint-up(md) {
			flex: 0 0 50%;
			height: 100%;
			max-height: 100vh;
			padding: 0 20px 0 20px;
			margin-top:0;
			overflow:scroll;
		}

		@include media-breakpoint-up(lg) {
			padding-top: 12rem;
		}
		
		.member-detail__text__inner {
			padding: 0;
			@include media-breakpoint-up(md) {
				padding: 2rem;
			}
		}
	}
}
</style>