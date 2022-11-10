<template>
  <div class="about">
    <Banner :pageName="$t('Contact')"/>
    <AboutUs/>
    <Counter/>
  </div>
</template>
<script>
  import Banner from "@/components/PageBanner.vue";
  import AboutUs from "@/components/Homepage/AboutUs.vue";
  import Counter from "@/components/Homepage/Counter.vue";

  export default {
    name: "ContactUsView",
    components: {
      Banner,
      AboutUs,
      Counter
    },
  };
  
</script>