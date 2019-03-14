<template>
	<section id="Testimonials" class="section section-testemonials">
    <div class="section__container">
      <div class="header">
        <section-header :text="text" :title="title"/>
      </div>

      <div class="svg-container">
        <div class="testimonials-card-wrapper">
          <div class="testimonials-card__content">
            <div class="nav-buttons-wrapper">
            	<div class="nav-buttons__counter">{{this.activeIndex + 1}} / {{this.testemonials.length}}</div>
            	<div class="nav-buttons__line"></div>
              <span
	              class="nav-button"
	              :class="{active: activeIndex === index}"
	              v-for="(item, index) in testemonials"
	              :key="index"
	              v-on:click.prevent="onNavClick(index)">
              </span>
          	</div>
            <transition>
							<div>
								<div class="testemonial__header">
									<h2 class="testemonial__text animation">{{activeTestemonial.fields.content}}</h2>
									<div class="testemonial__user animation" v-html="activeTestemonial.fields.user" />
								</div>
							</div>
            </transition>
          </div>
    			<div class="testimonials-card elevation--z4--lg">
						<div class="testimonials-card__inner">
        			<div class="testimonials-card__quote-mark">
	          		<svg class="testimonials-card__quote-mark__svg">
									<defs>
										<linearGradient x1="1" y1="0" x2="0" y2="1" id="linearGradientSjlnlg7b16">
											<stop offset="0%" stop-color="#efe7fc"></stop>
											<stop offset="100%" stop-color="#ffcdd2"></stop>
										</linearGradient>
										<filter id="Sjlnlg7b18" filterUnits="userSpaceOnUse">
											<feGaussianBlur in="SourceAlpha" stdDeviation="4"></feGaussianBlur>
											<feOffset dx="0" dy="2" result="offsetblur"></feOffset>
											<feFlood flood-color="#000000"></feFlood>
											<feComposite in2="offsetblur" operator="in"></feComposite>
											<feComponentTransfer>
												<feFuncA type="linear" slope="0.3">
												</feFuncA>
											</feComponentTransfer>
											<feMerge>
												<feMergeNode></feMergeNode>
												<feMergeNode in="SourceGraphic"></feMergeNode>
											</feMerge>
										</filter>
										<mask id="maskSjlnlg7b1c">
											<g fill="#ffffff" style="">
												<circle cx="50%" cy="45%" r="35%"></circle>
												<rect x="50%" y="0" width="50%" height="100%" fill="#ffffff" style="">
												</rect>
											</g>
										</mask>
									</defs>
									<rect x="0" y="0" width="50%" height="100%" fill="#ffffff" style=""></rect>
									<circle cx="50%" cy="50%" r="40%" fill="url('#linearGradientSjlnlg7b16')" mask="url('#maskSjlnlg7b1c')"></circle>
								</svg>
	        		</div>
							<div class="testimonials-card__action">
	              <a href="#" class="btn btn-outline">More reviews</a>
	            </div>
						</div>
          </div>
        </div>
      </div>
    </div>
	</section>
</template>

<script>
import SectionHeader from './SectionHeader.vue'
import Testemonial from './Testemonial.vue'
import autoplayMixin from '@/mixins/autoplayMixin'

