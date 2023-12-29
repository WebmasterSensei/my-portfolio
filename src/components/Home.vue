<template>
  <div class="hello">
       <div class="stars">
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
</div>
<section class="hero" ref="heroSection" @scroll="handleScroll">

        <div>
<transition name="fade" @before-enter="beforeEnter">
  <div v-if="isVisible" class="desc" key="desc">
    <h1 class="animate__animated animate__bounce animate__slow" key="title">Ninja Developers</h1>
    <p class="p-tag animate__animated animate__slideInLeft animate__slow" key="paragraph1">1. Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
    <p class="p-tag animate__animated animate__slideInLeft " key="paragraph2">2. One of the best programming skills you can have is knowing when to walk away for a while.</p>
  </div>
</transition>

        <!-- <div class="desc">
            <h1 class="animate__animated animate__bounce animate__slow">Ninja Developers</h1>
            <p class="p-tag animate__animated animate__slideInRight animate__slow">1. Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
            <p class="p-tag animate__animated animate__slideInLeft animate__slow">2. One of the best programming skills you can have is knowing when to walk away for a while.</p>
          </div> -->

            <button> 
              <span class="icon">
                <img src="images/nina1.svg" alt="1">
              </span>
              <a href="#" v-scroll-to="'#about'">
                <span class="text1" style="color: black">About me?</span>
              <span class="text2">Click..</span> </a>
            
            </button>
        </div>
        <transition name="fade">
          <div  v-if="isVisible" >
               <div class="animate__animated animate__zoomIn animate__slow">
               <img id="ava-img" src="https://cdn.vectorstock.com/i/preview-1x/50/56/cute-kawaii-ninja-chibi-mascot-cartoon-style-vector-47095056.jpg" alt="">
          </div> 
           </div>

        </transition>
    

    </section>
    
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
     beforeEnter(el) {
      // Add a delay before the second paragraph enters
      if (el.classList.contains('p-tag')) {
        el.style.animationDelay = '1s'; // Adjust the delay as needed
      }
    },
    handleScroll() {
      const heroSection = this.$refs.heroSection;
      const rect = heroSection.getBoundingClientRect();

      // Check if the section is in the viewport
      this.isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    },
  },
  mounted() {
    // Add a scroll event listener to the window
    window.addEventListener('scroll', this.handleScroll);

    // Initial check for visibility on mount
    this.handleScroll();
  },
  beforeUnmount() {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>








<style scoped>
.p-tag:nth-child(3) {
  animation-delay: 1.2s; /* Adjust the delay as needed */
}
.stars {
  /* position: fixed; */

  /* width: 100%;
  height: 100%; */
  transform: rotate(-47deg);
  /* z-index: 91; */
}


.star {
  --star-color: var(--primary-color);
  --star-tail-length: 6em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);
  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, currentColor, transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px currentColor);
  transform: translate3d(104em, 0, 0);
  animation: fall var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;
}
@media screen and (max-width: 750px) {
  .star {
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
  }
}
.star:nth-child(1) {
  --star-tail-length: 5.76em;
  --top-offset: 43.47vh;
  --fall-duration: 10.103s;
  --fall-delay: 9.146s;
}
.star:nth-child(2) {
  --star-tail-length: 6.25em;
  --top-offset: 82.32vh;
  --fall-duration: 8.456s;
  --fall-delay: 7.007s;
}
.star:nth-child(3) {
  --star-tail-length: 6.33em;
  --top-offset: 33.46vh;
  --fall-duration: 6.971s;
  --fall-delay: 2.831s;
}
.star:nth-child(4) {
  --star-tail-length: 5.3em;
  --top-offset: 67.36vh;
  --fall-duration: 9.131s;
  --fall-delay: 7.778s;
}
.star:nth-child(5) {
  --star-tail-length: 5.89em;
  --top-offset: 90.46vh;
  --fall-duration: 9.649s;
  --fall-delay: 7.668s;
}
.star:nth-child(6) {
  --star-tail-length: 6.97em;
  --top-offset: 86.01vh;
  --fall-duration: 10.249s;
  --fall-delay: 9.293s;
}
.star:nth-child(7) {
  --star-tail-length: 6.55em;
  --top-offset: 83.89vh;
  --fall-duration: 9.264s;
  --fall-delay: 8.464s;
}
.star:nth-child(8) {
  --star-tail-length: 5.73em;
  --top-offset: 51.52vh;
  --fall-duration: 11.116s;
  --fall-delay: 1.469s;
}
.star:nth-child(9) {
  --star-tail-length: 6.7em;
  --top-offset: 80.42vh;
  --fall-duration: 7.798s;
  --fall-delay: 5.709s;
}
.star:nth-child(10) {
  --star-tail-length: 6.55em;
  --top-offset: 46.49vh;
  --fall-duration: 11.168s;
  --fall-delay: 4.478s;
}
.star:nth-child(11) {
  --star-tail-length: 6.67em;
  --top-offset: 24.78vh;
  --fall-duration: 8.026s;
  --fall-delay: 6.185s;
}
.star:nth-child(12) {
  --star-tail-length: 5.6em;
  --top-offset: 64.43vh;
  --fall-duration: 7.838s;
  --fall-delay: 1.576s;
}
.star:nth-child(13) {
  --star-tail-length: 5.02em;
  --top-offset: 79.93vh;
  --fall-duration: 9.816s;
  --fall-delay: 8.993s;
}
.star:nth-child(14) {
  --star-tail-length: 5.79em;
  --top-offset: 4.75vh;
  --fall-duration: 8.023s;
  --fall-delay: 5.734s;
}
.star:nth-child(15) {
  --star-tail-length: 5.53em;
  --top-offset: 81.1vh;
  --fall-duration: 10.89s;
  --fall-delay: 4.867s;
}
.star:nth-child(16) {
  --star-tail-length: 6.94em;
  --top-offset: 86.05vh;
  --fall-duration: 8.823s;
  --fall-delay: 9.668s;
}
.star:nth-child(17) {
  --star-tail-length: 6.64em;
  --top-offset: 72.24vh;
  --fall-duration: 6.355s;
  --fall-delay: 8.865s;
}
.star:nth-child(18) {
  --star-tail-length: 7.39em;
  --top-offset: 0.24vh;
  --fall-duration: 6.842s;
  --fall-delay: 2.702s;
}
.star:nth-child(19) {
  --star-tail-length: 6.7em;
  --top-offset: 40.28vh;
  --fall-duration: 8.604s;
  --fall-delay: 1.695s;
}
.star:nth-child(20) {
  --star-tail-length: 7.11em;
  --top-offset: 68.08vh;
  --fall-duration: 11.042s;
  --fall-delay: 7.004s;
}
.star:nth-child(21) {
  --star-tail-length: 6.42em;
  --top-offset: 43.09vh;
  --fall-duration: 9.597s;
  --fall-delay: 2.685s;
}
.star:nth-child(22) {
  --star-tail-length: 7.01em;
  --top-offset: 98.79vh;
  --fall-duration: 8.53s;
  --fall-delay: 9.769s;
}
.star:nth-child(23) {
  --star-tail-length: 5.1em;
  --top-offset: 74.05vh;
  --fall-duration: 11.899s;
  --fall-delay: 5.482s;
}
.star:nth-child(24) {
  --star-tail-length: 6.43em;
  --top-offset: 52.23vh;
  --fall-duration: 6.783s;
  --fall-delay: 8.316s;
}
.star:nth-child(25) {
  --star-tail-length: 7.47em;
  --top-offset: 70.51vh;
  --fall-duration: 7.72s;
  --fall-delay: 8.355s;
}
.star:nth-child(26) {
  --star-tail-length: 5.47em;
  --top-offset: 15.85vh;
  --fall-duration: 11.784s;
  --fall-delay: 1.457s;
}
.star:nth-child(27) {
  --star-tail-length: 5.05em;
  --top-offset: 31.18vh;
  --fall-duration: 9.496s;
  --fall-delay: 1.575s;
}
.star:nth-child(28) {
  --star-tail-length: 7.17em;
  --top-offset: 31.26vh;
  --fall-duration: 7.222s;
  --fall-delay: 9.153s;
}
.star:nth-child(29) {
  --star-tail-length: 5.44em;
  --top-offset: 27.3vh;
  --fall-duration: 7.491s;
  --fall-delay: 7.008s;
}
.star:nth-child(30) {
  --star-tail-length: 5.45em;
  --top-offset: 66.13vh;
  --fall-duration: 6.846s;
  --fall-delay: 4.084s;
}
.star:nth-child(31) {
  --star-tail-length: 7.32em;
  --top-offset: 83.43vh;
  --fall-duration: 10.754s;
  --fall-delay: 7.313s;
}
.star:nth-child(32) {
  --star-tail-length: 5.79em;
  --top-offset: 16.04vh;
  --fall-duration: 10.477s;
  --fall-delay: 7.495s;
}
.star:nth-child(33) {
  --star-tail-length: 6.69em;
  --top-offset: 59.21vh;
  --fall-duration: 9.449s;
  --fall-delay: 7.69s;
}
.star:nth-child(34) {
  --star-tail-length: 5.69em;
  --top-offset: 26.17vh;
  --fall-duration: 8.837s;
  --fall-delay: 5.489s;
}
.star:nth-child(35) {
  --star-tail-length: 6.18em;
  --top-offset: 85.47vh;
  --fall-duration: 10.161s;
  --fall-delay: 8.556s;
}
.star:nth-child(36) {
  --star-tail-length: 6.86em;
  --top-offset: 98.22vh;
  --fall-duration: 7.957s;
  --fall-delay: 3.547s;
}
.star:nth-child(37) {
  --star-tail-length: 6.56em;
  --top-offset: 2.27vh;
  --fall-duration: 7.017s;
  --fall-delay: 9.308s;
}
.star:nth-child(38) {
  --star-tail-length: 6.53em;
  --top-offset: 6.56vh;
  --fall-duration: 8.221s;
  --fall-delay: 7.191s;
}
.star:nth-child(39) {
  --star-tail-length: 6.24em;
  --top-offset: 45.92vh;
  --fall-duration: 7.06s;
  --fall-delay: 0.572s;
}
.star:nth-child(40) {
  --star-tail-length: 6.94em;
  --top-offset: 81.08vh;
  --fall-duration: 6.045s;
  --fall-delay: 0.9s;
}
.star:nth-child(41) {
  --star-tail-length: 5.8em;
  --top-offset: 71.04vh;
  --fall-duration: 9.465s;
  --fall-delay: 2.85s;
}
.star:nth-child(42) {
  --star-tail-length: 6.53em;
  --top-offset: 28.5vh;
  --fall-duration: 6.909s;
  --fall-delay: 0.61s;
}
.star:nth-child(43) {
  --star-tail-length: 5.29em;
  --top-offset: 24.23vh;
  --fall-duration: 11.606s;
  --fall-delay: 7.69s;
}
.star:nth-child(44) {
  --star-tail-length: 6.94em;
  --top-offset: 78.01vh;
  --fall-duration: 10.428s;
  --fall-delay: 0.281s;
}
.star:nth-child(45) {
  --star-tail-length: 7.23em;
  --top-offset: 79.91vh;
  --fall-duration: 11.209s;
  --fall-delay: 9.506s;
}
.star:nth-child(46) {
  --star-tail-length: 7.32em;
  --top-offset: 21.85vh;
  --fall-duration: 6.738s;
  --fall-delay: 6.877s;
}
.star:nth-child(47) {
  --star-tail-length: 5.55em;
  --top-offset: 48.41vh;
  --fall-duration: 9.914s;
  --fall-delay: 2.448s;
}
.star:nth-child(48) {
  --star-tail-length: 6.17em;
  --top-offset: 91.83vh;
  --fall-duration: 7.479s;
  --fall-delay: 9.207s;
}
.star:nth-child(49) {
  --star-tail-length: 5.33em;
  --top-offset: 7.42vh;
  --fall-duration: 8.192s;
  --fall-delay: 6.457s;
}
.star:nth-child(50) {
  --star-tail-length: 5.77em;
  --top-offset: 42.68vh;
  --fall-duration: 7.154s;
  --fall-delay: 9.679s;
}
.star::before, .star::after {
  position: absolute;
  content: "";
  top: 0;
  left: calc(var(--star-width) / -2);
  width: var(--star-width);
  height: 100%;
  background: linear-gradient(45deg, transparent, currentColor, transparent);
  border-radius: inherit;
  animation: blink 2s linear infinite;
}
.star::before {
  transform: rotate(45deg);
}
.star::after {
  transform: rotate(-45deg);
}

