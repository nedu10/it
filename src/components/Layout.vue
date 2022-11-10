<template>
<div>
  <!-- Navigation  -->
  
    <nav class="navbar sticky-top navbar-expand-lg bg-light">
        <div class="container ">
          <a class="navbar-brand" href="#">Beyond IT</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0 py-2">
              <li class="nav-item">
                    <router-link class="nav-link active text-uppercase" to="/">{{ $t('Home')}}</router-link>
              </li>
              <li class="nav-item">
                    <router-link class="nav-link text-uppercase" to="/about">{{ $t('About')}}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-uppercase" to="/contactus">{{ $t('Contact')}}</router-link>
              </li>
                <li class="nav-item">
                <router-link class="nav-link text-uppercase" to="/services">{{ $t('Services')}}</router-link>
              </li>
            </ul>
          </div>

          <div class="language-switch">
            <select class="language-select" aria-label="Select Language" @change="changeLanguage($event.target.value)" v-model="lang">
              <option value="en" selected>English</option>
              <option value="it">Italian</option>
            </select>
          </div>
        </div>
    </nav>
   <router-view />

    <!-- Footer section  -->
    <div class="footer-section mt-2">
      <div class="container ">
        <footer class="py-5">
          <div class="row">
            <div class="col-6 text-start col-md-3 mb-3">
              <h5>Beyond IT</h5>
            </div>
            <div class="col-7"></div>
            <div class="col-6 col-md-2 mb-3">
              <h5 class=" text-start">Quick Links</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{{ $t('Home')}}</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{{ $t('About')}}</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{{ $t('Contact')}}</a></li>
              </ul>
            </div>

            <!-- <div class="col-md-5 offset-md-1 mb-3"> -->
              <!-- <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from Beyond IT.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                  <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form> -->
            <!-- </div> -->
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2022 Beyond IT, Inc. {{ $t('AllRightsReserved')}}</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
</div>
</template>

<script>
import HomepageBanner from '@/components/Homepage/Banner.vue'
export default {
  name: "Layout", 
  components: {
      HomepageBanner
  },
  data() {
    return {
        lang:'en'
      }
  }, 
  methods: {
    changeLanguage(lang) {
        this.$i18n.locale = lang
      }
    }
}
</script>

<style scoped>
  .nav-item{
    padding-right:100px
  }
  .footer-section{
    background-color: #e2ebf4;
  }
  .language-select{
    padding:7px;
    border: 2px solid black;
  }
</style>