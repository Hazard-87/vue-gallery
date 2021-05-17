<template>
  <v-dialog
          max-width="600"
          v-model="$store.getters.getDialogVisible"
          @click:outside="hideDialog"
  >
    <v-card>
      <v-card-title>{{full_title}}</v-card-title>
      <v-card-text>
        <v-img
                width="600"
                height="600"
                :src="$store.getters.getCurrentPhoto.url"/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "PhotoDialog",

    methods: {
      ...mapMutations(['hideDialog']),
    },
    computed: {
      full_title() {
        return `Название фотографии - ${this.$store.getters.getCurrentPhoto.title}`
      }
    }
  }
</script>

<style scoped>

</style>