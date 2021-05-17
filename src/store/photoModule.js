import axios from "axios";

export default {
  state: {
    photos: [],
    dialogVisible: false,
    currentPhoto: {}
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload
    },
    addPhotos(state, payload) {
      state.photos.unshift(payload)
    },
    showDialog(state) {
      state.dialogVisible = true
    },
    hideDialog(state) {
      state.dialogVisible = false
    },
    setCurrentPhoto(state, payload) {
      state.currentPhoto = payload
    }

  },
  getters: {
    getAllPhotos(state) {
      return state.photos
    },
    getDialogVisible: (state) => state.dialogVisible,
    getCurrentPhoto: (state) => state.currentPhoto
  },

  actions: {
    async fetchPhotos(context) {
      let res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=14');
      context.commit("setPhotos", res.data);
    }
  }
}