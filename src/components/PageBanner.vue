<template>
  <div>
    <div class="hero" >
      <div class="container col-9">
        <div class="row">
              <div class="col-xxl-12">
                  <div class="breadcrumb__content d-md-flex justify-content-between align-items-center">
                     <h3 class="breadcrumb-title">{{pageName}} </h3>
                     <div class="breadcrumb-list text-end">
                        <span><router-link to="home">{{ $t('Home')}}</router-link></span>
                        <span class="dvdr">/</span>
                        <span>{{pageName}}</span>
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
  name: 'Banner',
   props: {
    pageName: String
  }
}
 
</script>

<style scoped>

.breadcrumb-title{
    font-size: 50px;
    color: black;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: 900;
}

.breadcrumb-list span {
    font-size: 18px;
    color: black;
    font-weight: 900;
    padding-right: 3px;
    margin-right: 3px;
    text-transform: capitalize;
}
.hero {
  background: url("@/assets/banner-bg.jpeg") center no-repeat;
  background-size: cover;
  background-position: right;
  padding: 12% 12% 4% 0;
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
