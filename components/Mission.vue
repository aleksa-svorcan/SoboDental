<template>
  <div class="swiper-slide mission">
    <div class="mission__header">
      <h2 class="mission__header__title">{{item.fields.title}}</h2>
    </div>
    <div class="mission__text" v-html="item.fields.content" />
  </div>
</template>

<script>
export default {
  name: 'mission',
  data () {
    return {
      index: 0
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .mission {
    position: relative;
    align-items: center;
    .mission__header {
      height: 200px;
      .mission__header__title {
      font-size: 16px;
      }
    }
    .mission__text {
      margin-right: 20%;
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.5;
      color: #292b2c;
    }
  }
</style>
