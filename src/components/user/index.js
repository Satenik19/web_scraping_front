import Vue from 'vue';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
import router from '../../../router/index';
import authService from '../../services/auth';
import userService from '../../services/user';
import songService from '../../services/songs';
import playlistService from '../../services/playlists';
Vue.router = router;

export default {
  name: 'user',
  data() {
    return {
      user: {},
      songSearchPart: '',
      songs: [],
      userSongs: []
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  async mounted() {
    await userService.user(this);
    await songService.getSongs(this);
  },
  methods: {
    logout() {
      authService.logout();
    },
    searchSong() {
      console.log("query", this.songSearchPart);
      let data = {
        'param': this.songSearchPart
      };
      this.songs = [
        {
          "title" : "title1",
          "video_id": "112",
          "avatar" : "avatar path",
          "duration" : "avatar path"
        },
        {
          "title" : "title2",
          "video_id": "113",
          "avatar" : "avatar path2",
          "duration" : "avatar path2"
        }
      ]
      // songService.searchSong(this, data);
    },
    getSongs() {
      songService.getSongs(this);
    },
    addSong(song) {
      console.log(song, "song");
      songService.addSong(this, song);
    },
    deleteSong(videoId) {
      songService.deleteSong(this, videoId);
    },
    getPlayLists() {
      playlistService.getPlaylists(this);
    },
    addPlaylist(data) {
      console.log(data, "playlist");
      playlistService.addPlaylist(this, data);
    },
    deletePlaylist(id) {
      console.log(id, "playlist id");
      playlistService.deletePlaylist(this, id);
    },
    updatePlaylist(id, data) {
      console.log(id, "playlist id");
      console.log(data, "playlist data");
      playlistService.updatePlaylist(this, id, data);
    }


  },
};
