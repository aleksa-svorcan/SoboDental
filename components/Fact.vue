<template>
  <section
    v-view.once="onInView"
    class="fact row no-gutters"
    :class="{'fact--right': layoutRight, 'wait': wait}">
    <div class="fact__content col-12 col-sm-6">
      <div class="fact__content__wrapper">
        <span ref="index" class="fact__content__index">{{ paddedIndex }}</span>
        <h3 ref="title" class="fact__content__title">{{ fact.title }}</h3>
        <div ref="content" class="fact__content__text" v-html="fact.content" />
      </div>
    </div>
    <div class="fact__media col-12 col-sm-6">
      <div class="fact__media__wrapper">
        <blockreveal
          ref="blockreveal"
          :direction="blockRevealDirection"
          :speed="0.7"
          :color="avgImageColor">
          <img :src="imageSrc" class="fact__media__img" ref="image"/>
        </blockreveal>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'
import {TimelineMax} from 'gsap'
import blockreveal from './BlockReveal.vue'
import getAverageImageColor from '../mixins/imageColor.js'
Vue.use(checkView)

export default {
  name: 'fact',
  components: {
    blockreveal
  },
  data () {
    return {
      title: 'fact title',
      wait: true,
      timelineReady: false,
      avgImageColor: 'rgb(0,0,0)'
    }
  },
  props: {
    fact: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    paddedIndex () {
      return `0${this.index + 1}`
    },
    layoutRight () {
      return this.index % 2 !== 0
    },
    blockRevealDirection () {
      return this.layoutRight ? 'lr' : 'rl'
    },
    imageSrc () {
      return require('@/assets/img/' + this.fact.image)
    }
  },
  mounted () {
    this.initTimeline()
    const self = this
    let imgSrc = this.imageSrc
    self.loadImage(imgSrc).then(() => {
      this.avgImageColor = this.getAvgImageColor()
    })
  },
  methods: {
    getAvgImageColor () {
      let rgb  = getAverageImageColor(this.$refs.image)
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    },
    initTimeline () {
      this.$timeline = new TimelineMax({
        paused: true,
      })

      let items = this.$refs.content.querySelectorAll('li')

      this.$timeline
        .from(this.$refs.index, 0.5, {
          x: -20,
          opacity: 0,
          delay: 0.8,
          ease: Power2.easeInOut
        })
        .from(this.$refs.title, 0.5, {
          x: -20,
          opacity: 0,
          ease: Power2.easeInOut
        }, 0.3)
        .staggerFrom(items, 0.3, {
          x: -20,
          opacity: 0,
          ease: Power2.easeInOut,
          onComplete: function() {
            clearProps: 'all'
          }
        }, 0.1, 0.6)

      this.timelineReady = true;
    },
    onInView() {
      if (!this.timelineReady) {
        return
      }
      this.wait = false
      this.$timeline.play()
      this.$refs.blockreveal.start()
    }
  }
  }
</script>

<style lang="scss" scoped>
@import '../design/index.scss';

.fact {
  margin-top: $width-unit;
  position: relative;
  display: flex;
  flex-direction: row;

  @include media-breakpoint-up(sm) {
    margin-top: 0;
  }

  @include media-breakpoint-up(md) {
    margin-top: $width-unit;
  }

  // columns

  .fact__content {
    order: 2;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 100%;

    @include media-breakpoint-up(sm) {
      padding-top: $width-unit;
    }

    @include media-breakpoint-up(lg) {
      padding-left: 0;
      margin-left: 0;
      justify-content: flex-start;
    }

    .fact__content__wrapper {
      height: 100%;
      @include media-breakpoint-up(md) {
        padding: 1rem;
      }
    }

    .fact__content__index {
      display: block;
      position: absolute;
      border-bottom: 1px solid black;
      width: 30%;
      left: 0;
      transform-origin: left center;
      z-index: 9;
      opacity: 0.8;
      padding-top: 10px;

      @include media-breakpoint-up(md) {
        margin-left: $width-unit;
        padding-top: 0;
      }

      @include media-breakpoint-up(lg) {
        top:30px;
        margin-left: -80px;
        padding-left: 160px;
      }

      @include media-breakpoint-up(xl) {
        top: $width-unit / 2;
        margin-left: -120px;
        padding-left: 200px;
      }
    }

    .fact__content__title {
      margin-top: 3rem;
      padding-top: 10px;

      @include media-breakpoint-up(sm) {
        margin-top: 2rem;
        padding-right: 10px;
      }

      @include media-breakpoint-up(md) {
        padding-left: 20px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 1rem;
      }

      @include media-breakpoint-up(xl) {
        font-size: 2rem;
      }
    }

    .fact__content__text {
      padding-right: 15px;
      padding-top: 10px;
    }

    li {
      width: 100px;
    }
  }

  .fact__media {
    order: 1;
    height: 300px;
    width: 100vw;
    position: relative;
    max-width: 100%;

    @include media-breakpoint-up(sm) {
      width: 100%;
      height: 300px;
    }

    @include media-breakpoint-up(xl) {
      height: 400px;
    }
    .fact__media__wrapper {
      position:relative;
      height: 100%;
      width: 100%;
      display:flex;
      flex-direction:row;


      @include media-breakpoint-up(sm) {
        padding: $width-unit / 3;
      }

      @include media-breakpoint-up(md) {
        padding: 0;
        justify-content:flex-end;
      }

      .block-reveal {
        height: 100%;
      }
    }

    .fact__media__img {
      max-width:100%;
      height: 100%;
      width: auto;
      max-height: 100%;


    }
  }

  // modifier 'right'
  &.fact--right {
    .fact__content {
      @include media-breakpoint-up(sm) {
        order: 1;
      }
      @include media-breakpoint-up(md) {
        justify-content:flex-end;
      }

      .fact__content__text {
      }
      .fact__content__title {

      }
      .fact__content__index {

        position:absolute;
        border-bottom:1px solid black;
        display:block;
        width: 30%;
        left: 0;
        direction:ltr;
        transform-origin: right center;
        z-index: 9;
        opacity: 0.8;
        @include media-breakpoint-up(sm) {
          margin-left: 0;
          left: auto;
          right: - $width-unit;
          width: $width-unit * 2;
          top: $width-unit / 2;
          padding-right: - $width-unit * 3;
          padding-left: 0;
        }
      }
    }
    .fact__media {
      position:relative;
      @include media-breakpoint-up(sm) {
       order: 2;
      }
      .fact__media__wrapper {
        position:relative;
        justify-content:flex-start;
        .fact__media__img {
          max-width: 100%;
          height: 100%;
          width: auto;
          max-height: 100%;
        }
      }
    }
  }
}

.wait {
  opacity: 0;
}
</style>
