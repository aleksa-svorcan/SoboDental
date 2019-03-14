<template>
  <div>
  <main ref="contentwrapper" class="content-wrapper">
    <Intro/>
    <Community/>
    <Missions/>
    <Testemonials/>
    <Facts/>
    <Members/>
    <Services/>
    <Portal/>
    <Contact/>
  </main>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import Intro from '../components/SectionIntro'
import Community from '../components/SectionCommunity'
import Missions from '../components/SectionMission'
import Testemonials from '../components/SectionTestemonials'
import Facts from '../components/SectionFacts'
import Members from '../components/SectionMembers'
import Services from '../components/SectionServices'
import Portal from '../components/SectionPortal'
import Contact from '../components/SectionContact'
export default {
  components: {
    Logo,
    Intro,
    Community,
    Missions,
    Testemonials,
    Facts,
    Members,
    Services,
    Portal,
    Contact,
  },
  head () {
    return  {
      title:"SoboDental South of Boston",
      meta:[
        {"charset":"utf-8"},
        {"name":"viewport","content":"width=device-width, initial-scale=1"},
        {"hid":"description","name":"description","content":"My mathematical Nuxt.js project"}
      ],
      link:[
        {"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}
      ],
      style:[],
      script:[]
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
  methods: {
    expandContent () {
      TweenMax.to(this.$refs.contentwrapper, 0.8, { x: -100, opacity: 0 })
    },
    shrinkContent () {
      TweenMax.to(this.$refs.contentwrapper, 0.8, { x: 0, opacity: 1, delay: 0.5 })
    },
    showMember () {
      // hide body scroll
      //TweenMax.set("body", { overflowY: 'hidden' })
      // hide page content
      //TweenMax.to(this.$refs.contentwrapper, 0.4, { x: -100, opacity: 0} )
      // show member detail
      //TweenMax.to(this.$refs.memberdetailswrapper, 0.8, { opacity: 1, delay: 0.5 })
    },
    hideMember () {
      // reset body scroll
      //TweenMax.set("body", { overflowY: 'auto' })
      // hide member detail
      //TweenMax.to(this.$refs.memberdetailswrapper, 0.4, { opacity: 0 })
    }
  },
  watch: {
    isSidebarOpen: function (isOpen) {
      if (isOpen) {
        this.expandContent()
      } else {
        this.shrinkContent()
      }
    },
    isMemberOpen: function (isOpen) {
      if (isOpen) {
        this.showMember()
      } else {
        this.hideMember()
      }
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
@import '../design/index.scss';

.main {
  position: relative;
  padding: 0;
  margin: 0;
  width:100%;
}

.content-wrapper {
  z-index: 1;
  display: block;
  position: relative;
  will-change: transform;
  min-width: 100%;
  max-width: 100%;
  width: 100%;
}

.member-details-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 980;
  pointer-events: none;
}

.section {
  padding-left: $logo-col-width;
  padding-right: $logo-col-width;
  margin-bottom: $width-unit;

  @include media-breakpoint-up(sm) {
    padding-left: $logo-col-width-sm;
    padding-right: $logo-col-width-sm;
  }
   @include media-breakpoint-up(md) {
    padding-left: $logo-col-width-md;
    padding-right: $logo-col-width-md;
  }
   @include media-breakpoint-up(lg) {
    padding-left: $logo-col-width-lg;
    padding-right: $logo-col-width-lg;
  }
   @include media-breakpoint-up(xl) {
    padding-left: $logo-col-width-xl;
    padding-right: $logo-col-width-xl;
  }
}

.section__container {
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
}
</style>
