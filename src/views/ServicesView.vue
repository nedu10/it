<template>
  <div class="about">
    <Banner :pageName="$t('Services')"/>
    <AboutUs/>
  </div>
</template>
<script>
  import Banner from "@/components/PageBanner.vue";
  import AboutUs from "@/components/Homepage/AboutUs.vue";

  export default {
    name: "ServicesView",
    components: {
      Banner,
      AboutUs,
      Counter
    },
  };
  
</script>