export default {
	name:'Testemonials',
  mixins: [
    autoplayMixin
  ],
	data () {
  	return {
    	text: 'Testimonials',
    	title: 'What our patients say',
      activeIndex: 0,
      isAnimating: false,
      isAutoPlay: true
  	}
  },
  components: {
  	SectionHeader,
  	Testemonial
  },
  computed: {
  	testemonials() {
  		return this.$store.getters.getTestemonials
  	},
    activeTestemonial () {
      return this.testemonials[this.activeIndex]
    }
  },
  methods: {
     opacityAnimation () {
      if (self.isAnimating) return
      this.isAnimating = true

      let animel = this.$el.querySelectorAll(".animation")
      TweenMax.from (animel, 0.7, {
        y: -20,
        opacity: 0,
        ease: 'Power2.easeInOut',
        onComplete: () => {
          this.isAnimating = false
        }
        })
    },
    increaseIndex () {
      this.activeIndex = this.activeIndex < this.testemonials.length - 1 ? this.activeIndex + 1 : this.activeIndex = 0
    },
    decreaseIndex () {
      this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : this.activeIndex= this.testemonials.length - 1
    },
    onClickNext () {
      if (this.isAnimating) return
      this.$emit('next-slide')
      this.increaseIndex()
    },
    onClickPrevious () {
      if (this.isAnimating) return
      this.$emit('prev-slide')
      this.decreaseIndex()
    },
    onNavClick (index) {
      if (this.isAnimating) return
      this.$emit('nav-slide')
      this.activeIndex = index;
    }
  },
  watch: {
    activeIndex: function (newindex, oldindex) {
      this.opacityAnimation()
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../design/index.scss';

.section-testemonials{
  z-index:2;
	position: relative;
  margin-top: $width-unit * 2;
  margin-bottom: $width-unit * 3;

  .header {
    margin-bottom: $width-unit/2;
  }
}

.testimonials-card-wrapper {
  max-width: 1400px;
  position: relative;
  width: 100%;
  height: 100%;
  display:flex;
  align-items:center;
}

.elevation--z4--lg {
  box-shadow: 0 40px 50px 0 rgba(0,0,0,.13);
}

.testimonials-card {
  padding-top: 60%;
  position: relative;
  background: #f4f2f4;
  width: 100%;
  height: 450px;

  @include media-breakpoint-up(sm) {
    height: 100%;
  }

  @include media-breakpoint-up(md) {
    height: 400px;
  }
}

.testimonials-card__inner {
	display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.testimonials-card__quote-mark {
	display: none;
  position: absolute;
  width: 60%;
  height: 100%;
  top: 0;
  left: 0;

  @include media-breakpoint-up(lg) {
    display: block;
  }
}

.testimonials-card__quote-mark__svg {
  width: 100%;
  height: 100%;
}

.testimonials-card__content {
  position: absolute;
  width:100%;
  top: 10%;
  left: 0;
  z-index: 3;
  height: 100%;
  padding: 10%;
  display:flex;
  flex-direction:column;

  @include media-breakpoint-up(md) {
    padding:0;
    align-items: center;
    flex-direction:row;
    padding:10%;
    top:0;
  }
  @include media-breakpoint-up(lg) {
    padding:0;
    padding-left: 20%;
    padding-right: 5%;
  }

	.testemonial__header {
    .testemonial__text {
      font-size: 24px;

      @include media-breakpoint-up(md) {
        font-size: 28px;
      }

			@include media-breakpoint-up(lg) {
        font-size: 30px;
      }

			@include media-breakpoint-up(xl) {
        font-size: 3vw;
      }
    }
  }

	.nav-buttons-wrapper {
    display:flex;
    align-items:center;
    position: absolute;
    top: - 5%;
    left: 10%;
    width: 100%;
    @include media-breakpoint-up(sm) {
      top: 5%;
    }
    @include media-breakpoint-up(lg) {
      width: auto;
      top:80%;
      left:10%;
      bottom:auto;
      transform-origin: left center;
      transform: rotate(-90deg);
    }

		.nav-buttons__counter {
      width: 40px;
    }

		.nav-buttons__line {
      width: 40%;
      border: 0.5px solid black;
      margin: 13px;

      @include media-breakpoint-up(md) {
        width: 50%;
      }

      @include media-breakpoint-up(lg) {
        width: 70px;
      }

			@include media-breakpoint-up(xl) {
        width: 100px;
      }
    }

		.nav-button {
      opacity:0.6;
      display:block;
      width: 10px;
      height: 30px;
      background: black;
      margin: 12px;
      height: 12px;
      width: 12px;
      border-radius: 30px;

			&::after {
        position:absolute;
        content: " ";
        font-weight: bold;
        padding: 10px;
        border-radius: 30px;
        border: 1px solid black;
        top:7px;
        transform: translateX(-5px);
        opacity:0;
      }

			&.active {
        opacity:1;
        transition: opacity 1s;

				&::after {
          opacity:1;
          transition: opacity 1s;
        }
      }
    }
  }
}

.testimonials-card__action {
	display: flex;
	flex-direction: row;
	height: 20%;
  justify-content: flex-end;
  background: #ede2e9;
  align-items: center;
  margin-top: auto;
	padding: 2rem;

  @include media-breakpoint-up(sm) {
    margin: 0;
    margin-top: auto;
  }

  .btn-outline {
    
    color: #000;
    background-color: transparent;
    border-color: #000;
    text-decoration: underline;
    text-transform: uppercase;
    background-image: none;
    padding: 1.5rem 3rem;
    font-size: 14px;
    width: 100%;

    @include media-breakpoint-up(md) {
      width: auto;
    }
  }
  }

.testimonials-card .testimonials-card__inner:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    background: #fff;
    z-index: -1;
}

</style>
