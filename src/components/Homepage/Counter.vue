<template>
    <div>
        <div class="counter-section theme-background-2  pb-90">
         <div class="container">
            <div class="counter-border">
               <div class="row">
                  <div class="col-lg-3 col-md-6">
                     <div class="counter-item d-flex align-items-center mb-30">
                        <div class="counter-icon">
                           <span class="counter-icon-sizing"><font-awesome-icon icon="fa-solid fa-gear" /></span>
                        </div>
                        <div class="bd-counter__info">
                           <span class="counter">197</span>
                           <h3 class="counter-title">Plugins</h3>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                     <div class="counter-item d-flex align-items-center mb-30">
                        <div class="counter-icon">
                           <span  class="counter-icon-sizing" ><font-awesome-icon icon="fa-solid fa-user-tie" /></span>
                        </div>
                        <div class="bd-counter__info">
                           <span class="counter">967</span>
                           <h3 class="counter-title">Clients</h3>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                     <div class="counter-item d-flex align-items-center mb-30">
                        <div class="counter-icon">
                            <span class="counter-icon-sizing" ><font-awesome-icon icon="fa-solid fa-layer-group"/></span>
                        </div>
                        <div class="bd-counter__info">
                           <span class="counter">5892</span>
                           <h3 class="counter-title">Projects</h3>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                     <div class="counter-item d-flex align-items-center mb-30">
                        <div class="counter-icon">
                            <span class="counter-icon-sizing" ><font-awesome-icon icon="fa-solid fa-trophy"/></span>
                        </div>
                        <div class="bd-counter__info">
                           <span class="counter">20</span>
                           <h3 class="counter-title">Awards</h3>
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
   name: 'Statistics'
      
  }
</script>

<style scoped>
   .counter-section{
      padding-top:120px;
      padding-bottom: 90px;

   }

   .counter-title{
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 4px;
   }

   .counter-item{
      border-right: 1px solid #b7c3cf;
      margin-left: 68px;
      margin-right: 20px;
   }
   .counter-icon{
      margin-right: 20px;
   }
   .counter-icon-sizing{
          font-size: 30px;
   }
   
</style>