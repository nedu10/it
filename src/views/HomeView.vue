<template>
  <div class="home">
      <Banner/>
      <Services/>
      <AboutUs/>
      <Counter/>
      <Portfolio/>
      <Cta/>
      <Testimonials/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Homepage/Banner.vue";
import Services from "@/components/Homepage/Services.vue";
import Portfolio from "@/components/Homepage/Portfolio.vue";
import AboutUs from "@/components/Homepage/AboutUs.vue";
import Counter from "@/components/Homepage/Counter.vue";
import Testimonials from "@/components/Homepage/Testimonials.vue";
import Cta from '@/components/Homepage/Cta.vue';

export default {
  name: "HomeView",
  components: {
    Banner,
    Services, 
    Portfolio,
    Counter, 
    Testimonials,
    AboutUs,
    Cta
  },
};
</script>
