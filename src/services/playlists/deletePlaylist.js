import Vue from 'vue';
import toastr from "toastr";

const success = (response, context) => {
    console.log("playlist deleted successfully");
    toastr.success("Playlist is deleted successfully");
    context.getPlaylists();
    // if (response.data && response.data.songs) {
    //     console.log("songs", response.data.songs);
    // }
};

const error = (error, context) => {
    console.log("error during playlist delete part");
};

export default (context, id) => {
    return Vue.$http.delete(`playlist/${id}`).then((response) => {
        if (response && response.status === 200) {
            success(response, context);
        }
    }).catch((error) => {
    });
}

