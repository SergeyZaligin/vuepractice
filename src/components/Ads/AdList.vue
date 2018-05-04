<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ad list</h1>
        <v-card
          class="elevation-2 mb-4"
          v-for="ad of myAds"
          :key="ad.id"
        >
          <v-layout row>
            <v-flex xs4>
              <v-card-media :src="ad.imageSrc" height="175px"></v-card-media>
            </v-flex>
            <v-flex xs8>
            <v-card-text>
              <h2 class="text--primary">{{ ad.title }}</h2>
              <p>{{ ad.description }}</p>
            </v-card-text>
             <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
             </v-card-actions>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
   computed:{
      myAds () {
        return this.$store.getters.myAds
      }
    }
  }
</script>
