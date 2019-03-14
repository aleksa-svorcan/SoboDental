<template>
  <div class="member col-6 col-md-4" v-view.once="onInView">
    <div class="member-container">
      <div class="member__media">
        <router-link :to="{ name: 'member', params: { member: member.fields.slug }}">
          <img ref="image" v-on:click="showMemberDetail" :src="memberImageSrc" class="member__media__image" />
        </router-link>
      </div>
      <div ref="name" class="member__media__name">
        <span>{{member.fields.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'member',
  data () {
    return {
      timelineReady: false,
    }
  },
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.initTimeline()
    },
  computed: {
    memberImageSrc () {
      return require('@/assets/img/' + this.member.fields.image)
    }
  },
  methods: {
    showMemberDetail () {
      this.$store.commit('setMemberDetailOpen', true)
      this.$store.commit('setSidebarOpen', true)
    },
    initTimeline () {
      this.$timeline = new TimelineMax({
        paused: true
      })
      this.$timeline
        .staggerTo(".member-container", 1, {
          opacity: 1,
          ease: Power2.easeInOut
        },0.3)

      this.timelineReady = true;
    },
    onInView() {
     if (!this.timelineReady) {
        return
      }
      this.$timeline.play()
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../design/index.scss';

  .member {
    padding-left:0;
    position: relative;
    margin:0;
    margin-bottom: 2rem;
  }
  .member-container {
    opacity: 0;
  }
    .member__media {
      cursor:pointer;
      position:relative;
      z-index:1;
      .member__media__image {
        max-width: 100%;
        position:relative;
      }
    }
    .member__text {
      width: 33.33333%;
    }
    .member__media__name {
        z-index:2;
        margin-top: 0.6rem;
        width: 100%;
        overflow: hidden;
        line-height: 1;
        span {
          display:block;
          height: 30px;
        }
      }
</style>
