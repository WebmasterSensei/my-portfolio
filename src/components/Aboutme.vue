<template>
  <div>
        <section ref="heroSection" @scroll="handleScroll" id="about" >
         <h3 class="text-1xl font-bold dark:text-white" style="margin-bottom: 20px;">
               About Me
            </h3>
       <div class="container1" >
       <div class="container mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Column 1 -->
    <div class="col-span-1 md:col-span-1">

        <transition name="fade" class="animate__animated animate__zoomIn animate__slow">
           <div class="card" v-if="isVisible" >
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner"> 
                  <img src="https://images.bigbadtoystore.com/images/p/full/2021/10/9b79622a-3a0b-4109-99f8-2ab5d1cefb5b.jpg" alt="">
                </div>
              </div>
        </transition>




    </div>

    <!-- Column 2 -->
    <div class="col-span-2 md:col-span-1">
        <div class="content23">

          <div class="ui segment">
            Hello world
          </div>
           
        </div>
    </div>
  </div>
</div>

  </div>
    </section>
  </div>

</template>

<script>
export default {
  name: 'about-me',
  props: {
    msg: String
  },
   data() {
    return {
      isVisible: false,
      liked: false,
      likeCount: 0,
      userId: null,
    };
  },
  methods: {
    toggleLike() {
      if (this.liked) {
        // Unlike

        this.liked = false;
        this.likeCount -= 1;
      } else {
        // Like
        this.liked = true;
        this.likeCount += 1;
      }

      // Save the like count and liked status to localStorage
      localStorage.setItem(`likeCount_${this.userId}`, this.likeCount.toString());
      localStorage.setItem(`liked_${this.userId}`, this.liked.toString());
    },
    generateUserId() {
      // Simple function to generate a unique user ID
      const userId = Math.random().toString(36).substring(2, 15);
      localStorage.setItem('userId', userId);
      return userId;
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

    this.userId = localStorage.getItem('userId') || this.generateUserId();

    // Retrieve the like count and liked status from localStorage on component mount
    this.likeCount = parseInt(localStorage.getItem(`likeCount_${this.userId}`)) || 0;
    this.liked = localStorage.getItem(`liked_${this.userId}`) === 'true';
  },
  beforeUnmount() {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
.container1 {
    width: 70%;
    margin: auto;
    margin-top: 100px;
    /* height: 100vh; */
}

#pro-image{
    height: 400px;
    border-radius: 5px;
}
.content{
    border-left: 1px solid #989898;
    border-radius: 2em;
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}

.card {
  width: 100%;
  height: 370px;
  transition: all 0.2s;
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 7px 7px 0px 0px #0b2447;
}

.card-inner img {
  width: 100%;
  height: 370px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

.card:hover {
  transform: scale(1.04) rotate(1deg);
}

.circle {
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0px 0px 5px 5px #0b2447;
  animation: move-up6 2s ease-in infinite alternate-reverse;
}

.circle:nth-child(1) {
  top: -25px;
  left: -25px;
}

.circle:nth-child(2) {
  bottom: -25px;
  right: -25px;
  animation-name: move-down1;
  z-index: 9;
}

@keyframes move-up6 {
  to {
    transform: translateY(-10px);
  }
}

@keyframes move-down1 {
  to {
    transform: translateY(10px);
  }
}







.introduction-section,
.location-section,
.questions-section {
    max-width: 38em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
}
.content-footer {
  margin: 50px 0;
  padding: 20px 0;
  text-align: center;
  background-color: #73A8C2;
  text-decoration: none;
}
.social > li {
  display: inline-block;
  margin: 0 5px;
}
.content-footer > p {
  color: #F7EDE1;
}
a {
    font-weight: bold;
    text-decoration: none;
    color: #F1C863;
}
  
@media only screen and (max-width: 500px) {
    .masthead {
        padding: 3em 0;
    }
    .masthead-heading {
        font-size: 3em;
    }
    .content-footer {
        padding: 2em 2.5em;
  }
}





.like-dislike-container {


  cursor: default;
  color: var(--dark-grey);
  opacity: .9;
  margin: auto;
  padding: 1.5rem;
  font-weight: 600;
  background: var(--lightest-grey);
  max-width: max-content;
  border-radius: var(--border-radius-main);
  box-shadow: var(--shadow);
  transition: .2s ease all;
}

.like-dislike-container:hover {
  box-shadow: var(--shadow-active);
}

.like-dislike-container .tool-box {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  top: 0;
  right: 0;
  border-radius: var(--border-radius-main);
}

.like-dislike-container .btn-close {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: .8rem;
  height: .8rem;
  color: transparent;
  font-size: 0;
  cursor: pointer;
  background-color: #ff000080;
  border: none;
  border-radius: var(--border-radius-main);
  transition: .2s ease all;
}

.like-dislike-container .btn-close:hover {
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #ff0000cc;
  box-shadow: var(--shadow-active);
}

.like-dislike-container .btn-close:active {
  width: .9rem;
  height: .9rem;
  font-size: .9rem;
  color: #ffffffde;
  --shadow-btn-close: 0 3px 3px 0 #00000026;
  box-shadow: var(--shadow-btn-close);
}

.like-dislike-container .text-content {
  margin-bottom: 1rem;
  font-size: 18px;
  line-height: 1.6;
  cursor: default;
}

.like-dislike-container .icons-box {
  /* display: flex; */
}

.like-dislike-container .icons {
  /* position: relative; */

  /* align-items: center; */
  /* opacity: .6;
  margin: 0 0.5rem;
  cursor: pointer;
  user-select: none;
  border: 1px solid var(--middle-grey);
  border-radius: var(--border-radius-icon);
  transition: .2s ease all; */
}

.like-dislike-container .icons:hover {
  opacity: .9;
  box-shadow: var(--shadow);
}

.like-dislike-container .icons:active {
  opacity: .9;
  box-shadow: var(--shadow-active);
}

.like-dislike-container .icons .btn-label {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  cursor: pointer;
  position: relative;
}

.like-dislike-container .like-text-content {
  border-right: 0.1rem solid var(--dark-grey);
  padding: 0 0.6rem 0 0.5rem;
  pointer-events: none;
}

.like-dislike-container .dislike-text-content {
  border-left: 0.1rem solid var(--dark-grey);
  padding: 0 0.5rem 0 0.6rem;
  pointer-events: none;
}

.like-dislike-container .icons .svgs {
  width: 1.3rem;
  fill: #000000;
  box-sizing: content-box;
  padding: 10px 10px;
  transition: .2s ease all;
}

/* Hide the default checkbox */
.like-dislike-container .icons .input-box {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.like-dislike-container .icons #icon-like-regular {
  display: block;
}

.like-dislike-container .icons #icon-like-solid {
  display: none;
}

.like-dislike-container .icons:hover :is(#icon-like-solid, #icon-like-regular) {
  animation: rotate-icon-like 0.7s ease-in-out both;
}

.like-dislike-container .icons #like-checkbox:checked ~ #icon-like-regular {
  display: none;
  animation: checked-icon-like 0.5s;
}

.like-dislike-container .icons #like-checkbox:checked ~ #icon-like-solid {
  display: block;
  animation: checked-icon-like 0.5s;
}

