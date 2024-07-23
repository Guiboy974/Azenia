<template>
  <header class="header">
    <div class="nav-contact"> 
      <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
      <path fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd" />
      </svg><a href="https://www.google.com/maps/dir/49.1468785,6.1505613/Azenia+institut+de+beaut%C3%A9+massages,+3+Rue+de+l'Arsenal,+57000+Metz/@49.1400911,6.1256466,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4794df2133ddfb81:0x34ec24eecdd431fb!2m2!1d6.1792421!2d49.1227176?entry=ttu">Azenia Metz</a>
      | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
      <path fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd" />
      </svg><a href="https://www.google.com/maps/dir/49.1468785,6.1505613/Azenia+institut+de+beaut%C3%A9+massages,+4+Rue+de+Castelnau,+57000+Metz/@49.1294565,6.1231213,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4794dc0cfdd6ecb3:0xdb9bfb83e05d46a4!2m2!1d6.169245!2d49.1013404?entry=ttu">Azenia Sablon</a> | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
      <path fill-rule="evenodd" d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z" clip-rule="evenodd" />
      </svg></p>
      <ul class="nav-lien">
          <li><a href="https://www.instagram.com/azenia.metz/"><img src="../assets/Instagram_icon.png" alt="instagram Azenia Metz"></a></li>
          <li></li>
          <li></li>
      </ul>   
    </div>
    <Navbar />
  </header>
</template>

<script>
import Navbar from '@/components/navbar.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Header',
  components: {
    Navbar
  }
}
</script>

<style scoped>

.header {
  top: 0px;
}

.nav-contact {
  display: flex;
  width: 100%;
  height: 40px;
  background-color: rgba(53, 182, 38, 0.989);
  align-items: center;
  justify-content: space-between;
}

svg, img {
  height: 20px;
  width: 20px;
}

.nav-lien {
  display: flex;
  flex-direction: row;
  justify-content: end;
}

a, p {
  text-decoration: none;
  color: black;
  font-weight: 500;
}

ul {
  list-style-type: none;
  padding: 10px;
}


@media (min-width: 1024px) {
  .nav-contact {
    border-radius: 10px;
  }
}

@media (max-width: 900px) {
  .nav-contact {
    display: none;
  }
}

</style>
