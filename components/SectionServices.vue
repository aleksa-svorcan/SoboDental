<template>
  <section id="Services" v-view.once="onInView" class="section services">
    <div class="section__container">
      <div class="row">
        <div class="column col-md-6">
          <h2>Dental<br/>Services</h2>
          <table ref="table">
            <tbody>
              <tr :key="service.id" v-for="(service, i) in services">
                <th scope="row">{{i + 1}}</th>
                <td>{{service.fields.title}}</td>
              </tr>
            </tbody>
          </table>
          <figcaption>- For more information about each service please visit <a href="#">mouthhealthy.org</a></figcaption>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'
Vue.use(checkView)
import {TimelineMax} from 'gsap'

export default {
  name: 'Services',
  data () {
    return {
      timelineReady: false,
    }
  },
  computed: {
    services () {
      return this.$store.getters.getServicesSorted
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

      let items = this.$refs.table
      this.$timeline
        .from(items, 4, {
          x: -40,
          opacity: 0,
          ease: Power2.easeInOut
        })

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

<style lang="scss">
@import '../design/index.scss';

.services{
  z-index:2;
  position: relative;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    line-height: 1.1;
    margin-bottom: 4rem;
    white-space: pre-wrap;

    @include media-breakpoint-up(md) {
      font-size: 2.5rem
    }
  }
  table{
    border-top: 2px solid black;
    border-collapse: collapse;
  }
  td{
    padding:15px;
    border-bottom:1px solid gray;
  }
  th{
    border-bottom:1px solid gray;
  }
  figcaption {
    margin-left:20px;
    padding-top: 30px;
    font-size: 13px;
    color:gray;
    font-style: italic;
    a {
      color:black;
    }
  }
}

</style>
