import Vue from 'vue';
import toastr from "toastr";

const success = (response, context) => {
    console.log("song deleted successfully");
    toastr.success("Song is deleted successfully");
    context.getSongs();
    // if (response.data && response.data.songs) {
    //     console.log("songs", response.data.songs);
    // }
};

const error = (error, context) => {
    console.log("error during song delete part");
};

export default (context, id) => {
    return Vue.$http.delete(`song/${id}`).then((response) => {
        if (response && response.status === 200) {
            success(response, context);
        }
    }).catch((error) => {
    });
}

