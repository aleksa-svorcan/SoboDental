<template>
  <hgroup class="section-header">
    <span class="section-header__overline">{{text}}</span>
    <h2 class="section-header__title">{{title}}</h2>
  </hgroup>
</template>

<script>

export default {
  name:'section-header',
  props: {
    text: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../design/index.scss';

.section-header {
  margin-top: 0;
  padding-top: 0;
  width: 100%;
  text-transform: uppercase;

  @include media-breakpoint-up(xl) {
    transform: translateY(- 1.2px - 14px);
    margin-bottom: 0;
  }

  .section-header__overline {
    margin-bottom: 0;
    font-size: 0.8rem;
  }

  .section-header__title {
    margin-top: 0;
    font-size: 1.5rem;
    font-family: "Nunito", sans-serif;

    @include media-breakpoint-up(xl) {
      font-size: 1.75rem;
    }
  }  
}
</style>
