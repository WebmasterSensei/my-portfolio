<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
     <Nav msg="Welcome to Your Vue.js App"/>
  <div class="content" id="home">
     <Home msg="Welcome to Your Vue.js App"/>
  </div>
 <div class="content">
     <Web msg="Welcome to Your Vue.js App"/>
  </div>
 <div class="content">
     <Aboutme msg="Welcome to Your Vue.js App"/>
  </div>
   <div class="content">
     <Message msg="Welcome to Your Vue.js App"/>
  </div>
 <div class="content">
     <Footer msg="Welcome to Your Vue.js App"/>
  </div>


</template>

<script>
import Home from './components/Home.vue';
import Nav from './components/Nav.vue';
import Web from './components/Websites.vue';
import Footer from './components/Footer.vue';
import Aboutme from './components/Aboutme.vue';
import Message from './components/Message.vue';

export default {
  name: 'App',
  components: {
    Home,
    Nav,
    Web,
    Footer,
    Aboutme,
    Message,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   font-family: Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

  /* margin-top: 60px; */
}
template{
  font-family: Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  /* font-weight: 600; */
}
</style>
  