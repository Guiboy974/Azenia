<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <img src="@/assets/logo-azenia.png" alt="Logo Institut de massage et bien-être" class="logo">
      </div>
      <button class="navbar-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <div class="navbar-links">
      <ul class="navbar-menu" :class="{ 'active': isMenuActive }">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/services">Services</router-link></li> 
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/avis">Avis</router-link></li>
        <li><router-link to="/apropos">A propos</router-link></li>
      </ul>
    </div>
      <div class="navbar-user-shop">
      <ul class="navbar-menu2">
        <li><router-link to="/shop"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg></router-link></li>
            <li><router-link to="/user-auth"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
</router-link></li>
      </ul>
    </div>
    </nav>
  </template>
  
  <script>
  export default {

    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navbar',
    data() {
      return {
        isMenuActive: false
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuActive = !this.isMenuActive
      },
    }
  }
  </script>
  
  <style scoped>

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #ffffff;
  }
  
  .logo {
    height: 80px;
  }
  
  .navbar-menu, .navbar-menu2 {
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
    text-underline-offset: 8px;
  }

  .navbar-menu2 {
    justify-content: flex-end;
  }
  
  a {
    font-weight: bolder;
    text-decoration: none;
    color: #5f3500;
  }
  
  .navbar-menu li {
    margin-left: 1rem;
    font-weight: bolder;
    text-decoration: none;
  }
  
  .navbar-menu li :hover, a.active {
    color: #8c4e00;
    font-size: 1rem;
    text-decoration: underline;
  }
  
  .navbar-toggle {
    display: none;
    color: #5f3500;
  }
  
  @media (max-width: 1020px) {
    .navbar-menu {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 130px;
      left: 0px;
      width: 100vw;
      background-color: rgba(140,192,87,0.90);
      z-index: 2;
    }
  
    .navbar-menu.active {
      display: flex;
    
    }
  
    .navbar-menu li {
      margin: 1rem 0;
      padding: 0px 30px;
      font-weight: bolder;
      color: #5f3500;
    }
  
    .navbar-toggle {
      display: block;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 2;
    }
    .navbar-toggle.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    }

    .navbar-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }

    .navbar-toggle.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    .bar {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px auto;
      background-color:#5f3500;
      transition: all 0.3s ease-in-out;
    }
  }

  svg {
    width: 30px;
    height: 30px;
    padding: 2px;
    border-width: 2px;
    border-style: solid;
    margin: 20px;
   border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; 
  }
  .navbar-links, .navbar-user-shop, .navbar-toggle {
    margin: 0 20px;
  }
  </style>