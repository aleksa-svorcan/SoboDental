<template>
  <section id="Community" class="section section-community">
    <div class="section__container">
      <h2 class="section__title">Join Our<br/>Community</h2>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="info__text info__text--left">
            <p>South of Boston Dental is happy to introduce you to our practice and the nurturing team of dedicated professionals who make it work. Through our united commitment to treat each one of our patients with integrity, honesty and compassion, we’ve been a part of our community for over 30 years.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="info__text info__text--right">
            <p>We at SoBo dental welcome you to join the generations of families, friends and neighbors, whose satisfaction in our work emulates in their beautiful smiles.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Community'
};

</script>

<style lang="scss" scoped>
@import '../design/index.scss';

.section-community {
  position: relative;

  .section__title {
    font-size: 2.25rem; // 36px
    margin-bottom: 2rem;

    @include media-breakpoint-up(sm) {
      font-size: 3rem;
    }

    @include media-breakpoint-up(md) {
      font-size: 3.5rem; // 56px
      margin-bottom: 4rem;
    }

    @include media-breakpoint-up(lg) {
      font-size: 4.5rem; // 72px
    }
  }

  .info__text {
    padding-top: 2rem;
    border-top: 2px solid $black;

    &.info__text--right {
      @include media-breakpoint-down(sm) {
        border-top: none;
        padding-top: 0;
      }
    }

    p {}
  }

}
</style>
