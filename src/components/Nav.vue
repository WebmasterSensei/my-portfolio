<template>
    <div>

        <div style="background-color: rgb(23, 189, 195);  font-family: Montstart, sans-serif; font-weight: 600; font-size: 14px; padding: 5px; color: white;">
            <h5>This is my profile please help yourself to scroll down</h5>
        </div>



    <nav class="navbar">
    <div class="logo"  >
        <img src="images/nina1.svg" style="display: inline-block;" alt="">
        <div style="color: black; display: inline-block; font-weight: 600;">NinjaDev.</div>
    </div>
    <ul class="nav-links">
      <!-- <li><a href="#" v-scroll-to="'#home'">Home</a></li> -->
      <li><a href="#" v-scroll-to="'#about'">About</a></li>
      <li><a href="#" v-scroll-to="'#web'">Skills&Learnings</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
    </div>
</template>


<script>
export default {
    name: 'nav-bar',
    props: {
        msg: String
    },
    methods: {
        scrollToSection(sectionId) {
            console.log(`Scrolling to section: ${sectionId}`);
            const element = document.getElementById(sectionId);
            console.log('Element:', element);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style>


.navbar {
  background-color: transparent;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
   font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  padding: 25px;
  width: 80%;
  margin: auto;
  
}

.logo img{
    height: 30px;
    width: 50px;
    margin-top: -10px;
}
.navbar .logo {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
}

.navbar a {
  color: black;
  text-decoration: none;
  padding: 10px;
  letter-spacing: -.1px;
  font-weight: 600;
  transition: background-color 0.3s;
  border-radius: 1em;
}

.navbar a:hover {
  background-color: rgba(22, 158, 176, 0.322);
  border-radius: 1em;
  color: white;
  font-size: 17px ;
}

.nav-links {
  list-style: none;
  display: flex;
}

@media screen and (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .nav-links {
    margin-top: 15px;
  }

  .navbar .logo {
    margin-bottom: 15px;
  }
}


</style>