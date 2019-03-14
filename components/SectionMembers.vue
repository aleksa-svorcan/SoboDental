<template>
  <section id="Team" class="section section-team">
    <div class="section__container">
      <div class="header">
        <section-header :text="text" :title="title"/>
      </div>
      <div class="section-team__text">
        <h2>At Sobo, We Tend <br>To Smile A Lot</h2>
        <div class="row">
          <div class="col-lg-6">
            <blockquote>
              <div class="quote-mark">"</div>
              <div class="quotes-content">
                <p>Not only am I proud of the staff’s talent and workmanship, but also their integrity and heart</p>
                <footer>
                <cite>Dr. Ivana Adamov</cite>
                </footer>
              </div>
            </blockquote>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="info__text">
              <p>It’s easy to smile when you feel you are an essential part of a team. Together, we make sure our patients feel comfortable in our office and confident in our work. Feeling good about that helps us smile.</p>
            </div>
          </div>
        </div>
      </div>
        <div v-view.once="onInView" class="section-team__members container-fluid">
          <div class="section-team__members__wrapper container">
            <div class="row">
            <div class="section-team__members__text col-12 col-md-4">
              <h2>Doctors</h2>
              <p>Our doctors are members of of the American Dental Association, the Academy of General Dentistry, ITI INternational Team for Implantology, Massachusetts Dental Society, Spear Education.</p>
            </div>
            <div class="section-team__members__content col-12 col-md-8">
              <div class=" content row">
                <member v-for="(member, index) in doctors" :member="member" :index="index" :key="index"/>
              </div>
            </div>
            </div>
          </div>
          <div class="section-team__members__wrapper container">
            <div class="row">
            <div class="section-team__members__text col-12 col-md-4">
              <h2>Hygienists</h2>
            </div>
            <div class="section-team__members__content hygienists col-12 col-md-8">
              <div class="row">
              <member v-for="(member, index) in hygienists" :member="member" :index="index" :key="index"/>
              </div>
            </div>
            </div>
          </div>
          <div class="section-team__members__wrapper container">
            <div class="row">
            <div class="section-team__members__text col-12 col-md-4">
              <h2>Dental Assistants</h2>
            </div>
            <div class="section-team__members__content col-12 col-md-8">
              <div class="row">
                <member v-for="(member, index) in assistants" :member="member" :index="index" :key="index"/>
              </div>
            </div>
            </div>
          </div>
          <div class="section-team__members__wrapper container">
            <div class="row">
              <div class="section-team__members__text col-12 col-md-3">
                <h2>Administrative Staff</h2>
              </div>
              <div class="section-team__members__content col-12 col-md-8">
                <div class="row">
                <member v-for="(member, index) in admins" :member="member" :index="index" :key="index"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SectionHeader from './SectionHeader.vue'
  import Member from './Member.vue'
  export default {
    name: 'Team',
    data () {
      return {
        text: 'Sobo team',
        title: 'Meet our staff',
        timelineReady: false
      }
    },
    components: {
      SectionHeader,
      Member
    },
    computed: {
      members() {
        return this.$store.getters.getMembers
      },
      doctors () {
        return this.$store.getters.getMembersDoctors
      },
      hygienists () {
        return this.$store.getters.getMembersHygienists
      },
      assistants () {
        return this.$store.getters.getMembersAssistants
      },
      admins () {
        return this.$store.getters.getMembersAdmins
      }
    },
    mounted () {
    this.initTimeline()
    },
    methods: {
    initTimeline () {
      this.$timeline = new TimelineMax({
        paused: true
      })
      this.$timeline
        .staggerFrom(".section-team__members__text", 0.5, {
          opacity: 0,
          ease: Power2.easeInOut
        },0.5)

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

  .section-team {
    z-index:2;
    position: relative;
    margin-top: $width-unit * 2;
    .column {
      padding: 0;
      @include media-breakpoint-up(md) {
        padding-left: 15px;
        padding-right: 15px;
      }

    }
    .header {
      margin-bottom: $width-unit / 2;
    }

    blockquote {
      padding-top: $width-unit;
      display:flex;
      flex-direction:row;
      border-top: 2px solid #000;

      @include media-breakpoint-up(md) {
        padding-top: 0;
      }

      .quotes-content {
        order:2;
        margin-bottom:20px;

        @include media-breakpoint-up(md) {
          padding-top: 20px;
          margin-left: 10px;
        }
        p {
          font-size: 1.75rem;
          line-height: 1.2;
          font-weight: 500;
        }
        footer {
          margin-top: 2rem;
          font-size: 1rem;
          font-weight: 400;
        }
      }
      .quote-mark {
        display:none;
        @include media-breakpoint-up(md) {
          display: block;
          margin-top:0;
          width: 30px;
          height:100%;
          font-size: 70px;
          align-items: left;
        }
      }
    }
    .section-team__text {
      margin-bottom: 4rem;
      p {
        margin-bottom: 2rem;
      }
      h2 {
        font-size: 38px;
        line-height: 1.1;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        white-space: pre-wrap;
        // border-bottom: 2px solid #000;

        @include media-breakpoint-up(md) {
          font-size: 2.5rem
        }
        @include media-breakpoint-up(lg) {
          font-size: 3rem;
        }
        @include media-breakpoint-up(xl) {
          font-size: 3.3rem;
        }
      }
    }
    .section-team__members {
      .section-team__members__wrapper {
        padding: 0;
        @include media-breakpoint-up(md) {
          padding: 0;
          padding-right: 40px;
          padding-left: 40px;
          margin-bottom: $width-unit /2;
        }
      }
      .section-team__members__content {
        padding:0;
        height:100%;
        .row {
         justify-content:flex-end;
        }
      }
      .section-team__members__text {
        padding:0;
        height:100%;
        margin-bottom: $width-unit;
        margin-top: $width-unit * 2;

        @include media-breakpoint-up(md) {
          padding:$width-unit;
          margin-bottom: 0;
          margin-top: 0;
          padding-left: 15px;
          padding-right: 15px;
          order: 2;
          padding: 0;
          padding-left: 20px;
          padding-right: 10px;
          h2 {
          padding-bottom: 20px;
          }

        }

        h2 {
          margin-top:0;

          @include media-breakpoint-up(md) {
            font-size: 28px;
          }
        }
      }
    }
  }

  .info__text {
    padding-top: 2rem;
    border-top: 2px solid $black;
  }
</style>
