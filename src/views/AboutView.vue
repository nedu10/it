<template>
  <div class="about">
    <Banner :pageName="$t('About')"/>
    <AboutUs/>
    <Counter/>
  </div>
</template>
<script>
  import Banner from "@/components/PageBanner.vue";
  import AboutUs from "@/components/Homepage/AboutUs.vue";
  import Counter from "@/components/Homepage/Counter.vue";

  export default {
    name: "AboutView",
    components: {
      Banner,
      AboutUs,
      Counter
    },
  };
  
</script>