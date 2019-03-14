<template>
  <section id="Patients" class="section section-portal">
    <div class="section__container">
      <h2>Patient Portal</h2>
      <div class="section-portal__content row">
        <div class="section-portal__content__patients-existing col-md-6 col-lg-4">
          <h3>Existing Patients</h3>
          <div class="section-portal__content__patients-existing__box"></div>
          <p>Clicking on the link below you can view your account, see upcoming appointments, update your information and more.</p>
          <button class="patient-button">Log in</button>
        </div>
        <div class="section-portal__content__patients-new col-md-6 col-lg-4">
          <h3>New Patients</h3>
          <div class="section-portal__content__patients-new__box"></div>
          <p>Clicking on the link below you can fill out your medical history information before your first appointment. We are looking forward to seeing you.</p>
          <button class="patient-button">Register</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:'Portal',
}
</script>

<style lang="scss" scoped>
@import '../design/index.scss';

.section-portal {
  z-index:2;
  position: relative;
  margin-top: $width-unit * 4;

  @include media-breakpoint-up(md) {
    margin-top: $width-unit * 2;
  }

  .patient-button {
    width:150px;
    height:60px;
    outline:none;
    border:1px solid black;
    text-decoration:underline;
    background: transparent;
  }

  h2 {
    font-size: 2.0rem;
    margin-bottom: 4rem;
    white-space: pre-wrap;

    @include media-breakpoint-up(md) {
      font-size: 2.5rem
    }
  }

  .section-portal__content {
    margin: 0;

    .section-portal__content__patients-existing {
      padding:0;
      padding-top: $width-unit;
      padding-bottom: $width-unit;
      height:100%;
      border-top: 2px solid black;
      margin-right: $width-unit / 2;

      @include media-breakpoint-up(sm) {
        border-top: 0;
        padding: 0;
        padding-right: 15px;
        padding-left: 15px;
      }

      @include media-breakpoint-up(xl) {
        height: 400px;
      }

      h3 {
        font-size: 1.75rem;
        line-height: 1.1;
        margin-bottom: 1rem;

        @include media-breakpoint-up(sm) {
          border-top: 2px solid black;
          padding-top: 20px;
          height: 50px;
        }
      }

      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #292b2c;
        margin-top: 0;
        margin-bottom: 1rem;

        @include media-breakpoint-up(sm) {
          height: 100px;
        }
      }

      .section-portal__content__patients-existing__box{
        width: 100%;
        height: 4rem;
        margin: 2rem 0;
        background-image: linear-gradient(135deg,#fbddb0,#ffcdd2);
      }
    }

    .section-portal__content__patients-new {
      padding:0;
      padding-right: $width-unit;
      padding-top: $width-unit;
      height:100%;
      border-top: 2px solid black;

      @include media-breakpoint-up(sm) {
        border-top: 0;
        padding: 0;
        padding-left: 15px;
        padding-right: 15px;
      }

      h3 {
        font-size: 1.75rem;
        line-height: 1.1;
        margin-bottom: 1rem;

        @include media-breakpoint-up(sm) {
          border-top: 2px solid black;
          padding-top: 20px;
          height: 50px;
        }
      }

      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #292b2c;
        margin-top: 0;
        margin-bottom: 1rem;

        @include media-breakpoint-up(sm) {
          height: 100px;
        }
      }

      .section-portal__content__patients-new__box {
        width: 100%;
        height: 4rem;
        margin: 2rem 0;
        background-image: linear-gradient(135deg,#95e2f7,#d0dbf3);
      }
    }
  }
}
</style>
