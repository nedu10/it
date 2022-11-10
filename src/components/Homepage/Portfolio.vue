<template>
  <div>
    <div class="container px-4 py-5" id="icon-grid">
       <div class="section-header pb-5">
          <h2 class="pb-2 section-subtitle">Beyond IT</h2>
          <h2 class="pb-2 section-title">{{ $t('OurProjects')}}</h2>
      </div>
      <div class="pb-5">
        <div class="row align-items-center mb-5 ">
               <div class="col-lg-6">
                  <div class="portfolio-img mr-70 mb-30 wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;">
                     <img src="@/assets/portfolio-1.jpg" alt="">
                  </div>
               </div>
               <div class="col-lg-6  ">
                  <div class="bd-about_text mb-30 wow fadeInLeft" style="visibility: visible; animation-name: fadeInLeft;">
                     <div class=" text-start portfolio-text-right">
                        <h3 class="section-subtitle justify-content-md-start section-subtitle-lg mb-10 text-start mb-2">{{ $t('QualityInMind')}}</h3>
                        <h3 class="section-title section-title-lg mb-25 text-start">ART DIRECTION <br>TO DHAKA ASIAN <br> HIGHWAY
                        </h3>
                        <p class="text-start">Lorem ipsum dolor sit amet conse cotur adip isicing elit sed do eiu smod tempor incididunt
                           labore arale jane kannar </p>
                        <p class="mb-25 text-start">rong Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                           eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                           exercitation </p>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <div class="link-btn-2">
                            <router-link class="" to="/">Read More</router-link> 
                            <span><font-awesome-icon icon="fa-solid fa-chevron-right" /> </span>
                        </div>
                    </div>
                     </div>
                  </div>
               </div>
        </div>
          
        <div class="row align-items-center mb-5">
               <div class="col-lg-6">
                  <div class="bd-about__text mb-30 wow fadeInLeft" style="visibility: visible; animation-name: fadeInLeft;">
                     <div class="portfolio-text-left text-start">
                        <h3 class="section-subtitle justify-content-md-start section-subtitle-lg mb-10 text-start mb-2">{{ $t('QualityInMind')}}</h3>
                        <h3 class="section-title section-title-lg mb-25 text-start">ART DIRECTION <br>TO DHAKA ASIAN <br> HIGHWAY
                        </h3>
                        <p class="text-start">Lorem ipsum dolor sit amet conse cotur adip isicing elit sed do eiu smod tempor incididunt
                           labore arale jane kannar </p>
                        <p class="mb-25 text-start">rong Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                           eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                           exercitation </p>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <div class="link-btn-2">
                            <router-link class="" to="/">Read More</router-link> 
                            <span><font-awesome-icon icon="fa-solid fa-chevron-right" /> </span>
                        </div>
                    </div>
                     </div>
                  </div>
               </div>
                 <div class="col-lg-6">
                  <div class="portfolio-img mr-70 mb-30 wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;">
                     <img src="@/assets/portfolio-2.jpg" alt="">
                  </div>
               </div>
        </div>

        <div class="row align-items-center ">
               <div class="col-lg-6">
                  <div class="portfolio-img mr-70 mb-30 wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;">
                     <img src="@/assets/portfolio-1.jpg" alt="">
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="bd-about__text mb-30 wow fadeInLeft" style="visibility: visible; animation-name: fadeInLeft;">
                     <div class="portfolio-text-right text-start">
                        <h3 class="section-subtitle justify-content-md-start section-subtitle-lg mb-10 text-start mb-2">{{ $t('QualityInMind')}}</h3>
                        <h3 class="section-title section-title-lg mb-25 text-start">ART DIRECTION <br>TO DHAKA ASIAN <br> HIGHWAY
                        </h3>
                        <p class="text-start">Lorem ipsum dolor sit amet conse cotur adip isicing elit sed do eiu smod tempor incididunt
                           labore arale jane kannar </p>
                        <p class="mb-25 text-start">rong Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                           eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                           exercitation </p>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <div class="link-btn-2">
                            <router-link class="" to="/">Read More</router-link> 
                            <span><font-awesome-icon icon="fa-solid fa-chevron-right" /> </span>
                        </div>
                    </div>
                     </div>
                  </div>
               </div>
        </div>
      </div>
      <div class="mt-5">
          <h2 class="pb-2 section-subtitle underline"> <router-link class="link-btn-3 pb-1" to="/">{{ $t('AllProjects')}}</router-link>   </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Portfolio'
}
</script>

<style>
 .portfolio-img{
        border-radius: 50%;
 }
 .portfolio-text-right{
    padding-right:120px ;
 }
 .portfolio-text-left{
    padding-left:120px ;
 }
</style>