@keyframes fall {
  to {
    transform: translate3d(-30em, 0, 0);
  }
}
@keyframes tail-fade {
  0%, 50% {
    width: var(--star-tail-length);
    opacity: 1;
  }
  70%, 80% {
    width: 0;
    opacity: 0.4;
  }
  100% {
    width: 0;
    opacity: 0;
  }
}
@keyframes blink {
  50% {
    opacity: 0.6;
  }
}



button {
  position: relative;
  width: 140px;
  height: 35px;
  border-radius: 15px;
  background-color: white;
  border: 1px #000000 solid;
  overflow: hidden;
}
.icon img{
  width: 35px;
  height: 30px;
  
}

.text1 {
  font-size: 16px;
  font-weight: 600;
  margin-left: 17%;
}

.text2 {
  position: absolute;
  top: 25%;
  left: -50px;
  font-weight: 700;
  font-size: 14px;
  color: white;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s;
}

.icon::before {
  position: absolute;
  left: -100px;
  top: 0;
  z-index: -1;
  content: '';
  width: 140px;
  height: 35px;
  border-radius: 15px;
  background-color: #000000;
}

.icon::after {
  position: absolute;
  left: 0.5px;
  top: 0.5px;
  z-index: -1;
  content: '';
  width: 35px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
}

