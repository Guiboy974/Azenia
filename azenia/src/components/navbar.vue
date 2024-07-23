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
        <li><router-link to="/boutique">Boutique</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/avis">Avis</router-link></li>
        <li><router-link to="/apropos">A propos</router-link></li>
      </ul>
      
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
  
  .navbar-menu {
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
  }
  
  .navbar-menu li {
    margin-left: 1rem;
    font-weight: bolder;
    color: #5f3500;
  }

  /* .navbar-menu li :hover {
    color: #8c4e00;
    font-size: 1rem
  } */
  
  .navbar-toggle {
    display: none;
  }
  
  @media (max-width: 1020px) {
    .navbar-menu {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 40px;
      left: 0px;
      width: 100%;
      background-color: rgba(140,192,87,0.80);
    }
  
    .navbar-menu.active {
      display: flex;
    }
  
    .navbar-menu li {
      margin: 1rem 0;
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
      background-color: #333;
      transition: all 0.3s ease-in-out;
    }
  }
  </style>