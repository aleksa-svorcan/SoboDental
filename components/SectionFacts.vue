<template>
  <section id="Facts" class="section-facts container-fluid">
    <div class="section__container row">
      <div class="header">
        <section-header :text="text" :title="title"/>
      </div>
      <section class="section-facts__inner container">
        <fact v-for="(fact, index) in facts" :fact="fact" :index="index" :key="index"/>
      </section>
    </div>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader.vue'
import Fact from './Fact.vue'
export default {
  name: 'Facts',
  data() {
    return {
      text: 'Here are some',
      title: 'Facts about sobo dental'
    }  
  },
  components: {
    Fact,
    SectionHeader
  },
  computed: {
    facts () {
      return this.$store.getters.getFacts
    },
    content () {
      return this.$store.getters.getFactsContent
    }
  }
}
</script>

<style lang="scss">
 @import '../design/index.scss';

.section-facts {
  margin-top: $width-unit * 5;
  z-index:2;
  position: relative;
  padding:0;
  
  @include media-breakpoint-up(sm) {
    margin-top: $width-unit;
  }
  @include media-breakpoint-up(md) {
    margin-top: $width-unit * 5;
  }

  .header {
    padding-left: $logo-padding + $logo-width;
    @include media-breakpoint-up(sm) {
      padding-left: $logo-col-width-sm;
    }
    @include media-breakpoint-up(md) {
      padding-left: $logo-col-width-md;
    }
    @include media-breakpoint-up(lg) {
      padding-left: $logo-col-width-lg;
    }
    @include media-breakpoint-up(xl) {
      padding-left: $logo-col-width-xl;
    }
  }

  .section-facts__inner {
    margin:0;
    padding:0;
    width:100%;
    max-width: 1600px;
  }
}

ul {
      list-style: none;
      padding-left:0;
      @include media-breakpoint-up(md) {
        padding-left: 40px;
      }
    }

li::before {
  display: inline-block;
  content: ' ';
  border-radius: 50%;
  border:2px solid gray;
  width: 5px;
  height: 3px;
  padding: 4px;
  margin-right: 6px;
}
</style>
