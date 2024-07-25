<template>
    <div class="container-adress">
        <div class="adress-1">
            <p><strong>Azenia</strong><br>
            3 rue de l'Arsenal<br>
            57000 Metz<br>
            03 72 13 60 82<br>
            <strong>Horaires</strong><br>
            Lundi : fermé<br>
            Mardi: 10h00 - 19h00<br>
            Mercredi: 10h00 - 19h00<br>
            Jeudi: 14h00 - 18h00<br>
            Vendredi: 10h00 - 19h00<br>
            Samedi: 10h00 - 18h00
            </p>
        </div>
        <div class="adress-2">
            <p><strong>Azenia</strong><br>
                4 rue de Castelnau<br/>
                57000 Metz<br/>
                03 57 28 72 19<br/>
                <strong>Horaires</strong><br/>
                Lundi : fermé<br/>
                Mardi: 9h00 - 20h00<br/>
                Mercredi: 10h00 - 20h00<br/>
                Jeudi: 9h00 - 19h00<br/>
                Vendredi: 9h00 - 20h00<br/>
                Samedi: 9h00 - 18h00
            </p>
        </div>
        <div class="link-adress">
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd" />
            </svg><a href="https://www.google.com/maps/dir/49.1468785,6.1505613/Azenia+institut+de+beaut%C3%A9+massages,+3+Rue+de+l'Arsenal,+57000+Metz/@49.1400911,6.1256466,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4794df2133ddfb81:0x34ec24eecdd431fb!2m2!1d6.1792421!2d49.1227176?entry=ttu">Azenia Metz Pontiffroi</a><br>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd" />
            </svg><a href="https://www.google.com/maps/dir/49.1468785,6.1505613/Azenia+institut+de+beaut%C3%A9+massages,+4+Rue+de+Castelnau,+57000+Metz/@49.1294565,6.1231213,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4794dc0cfdd6ecb3:0xdb9bfb83e05d46a4!2m2!1d6.169245!2d49.1013404?entry=ttu">Azenia Metz Sablon</a>
            </p>
        </div>
    </div>
    
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Footer',
}
</script>

<style scoped>
.container-adress {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px 0px;
    background-color: rgb(135, 220, 105);
    width: 100vw;
    box-sizing: border-box;
    height: auto;
}

.adress-1, .adress-2, .link-adress {
    margin: 30px;
}

.link-adress {
    display: flex;
    justify-content: flex-end;
}

svg {
    width: 15px;
    height: 15px;
}
</style>

