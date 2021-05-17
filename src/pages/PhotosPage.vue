<template>
  <v-container>
    <PhotoForm v-if="$store.getters.getAllPhotos.length < 15" @addPhoto="addPhoto"/>
    <div v-else>Вы не можете добавить больше фотографий</div>
    <hr>
    <br>
    <v-row>
      <Photo v-for="photo in $store.getters.getAllPhotos" :key="photo.id" :photo="photo"/>
    </v-row>
    <PhotoDialog/>
  </v-container>
</template>

<script>
  import Photo from "../components/photo/Photo";
  import PhotoForm from "../components/photo/PhotoForm";
  import PhotoDialog from "../components/photo/PhotoDialog";
  import {mapActions, mapMutations} from 'vuex';

  export default {
    name: "PhotosPage",
    components: {PhotoDialog, PhotoForm, Photo},

    data: () => ({
      photos: [],
      // currentPhoto: {},
      // dialogVisible: false
    }),
    mounted() {
      this.fetchPhotos()
    },
    methods: {
      ...mapActions(['fetchPhotos']),
      ...mapMutations(['addPhotos']),
      addPhoto(photo) {
        this.addPhotos(photo)
      },
      openPhoto(photo) {
        this.currentPhoto = photo
        this.dialogVisible = true
      }
    }
  }

</script>

<style scoped>

</style>