<template>
    <div class="container section-spacing">
      <div class="section-header pb-5">
          <h2 class="pb-2 section-subtitle">Beyond IT</h2>
          <h2 class="pb-2 section-title">{{$t("YouAreWelcome")}}</h2>
      </div>
      <div class="row">
               <div class="col-lg-4">
                  <div class="services-card-item text-center mb-30 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                     <h3 class="section-title">
                      <router-link class="nav-link text-uppercase" to="/serviceDetails"> Design</router-link>
                    </h3>
                     <div class="services-card-icon text-center">
                        <font-awesome-icon icon="fa-solid fa-table" />
                     </div>
                     <div class="bd-services-content">
                        <p>  {{ $t('ServicesDescription1')}}</p>
                        <div class="services-card-item-btn">
                           <router-link to="/serviceDetails" class="link-button">
                              {{ $t('ReadMore')}}
                            <font-awesome-icon icon="fa-solid fa-chevron-right" />
                           </router-link>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="services-card-item text-center mb-30 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                     <h3 class="section-title"> <router-link class="nav-link text-uppercase" to="/serviceDetails">Development</router-link></h3>
                      <div class="services-card-icon text-center">
                        <font-awesome-icon icon="fa-solid fa-code" />
                     </div>
                     <div class="bd-services-2__content">
                        <p>  {{ $t('ServicesDescription2')}}</p>

                          <div class="services-card-item-btn">
                           <router-link to="/serviceDetails" class="link-button">
                                {{ $t('ReadMore')}}
                            <font-awesome-icon icon="fa-solid fa-chevron-right" />
                           </router-link>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="services-card-item text-center mb-30 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                     <h3 class="section-title">
                       <router-link class="nav-link text-uppercase" to="/serviceDetails">Consultancy</router-link>
                    </h3>
                    <div class="services-card-icon text-center">
                           <font-awesome-icon icon="fa-solid fa-pen-nib" />
                     </div>
                     <div class="bd-services-2__content">
                        <p>  {{ $t('ServicesDescription3')}}</p>

                          <div class="services-card-item-btn">
                           <router-link to="/serviceDetails" class="link-button">
                           {{ $t('ReadMore')}}
                            <font-awesome-icon icon="fa-solid fa-chevron-right" />
                           </router-link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
    </div>
</template>
<script>
export default {
  name: "Services"
    
  }
</script>

<style scoped>
   .services-content{
      color:#888888 !important;
   }
</style>