.like-dislike-container .icons #icon-dislike-regular {
  display: block;
  transform: rotate(180deg);
}

.like-dislike-container .icons #icon-dislike-solid {
  display: none;
  transform: rotate(180deg);
}

.like-dislike-container .icons:hover :is(#icon-dislike-solid, #icon-dislike-regular) {
  animation: rotate-icon-dislike 0.7s ease-in-out both;
}

.like-dislike-container .icons #dislike-checkbox:checked ~ #icon-dislike-regular {
  display: none;
  animation: checked-icon-dislike 0.5s;
}

.like-dislike-container .icons #dislike-checkbox:checked ~ #icon-dislike-solid {
  display: block;
  animation: checked-icon-dislike 0.5s;
}

.like-dislike-container .icons .fireworks {
  transform: scale(0.4);
}

.like-dislike-container .icons #like-checkbox:checked ~ .fireworks > .checked-like-fx {
  position: absolute;
  width: 10px;
  height: 10px;
  right: 40px;
  border-radius: 50%;
  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
  animation: 1s fireworks-bang ease-out forwards, 1s fireworks-gravity ease-in forwards, 5s fireworks-position linear forwards;
  animation-duration: 1.25s, 1.25s, 6.25s;
}

.like-dislike-container .icons #dislike-checkbox:checked ~ .fireworks > .checked-dislike-fx {
  position: absolute;
  width: 10px;
  height: 10px;
  left: 40px;
  border-radius: 50%;
  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
  animation: 1s fireworks-bang ease-out forwards, 1s fireworks-gravity ease-in forwards, 5s fireworks-position linear forwards;
  animation-duration: 1.25s, 1.25s, 6.25s;
}

