<template>
    <div>
      <div class="container section-spacing">
            <div class="row align-items-center">
               <div class="col-lg-6">
                  <div class="bd-about__img w-img mr-70 mb-30 wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;">
                     <img src="@/assets/aboutus.jpeg" alt="">
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="bd-about__text mb-30 wow fadeInLeft" style="visibility: visible; animation-name: fadeInLeft;">
                     <div class="bd-section__title-wrapper text-start">
                        <h3 class="section-subtitle justify-content-md-start section-subtitle-lg mb-10 text-start mb-2">{{ $t('QualityInMind')}} </h3>
                        <h3 class="section-title section-title-lg mb-25 text-start">{{ $t('NoLimit')}} <br> 
                        </h3>
                        <p class="text-start">{{ $t('AboutUs1')}}. </p>
                        <p class="mb-25 text-start">{{ $t('AboutUs2')}}. </p>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <div class="read-more-btn">
                            <router-link class="" to="/">{{ $t('ReadMore')}}</router-link> 
                            <span><font-awesome-icon icon="fa-solid fa-chevron-right" /> </span>
                        </div>
                    </div>
                     </div>
                  </div>
               </div>
            </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'AboutUs'
  }
</script>