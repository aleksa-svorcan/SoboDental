<template>
  <section class="header">
    <div class="app-logo">
      <a href="#" v-scroll-to="'#Intro'">
        <img v-if="!this.$store.state.isMemberOpen" class="icon" src="../assets/img/logo.png" />
      </a>
    </div>
    <div class="buttons">
      <button class="portal" v-if="!this.$store.state.isMemberOpen" v-scroll-to="'#Patients'">Patient Portal</button>
      <button class="nav-button" v-on:click="toggleSidebar">
        <div class="button-line-top" :class="{ movetop: this.isSidebarOpen }" />
        <div class="button-line-middle" :class="{ hide: this.isSidebarOpen }" />
        <div class="button-line-bottom" :class="{ movebottom: this.isSidebarOpen }" />
      </button>
    </div>
  </section>
</template>

<script>
import '~/plugins/vue-scrollto.js'
export default{
  name: 'app-header',
  computed: {
    isSidebarOpen () {
      return this.$store.state.isSidebarOpen
    }
  },
  methods: {
    toggleSidebar () {
      // if memeber detail is open, close it
      if (this.$store.state.isMemberOpen) {
        this.$router.back()
        this.$store.commit('setMemberDetailOpen', false)
      }
      // toogle
      this.$store.commit('setSidebarOpen', !this.$store.state.isSidebarOpen)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../design/index.scss';

.header{
  z-index: 990;
  box-sizing: border-box;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: $logo-padding;

  @include media-breakpoint-up(sm) {
    padding: $logo-padding-sm;
  }
  @include media-breakpoint-up(md) {
    padding: $logo-padding-md;
  }
  @include media-breakpoint-up(lg) {
    padding: $logo-padding-lg;
  }
  @include media-breakpoint-up(xl) {
    padding: $logo-padding-xl;
  }

}
.buttons{
  display: flex;
  flex-direction: row;
}
.nav-button{
  cursor:pointer;
  vertical-align:top;
  background:#ffe6e6;
  outline: none;
  box-shadow: 0 40px 50px 0 rgba(0,0,0,.13);
  border-style: none;
  height: $logo-width-sm;
  width: $logo-width-sm;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  @include media-breakpoint-up(sm) {
    height: $logo-width-sm;
    width: $logo-width-sm;
  }

  @include media-breakpoint-up(md) {
    height: $logo-width-md;
    width: $logo-width-md;
  }
  @include media-breakpoint-up(lg) {
    height: $logo-width-lg;
    width: $logo-width-lg;
  }
  @include media-breakpoint-up(xl) {
    height: $logo-width-xl;
    width: $logo-width-xl;
  }
}
.portal{
  display:none;
  cursor:pointer;
  background: #b0dee8;
  margin-right: $width-unit / 2;
  text-decoration: underline;
  vertical-align:top;
  outline: none;
  box-shadow: 0 40px 50px 0 rgba(0,0,0,.13);
  border-style: none;
  width: 220px;
  height: 100px;

  @include media-breakpoint-up(sm) {
    display:inline-block;
    height: $logo-width-sm;
  }
  @include media-breakpoint-up(md) {
    height: $logo-width-md;
    width: 220px;
  }
  @include media-breakpoint-up(lg) {
    height: $logo-width-lg;
    width: 250px;
  }
  @include media-breakpoint-up(xl) {
    height: $logo-width-xl;
    width: 300px;
  }
}
.button-line-top {
  margin-top:5px;
  height:5px;
  width: 20px;
  margin-left: 4px;
  border-top:2px solid black;
  transition: all 0.2s;

  @include media-breakpoint-up(lg) {
    width: 40px;
  }
}
.button-line-bottom {
  margin-top:5px;
  height:5px;
  width:20px;
  margin-left: 4px;
  border-top:2px solid black;
  transition: all 0.2s;

  @include media-breakpoint-up(lg) {
    width: 40px;
  }
}
.button-line-middle {
  margin-top:5px;
  height:5px;
  width:20px;
  margin-left: 4px;
  border-top:2px solid black;

  @include media-breakpoint-up(lg) {
    width: 40px;
  }
}
.icon {
  vertical-align:top;
  box-shadow: 0 40px 50px 0 rgba(0,0,0,.13);
  height: $logo-width-sm;
  width: $logo-width-sm;

  @include media-breakpoint-up(sm) {
    height: $logo-width-sm;
    width: $logo-width-sm;
  }

  @include media-breakpoint-up(md) {
    height: $logo-width-md;
    width: $logo-width-md;
  }

  @include media-breakpoint-up(lg) {
    height: $logo-width-lg;
    width: $logo-width-lg;
  }

  @include media-breakpoint-up(xl) {
    height: $logo-width-xl;
    width: $logo-width-xl;
  }
}
.hide {
  display:none;
}
.movetop {
  transform: rotate(45deg) translateX(1px) translateY(3px);
}
.movebottom {
  transform: rotate(-45deg) translateX(6px) translateY(-4px);
}
</style>
