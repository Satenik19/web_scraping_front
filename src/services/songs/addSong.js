import Vue from 'vue';
import toastr from "toastr";

const success = (response, context) => {
    console.log("song added successfully");
    toastr.success("Song is added successfully");
    context.getSongs();
    // if (response.data && response.data.songs) {
    //     console.log("songs", response.data.songs);
    // }
};

const error = (error, context) => {
    console.log("error during song add part");
};

export default (context, song) => {
    return Vue.$http.post('song', song).then((response) => {
        if (response && response.status === 200) {
            success(response, context);
        }
    }).catch((error) => {
    });
}

