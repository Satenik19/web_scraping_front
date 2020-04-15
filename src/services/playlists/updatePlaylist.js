import Vue from 'vue';
import toastr from "toastr";

const success = (response, context) => {
    console.log("playlist updated successfully");
    toastr.success("Playlist is updated successfully");
    context.getPlaylists();
    // if (response.data && response.data.songs) {
    //     console.log("songs", response.data.songs);
    // }
};

const error = (error, context) => {
    console.log("error during playlist update part");
};

export default (context, id, data) => {
    return Vue.$http.post(`playlist/${id}`, data).then((response) => {
        if (response && response.status === 200) {
            success(response, context);
        }
    }).catch((error) => {
    });
}

