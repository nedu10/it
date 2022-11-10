<template>
  <div>
    <div class="hero" >
      <div class="container-fluid col-xxl-8">
        <div class="row ">
          <div class="col-lg-8">
              <p class="header-text text-start text-uppercase pb-2">{{ $t('WeAre')}} Beyond IT</p>
              <p class="title-text text-start text-uppercase pb-2">{{$t('Slogan')}}. </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <div class="read-more-btn">
                     <router-link to="/">{{ $t('ReadMore')}}</router-link> 
                    <span><font-awesome-icon icon="fa-solid fa-chevron-right" /> </span>
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
    name:'HomepageBanner'
  }
</script>

<style scoped>

.hero {
  background: url("@/assets/README.jpeg") center center no-repeat;
  background-size: cover;
  padding: 12% 0;
}

.header-text{
    font-size: 28px;
    font-weight: 500;
    color: black;
}
.title-text{
  font-size: 72px;
  color: black;
  text-transform: uppercase;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 500;
  margin-bottom: 25px;
}

.banner-btn:hover{
  color: #0660bd;
}

</style>
