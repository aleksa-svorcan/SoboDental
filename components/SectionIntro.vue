<template>
  <section id="Intro" class="section section--intro">
    <div class="section__container">
      <section-header :title="headerTitle" :text="headerText" />
      <h1 class="section__title">Family, Cosmetic & <br/>Implant Dentistry</h1>
      <div class="row">
        <div class="section-intro__info col-sm-8 offset-sm-4  col-md-6 offset-md-6">
          <p class="contact">
            <a href="#">care@sobodental.com</a></br>
            <a href="#">617.471.8640</a>
          </p>
          <p class="address">
            <span class="street">111 Willard Street, Suite 1B</span>
            <span class="city">Quincy, MA 02169</span>
          </p>
          <a v-scroll-to="'#' + item">View On Map</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader.vue'

export default {
  name: 'Intro',
  data () {
    return {
      headerTitle: 'Sobo dental',
      headerText: 'South of Boston',
      item: 'Map'
    }
  },
  components: {
    SectionHeader
  }
}
</script>

<style lang="scss" scoped>
@import '../design/index.scss';

.section--intro {
  position: relative;
  padding-top: $logo-width-sm + $logo-padding-sm;
  padding-bottom: 2rem;

  @include media-breakpoint-up(sm) {
    padding-top: $logo-width-sm + $logo-padding-sm;
  }

  @include media-breakpoint-up(md) {
    padding-top: $logo-width-md + $logo-padding-md;
    height: 100vh;
  }

  @include media-breakpoint-up(lg) {
    padding-top: $logo-width-lg + $logo-padding-lg;
  }

  @include media-breakpoint-up(xl) {
    padding-top: $logo-width-xl + $logo-padding-xl;
  }

  .section__container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .section__title {
    font-size: 38px;
    margin: 3rem 0;

    @include media-breakpoint-up(sm) {
      font-size: 7vw;
      margin: 5rem 0;
    }

    @include media-breakpoint-up(md) {
      font-size: 7vw;
      margin: auto 0;
      padding: 2rem 0;
    }
    @include media-breakpoint-up(lg) {
      font-size: 6.5vw;
    }

    @include media-breakpoint-up(xl) {
      font-size: 6vw;
    }

    br {
      @include media-breakpoint-down(sm) {
        display: none;
      }
    }
  }

  .section-intro__info {

    a {
      color:black;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: inherit;
        text-decoration: underline;
      }
    }

    p {
      margin-bottom: 0.5rem;
    }

    .contact {
      font-weight: bold;
    }

    .address {
      .street,
      .city {
        display: block;
      }
    }
  }
}

</style>