button:hover .icon {
  transform: translateX(98.5px);
  transition: transform 0.5s;
}

button:hover .text2 {
  transform: translateX(100px);
  transition: transform 0.6s;
}

button:active {
  transform: scale(1.03);
}




ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  /* margin-bottom: 100px; */
  
  overflow: hidden;
  /* background: #000; */
  /* height: 100vh; */
  /* width: 100%; */
  letter-spacing: -.1px;
  font-weight: 600;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
section {
  padding: 80px;
}
#ava-img{
  border-radius: 1.5em;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  height: 300px;
  width: 500px;
  z-index: 99;
  /* width: 100%; */
}

.hero {
  display: flex;
  /* margin-top: -203px ; */
  flex-direction: row;
  width: 85%;
  margin: auto;
  /* margin-top: -5px; */
}
div {
  margin-right: 40px;
  padding-top: 0;
}
h1 {
  color: #414141;
  font-size: 3em;
  padding-bottom: 25px;
}
.p-tag {
  color: rgb(115, 115, 115);
  font-size: 1.1em;
  margin-bottom: 30px;
  text-align: start;
  
 
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
}

.cta:hover {
  text-decoration: none;
  background: linear-gradient(#696484, #8788BA);
}
@media screen and (max-width: 996px) {
  .hero {
     flex-direction: column;
     text-align: center;
     justify-content: center;
     padding: 30px;
     padding: 10px;
     width: 85%;
    }
  .hero #ava-img {
     order: 1;
     margin-bottom: 40px;
     width: 100%;
    }
  .hero div {
     order: 2;
     height: auto;
     margin-bottom: 15px;
     margin-right: 0;
    }
  .home p {
     padding: 0 50px 0 50px;
     margin-bottom: 50px;
    }
}
@media screen and (max-width: 470px) {
  .hero h1 {
     font-size: 2em;
    }
  .hero p {
     font-size: 1em;
    }
    .hero #ava-img{
      height: 200px;
      border-radius: 2em;
      width: 70%;
      margin: auto;
    }
    .hero{
      margin-left: -10px;
      /* height: 100vh; */
      /* margin-top: 10px; */
    }
    
}
</style>