/* Shake Animation */
@keyframes rotate-icon-like {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

@keyframes rotate-icon-dislike {
  0% {
    transform: rotate(180deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(183deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(177deg) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(181deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(180deg) translate3d(0, 0, 0);
  }
}

/* Checked Animation */
@keyframes checked-icon-like {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.2) rotate(-10deg);
  }
}

@keyframes checked-icon-dislike {
  0% {
    transform: scale(0) rotate(180deg);
    opacity: 0;
  }

  50% {
    transform: scale(1.2) rotate(170deg);
  }
}

/* Fireworks Animation */
@keyframes fireworks-position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}

@keyframes fireworks-gravity {
  to {
    transform: translateY(200px);
    opacity: 0;
  }
}

@keyframes fireworks-bang {
  to {
    box-shadow: 114px -107.3333333333px #8800ff, 212px -166.3333333333px #a600ff, 197px -6.3333333333px #ff006a, 179px -329.3333333333px #3300ff, -167px -262.3333333333px #ff0062, 233px 65.6666666667px #ff008c, 81px 42.6666666667px #0051ff, -13px 54.6666666667px #00ff2b, -60px -183.3333333333px #0900ff, 127px -259.3333333333px #ff00e6, 117px -122.3333333333px #00b7ff, 95px 20.6666666667px #ff8000, 115px 1.6666666667px #0004ff, -160px -328.3333333333px #00ff40, 69px -242.3333333333px #000dff, -208px -230.3333333333px #ff0400, 30px -15.3333333333px #e6ff00, 235px -15.3333333333px #fb00ff, 80px -232.3333333333px #d5ff00, 175px -173.3333333333px #00ff3c, -187px -176.3333333333px #aaff00, 4px 26.6666666667px #ff6f00, 227px -106.3333333333px #ff0099, 119px 17.6666666667px #00ffd5, -102px 4.6666666667px #ff0088, -16px -4.3333333333px #00fff7, -201px -310.3333333333px #00ffdd, 64px -181.3333333333px #f700ff, -234px -15.3333333333px #00fffb, -184px -263.3333333333px #aa00ff, 96px -303.3333333333px #0037ff, -139px 10.6666666667px #0026ff, 25px -205.3333333333px #00ff2b, -129px -322.3333333333px #40ff00, -235px -187.3333333333px #26ff00, -136px -237.3333333333px #0091ff, -82px -321.3333333333px #6a00ff, 7px -267.3333333333px #ff00c8, -155px 30.6666666667px #0059ff, -85px -73.3333333333px #6a00ff, 60px -199.3333333333px #55ff00, -9px -289.3333333333px #00ffaa, -208px -167.3333333333px #00ff80, -13px -299.3333333333px #ff0004, 179px -164.3333333333px #ff0044, -112px 12.6666666667px #0051ff, -209px -125.3333333333px #ff00bb, 14px -101.3333333333px #00ff95, -184px -292.3333333333px #ff0099, -26px -168.3333333333px #09ff00, 129px -67.3333333333px #0084ff, -17px -23.3333333333px #0059ff, 129px 34.6666666667px #7300ff, 35px -24.3333333333px #ffd900, -12px -297.3333333333px #ff8400, 129px -156.3333333333px #0dff00, 157px -29.3333333333px #1a00ff, -221px 6.6666666667px #ff0062, 0px -311.3333333333px #ff006a, 155px 50.6666666667px #00ffaa, -71px -318.3333333333px #0073ff;
  }
}
</style>