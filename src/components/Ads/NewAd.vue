<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form class="mb-3" v-model="valid" ref="form" validation>
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            required
            :rules="[v => !!v || 'Title is required']"
            v-model="title"
          ></v-text-field>
          <v-text-field
            name="description"
            label="Description"
            id="description"
            type="text"
            multi-line
            :rules="[v => !!v || 'Description is required']"
            v-model="description"
          ></v-text-field>
        </v-form>
        <v-layout row>
          <v-flex xs12>
            <v-btn
              color="blue-grey"
              class="white--text"
            >
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

         <v-layout row mb-3>
          <v-flex xs12>
            <img src="" alt="" height="150">
          </v-flex>
        </v-layout>
        <v-layout row mb-3>
          <v-flex xs12>
            <v-switch
              label="'Add to promo?'"
              v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row mb-3>
          <v-flex xs12>
            <v-spacer></v-spacer>
              <v-btn class="success" :disabled="!valid" @click="createAd">Create ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://cdn-images-1.medium.com/max/1600/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg'
          }
          this.$store.dispatch('createAd', ad)
          console.log(ad)
        }
      }
    }
  }
</script>
