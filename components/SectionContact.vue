<template>
  <section id="Office" class="section section-contact">
    <div class="section__container row">
      <section-header :text="text" :title="title"/>
    </div>
    <section class="section-contact__inner row">
      <div class="section-contact__inner__hours col-12 col-sm-12 col-lg-6 col-xl-4 offset-xl-1">
        <div>
          <h4>Office hours</h4>
        </div>
        <table>
          <tbody>
            <tr>
              <td class="opening-hours-day">Monday</td> 
              <td class="opening-hours-time">8am - 7pm</td>
            </tr>
            <tr>
              <td class="opening-hours-day">Tuesday</td> 
              <td class="opening-hours-time">8am - 7pm</td>
            </tr>
            <tr>
              <td class="opening-hours-day">Wednesday</td> 
              <td class="opening-hours-time">8am - 7pm</td>
            </tr>
            <tr>
              <td class="opening-hours-day">Thursday</td> 
              <td class="opening-hours-time">8am - 5pm</td>
            </tr>
            <tr>
              <td class="opening-hours-day">Friday</td> 
              <td class="opening-hours-time">8:30am - 5pm</td>
            </tr>
            <tr>
              <td class="opening-hours-day">Saturday</td> 
              <td class="opening-hours-time">8am - 1pm</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="section-contact__inner__info col-12 col-sm-12 col-lg-6 col-xl-4 offset-xl-1">
        <p class="section-contact__inner__info__text">We can easily</br> be reached by calling</p>
        <p class="section-contact__inner__info__link"><a href="#">617.471.8640</a></p>
        <p class="section-contact__inner__info__text">or email us at</p>
        <p class="section-contact__inner__info__link"><a href="#">care@sobodental.com</a></p>
        <p class="section-contact__inner__info__text">Visit us at</p>
        <p class="section-contact__inner__info__link"><a href="#">111 Willard Street,Suite 1B Quincy,MA 02169
        </a></p>
      </div>
      <div class="section-contact__map__container">
        <googlemaps/>
      </div>
    </section>
      <div class="section-contact__quotes__container col-md-9 offset-md-3">
        <blockquote>
          <div class="quote-mark">"</div>
          <div class="quotes-content">
            <p>Every tooth in a man’s head is more valuable than a diamond</p>
            <footer>
              <cite>Miguel de Cervantes, Don Quixote, 1605</cite>
            </footer>
         </div>
        </blockquote>
        <blockquote>
          <div class="quote-mark">"</div>
          <div class="quotes-content">
            <p>Wrinkles should merely indicate where smiles have been</p>
            <footer>
              <cite>Mark Twain, Following the Equator</cite>
            </footer>
          </div>
        </blockquote>
      </div>
  </section>
</template>

<script>
  import SectionHeader from './SectionHeader.vue'
  import googlemaps from './GoogleMap.vue'
  export default {
    name: 'Contact',
    data () {
      return {
        text:'Our location',
        title:'Get in touch'
      }
    },
    components: {
      SectionHeader,
      googlemaps
    }
  }
</script>

<style lang="scss" scoped>
@import '../design/index.scss';

.section-contact {
  z-index:2;
  position: relative;
  margin-top: $width-unit * 2;

  @include media-breakpoint-up(sm) {
    margin-top: $width-unit;
  }
  @include media-breakpoint-up(md) {
    margin-top: $width-unit * 2;
  }
  .section-contact__map__container {
    display: none;

    @include media-breakpoint-up(md) {
      display:block;
      height: 400px;
      width: 700px;
    }
    @include media-breakpoint-up(xl) {
      height: 500px;
      width: 1100px;
    }
  }

  .section-contact__quotes__container {
    margin-top: $width-unit * 6;

    @include media-breakpoint-up(sm) {
      margin-top: $width-unit * 2;
    }

    @include media-breakpoint-up(md) {
      margin-top: $width-unit * 4;
      padding-left: $width-unit * 2;
    }
    @include media-breakpoint-up(lg) {
      margin-top: $width-unit ;
    }
    blockquote {
      display:flex;
      flex-direction:row;
      .quotes-content {
        padding-left: 10px;
        width:90%;
        margin-top:20px;
        margin-bottom:20px;

        @include media-breakpoint-up(sm) {
          padding-left: 0;
        }
        p {
          line-height: 1.2;
          font-weight: 500;
          margin-top: 10px;
        }
        footer {
          margin-top: 2rem;
          font-size: 1rem;
          font-weight: 400;
        }
      }
      .quote-mark {
        align-items:top;
        width:10%;
        height:100%;
        font-size: 90px;
      }
    }
  }

  .section-contact__inner {
    .section-contact__inner__info {
      @include media-breakpoint-up(lg) {
        margin-top: $width-unit / 2;
      }

      .section-contact__inner__info__text {
        font-size: 20px;
        padding-top:0;
      }
      .section-contact__inner__info__link{
        font-size: 20px;
        margin-top: 10px;

        @include media-breakpoint-up(lg) {
          font-size: 2.5rem;
        }
        a {
          color:black;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
    .section-contact__inner__hours {
      display:flex;
      flex-direction:column;
      background:#EFBFFF;
      margin-top:$width-unit / 2;
      margin-bottom: $width-unit;
      padding:$width-unit;

      @include media-breakpoint-up(sm) {
        padding: $width-unit;
        background:#f2f2f2;
      }
      @include media-breakpoint-up(lg) {
        padding: 50px;
        height: 600px;
        margin-bottom: 0;
        background: #ffccff;
      }
      h4 {
        margin-bottom: 1rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
        font-size: 1.5rem;
        position:left;
      }
      table {
        border-spacing: 2px;
        border-color: grey;
        border-collapse:collapse;
      }
      td {
        padding: .75rem;
        vertical-align: top;
        border-top: 1px solid rgba(0,0,0,.12);
      }
      table tr:first-child td {
        border-top: 2px solid #000;
      }
    }
  }
  .opening-hours-time {
    text-align: right;
  }
  .opening-hours-day {
    text-align: left;
  }
  .section-contact__quotes__container {

    blockquote {
      border-top: 2px solid black;
      p {
        font-size: 1.75rem;
      }
    }

  }
} 
</style>