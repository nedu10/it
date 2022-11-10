<template>
   <div class="section-spacing">
    <div class="cta_section primary-bg pt-60 pb-30">
         <div class="container">
            <div class="row">
               <div class="col-lg-8">
                  <div class="cta-info text-start mb-30 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                     <h3 class="cta-title text-white">{{ $t('Cta')}}</h3>
                     <span>{{ $t('CtaSubtitle')}}. </span>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="text-white text-lg-end wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                     <a href="contact.html" class="border-btn">
                        {{ $t('ContactUs')}}
                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name:'Cta'
}
</script>

<style>
  .cta_section{
         background-color:#0660bd;
         padding-top: 60px;
         padding-bottom: 60px;
  } 

  .cta-title{
      font-size: 32px;
      font-weight: 600;
      letter-spacing: 4px;
      text-transform: uppercase;
  }

  .cta-info{
      color: white;
      font-size: 18px;
      font-weight: 600;
  }
</style>