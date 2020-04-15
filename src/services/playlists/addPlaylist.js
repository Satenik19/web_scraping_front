import Vue from 'vue';
import toastr from "toastr";

const success = (response, context) => {
    console.log("playlist added successfully");
    toastr.success("Playlist created successfully");
    context.getPlaylists();
    // if (response.data && response.data.songs) {
    //     console.log("songs", response.data.songs);
    // }
};

const error = (error, context) => {
    console.log("error during song add part");
};

export default (context, playlist) => {
    return Vue.$http.post('playlist', playlist).then((response) => {
        if (response && response.status === 200) {
            success(response, context);
        }
    }).catch((error) => {
    });
}

