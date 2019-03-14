<template>
  <section id="Mission" class="section section-mission">
    <div class="section__container">
      <section-header :text="text" :title="title"/>
      <div class="row">
        <div class="missions-container col-md-8">
          <transition>
            <div class="missions">
              <div class="missions__header">
                <h2 class="missions__title animation">{{activeMission.fields.title}}</h2>
              </div>
              <div class="missons-nav">
                <div class="border-div"></div>
                <div class="nav-buttons-wrapper">
                  <span
                    class="nav-button"
                    :class="{active: activeIndex === index}"
                    v-for="(item, index) in missions"
                    :key="index"
                    v-on:click.prevent="onNavClick(index)" />
                </div>
              </div>
              <div class="missions__text animation" v-html="activeMission.fields.content" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader.vue'
import Mission from './Mission.vue'
import autoplayMixin from '@/mixins/autoplayMixin'
import {TweenMax} from 'gsap'

export default {
  name: 'Missions',
  mixins: [
    autoplayMixin
  ],
  data () {
    return {
      text: 'Our mission',
      title: 'The sobo way',
      activeIndex: 0,
      isAnimating: false,
      isAutoPlay: true
    }
  },
  components: {
    SectionHeader,
    Mission
  },
  computed: {
    missions () {
      return this.$store.getters.getMissions
    },
    activeMission () {
      return this.missions[this.activeIndex]
    }
  },
  methods: {
    opacityAnimation () {
      if (self.isAnimating) return
      this.isAnimating = true
      let animel = this.$el.querySelectorAll(".animation")
      TweenMax.from (animel, 1, {
          x: -20,
          opacity: 0,
          ease: 'Power2.easeInOut',
          onComplete: () => {
            this.isAnimating = false
          }
        })
    },
    increaseIndex () {
      this.activeIndex = this.activeIndex < this.missions.length - 1 ? this.activeIndex + 1 : this.activeIndex = 0
    },
    decreaseIndex () {
      this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : this.activeIndex= this.missions.length - 1
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

.section-mission {
  z-index:2;
  position: relative;
  margin-top: $width-unit * 2;
  margin-bottom: $width-unit;

  .section-header {
    margin-bottom: 2rem;

    @include media-breakpoint-up(md) {
      margin-bottom: 3rem;
    }
  }

  .missons-nav {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    @include media-breakpoint-up(md) {
      width: 120%;
    }

    .border-div {
      flex: 1;
      border-bottom: 2px solid black;
    }

    .nav-buttons-wrapper {
      position: relative;
      display: flex;
      padding-left: 0.75rem;

      .nav-button {
        position: relative;
        display: block;
        background: black;
        margin: 10px;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        opacity: 0.6;
        transition: opacity 0.4s;

        &:after {
          content: " ";
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 1px solid black;
          width: 16px;
          height: 16px;
          transform: translate(-50%, -50%);
          transform-origin: 50% 50%;
          opacity: 0;
          transition: all 0.8s ease-in-out;
        }

        &.active {
          opacity: 1;
          &:after {
            opacity: 1;
          }
        }
      }
    }
  }

  .missions__header {
    height: 70px;
    @include media-breakpoint-up(sm) {
      height: 100px;
    }
    @include media-breakpoint-up(md) {
      height: 130px;
    }
     @include media-breakpoint-up(xl) {
      height: 170px;
    }
    .missions__title {
      font-size: 1.8rem;

      @include media-breakpoint-up(sm) {
        font-size: 2rem;
      }

      @include media-breakpoint-up(md) {
        font-size: 2.5rem;
      }

      @include media-breakpoint-up(lg) {
        font-size: 3rem;
      }

      @include media-breakpoint-up(xl) {
        font-size: 4rem;
      }
    }
  }

  .missions__text {
    margin-top: 7vh;
    margin-bottom: 2rem;
    height: 350px;
    @include media-breakpoint-up(sm) {
      height: 250px;
    }
    @include media-breakpoint-up(md) {
      height: 150px
    }
    @include media-breakpoint-up(xl) {
      height: 100px;
    }
  }

}

</style>
