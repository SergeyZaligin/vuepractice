<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-media
            src="https://vuetifyjs.com/static/doc-images/carousel/sky.jpg"
            height="300"
          ></v-card-media>
          <v-card-text>
            <h2 class="text--primary">title</h2>
            <p>
              lorem
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning">Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>
