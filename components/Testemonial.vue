<template>
  <div class="swiper-slide testemonial">
    <div class="testemonial__content">
    <h2>{{item.fields.content}}</h2>
    </div>
    <p class="mission__content__user">-{{item.fields.user}}</p>
  </div>
    
  </section>
</template>

<script>
export default {
  name:'testemonial',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.mission__content__text {
  p {
    font-size:20px;
  }
}

  
</style>