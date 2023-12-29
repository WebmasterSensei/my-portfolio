<template>
    <div class="container-web">
        <section ref="heroSection" @scroll="handleScroll" id="web">
               <header>
            <h3 class="text-1xl font-bold dark:text-white" style="margin-bottom: 20px;">
                Framework, Language & Skill Percentage
            </h3>
        </header>
        <transition name="fade">
            <div v-if="isVisible">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1">
            <div class=" p-4 animate__animated animate__slideInLeft animate__slow">
                <div class="card1">
                    <div class="icon">
                        <img src="images/laravel.svg" alt="">
                    </div>
                    <p class="title">Laravel</p>
                    <p class="text">If you want to learn  Laravel <a href="https://www.laravel.com/" style="color: #F35045; text-decoration: underline;">click here</a></p>
                      <div class="w-full bg-gray-200 rounded-full " id="progbar">
                        <div class=" text-xs font-medium text-center p-0.5 leading-none rounded-full  transition-transform progress-bar" style="width: 90%; background: #F35045; color: white;"> 90%</div>
                    </div>
                </div>
                 
                
            </div>
            <div class="p-4  animate__animated animate__zoomIn  animate__slow">
                <div class="card1">
                    <div class="icon">
                        <img src="images/vue9.svg" alt="">
                    </div>
                    <p class="title">Vue.js</p>
                    <p class="text">If you want to learn  Vue.js <a href="https://vuejs.org" style="color: #41B883; text-decoration: underline;">click here</a></p>
                    <div class="w-full bg-gray-200 rounded-full " id="progbar">
                        <div class=" text-xs font-medium text-center p-0.5 leading-none rounded-full  transition-transform progress-bar" style="width: 80%; background: #41B883; color: white;"> 80%</div>
                    </div>
                </div>
            </div>
            <div class="p-4 animate__animated animate__slideInRight animate__slow">
                <div class="card1">
                    <div class="icon">
                        <img src="images/js1.svg" alt="">
                    </div>
                    <p class="title">Java Script</p>
                    <p class="text">If you want to learn Java Script <a href="https://www.javascript.com/" 
                    style="color: rgb(255, 196, 0); text-decoration: underline;">click here</a></p>
                     <div class="w-full bg-gray-200 rounded-full " id="progbar">
                        <div class=" text-xs font-medium text-center p-0.5 leading-none rounded-full  transition-transform progress-bar" style="width: 60%; background: #ffc115; color: white;"> 60%</div>
                    </div>
                </div>
            </div>
            <div class="p-4 animate__animated animate__slideInLeft animate__slow">
                <div class="card1">
                    <div class="icon">
                        <img src="images/bs1.svg" alt="">
                    </div>
                    <p class="title">Bootstrap 5</p>
                     <p class="text">If you want to learn  Bootstrap 5 <a href="https://getbootstrap.com/docs/5.0" style="color: #000000; text-decoration: underline;">click here</a></p>
                      <div class="w-full bg-gray-200 rounded-full " id="progbar">
                        <div class=" text-xs font-medium text-center p-0.5 leading-none rounded-full  transition-transform progress-bar" style="width: 100%; background: #c815ff; color: white;"> 100%</div>
                    </div>
                </div>
            </div>
            <div class="p-4  animate__animated animate__zoomIn  animate__slow">
                <div class="card1">
                    <div class="icon">
                        <img src="images/tailw.svg" alt="">
                    </div>
                    <p class="title">Tailwind Css</p>
                    <p class="text">If you want to learn  Tailwind Css <a href="https://tailwindcss.com/" style="color: #00e8fd; text-decoration: underline;">click here</a></p>
                     <div class="w-full bg-gray-200 rounded-full " id="progbar">
                        <div class=" text-xs font-medium text-center p-0.5 leading-none rounded-full  transition-transform progress-bar" style="width: 50%; background: #00e8fd; color: white;"> 50%</div>
                    </div>
                </div>
            </div>
            <div class="p-4 animate__animated animate__slideInRight animate__slow">
                <div class="card1">
                    <div class="icon">
                        <img src="images/ui.svg" alt="">
                    </div>
                    <p class="title">Semantic Ui</p>
                    <p class="text">If you want to learn  Semantic Ui <a href="https://semantic-ui.com/" style="color: #00e8fd; text-decoration: underline;">click here</a></p>
                     <div class="w-full bg-gray-200 rounded-full " id="progbar">
                        <div class=" text-xs font-medium text-center p-0.5 leading-none rounded-full  transition-transform progress-bar" style="width: 60%; background: #00e8fd; color: white;"> 60%</div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </transition>
      

        </section>
     
    </div>
</template>

<script>
export default {
    name: 'web-sites',
    props: {
        msg: String
    },
     data() {
    return {
      isVisible: false,
    };
  },
  methods: {
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
}
</script>

<style scoped>
  @keyframes progressBarAnimation {
        0% {
            width: 0;
        }
    }

    #progbar .progress-bar {
        animation: progressBarAnimation 3s ease-in-out;
    }
#progbar{
    width: 90%;
    margin: auto;
}
.container-web {
    width: 75%;
    padding-top: 30px;
    /* margin-top: 100px; */
    margin: auto;
    /* height: 100vh; */
}
section{
  height: 100vh;
}

.card1 {
    width: 100%;
    margin: auto;
    height: 240px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

    background: rgb(255,255,255);
background: linear-gradient(118deg, rgba(255,255,255,1) 49%, rgba(252,250,250,1) 49%, rgba(232,255,255,1) 92%);
    border-radius: 3rem;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
    /* border: 2px solid rgba(7, 7, 7, 0.12); */
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    padding-top: 20px;
    padding-left: 80px ;
    padding-right: 80px ;
    /* color: black ! important; */
}

.icon {
    margin: 0 auto;
    width: 100%;
    height: 80px;
    max-width: 80px;
    background: linear-gradient(90deg, #7eaaff 0%, #ff48fb 40%, rgba(0, 0, 0, 0.28) 60%);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.8s ease;
    background-position: 0px;
    background-size: 200px;
}

.icon img {
    fill: white;
    border-radius: 100%;
}

.card1 .title {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-top: 30px;
    color: black !important;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
}

.card1 .text {
    width: 80%;
    margin: 0 auto;
    font-size: 13px;
    
    text-align: center;
    margin-top: 20px;
    color: black !important;
    font-weight: 200;
    letter-spacing: 1px;
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease;
}

.card1:hover {
    height: 270px;
}

.card1:hover .text {
    transition: all 0.3s ease;
    opacity: 1;
    max-height: 40px;
}

.card1:hover .icon {
    background-position: -120px;
    transition: all 0.3s ease;
}

.card1:hover .icon svg path {
    fill: url('#gradientColor');
    transition: all 0.3s ease;
}



@media screen and (max-width: 996px) {

}
@media screen and (max-width: 470px) {
    section{
        height: 100%;
    }

    .card1{
            width: 240px;
            height: 190px;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
            /* background-color: #29292953; */
            font-family: 'Poppins', sans-serif;
            /* padding-top: 20px; */
        
    }
    .icon {
        margin: 0 auto;
        width: 100%;
        height: 50px;
        max-width: 50px;
        background: linear-gradient(90deg, #7eaaff 0%, #ff48fb 40%, rgba(0, 0, 0, 0.28) 60%);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.8s ease;
        background-position: 0px;
        background-size: 200px;
    }
    .card1 .title{
        /* display: none; */
        font-size: 14px;
        width: 200px;
    }
    .card1:hover {
    height: 290px;
    width: 100%;
}

}
</style>
