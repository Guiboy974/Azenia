<template>
  <main>
    <div class="home">
      <h1>Azenia, institut de beauté et salon de massages à Metz</h1>
      <div class="img-container">
      <img class="img-home" src="../assets/centre-massage-metz.jpg" alt="massage bien-être à Metz">
      </div>
      <!-- Ajoutez ici le contenu de votre page d'accueil -->
    </div>
  </main>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    // Ajoutez ici des data, methods, etc. si nécessaire
  }
  </script>
  
  <style scoped>
  .home, .img-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .img-home {
  width: 100vw;
  height: auto;
  object-fit: cover;
  }

  h1 {
  padding: 0 20px;
  box-sizing: border-box;
  word-wrap: break-word;
}

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  </style>