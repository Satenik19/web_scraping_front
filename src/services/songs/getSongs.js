import Vue from 'vue';

const success = (response, context) => {
    console.log("songs got successfully");
    if (response.data && response.data.songs) {
        console.log("songs", response.data.songs);
        context.userSongs = response.data.songs;
    }
};

const error = (error, context) => {
    console.log("error during song search");
};

export default (context) => {
    return Vue.$http.get('song').then((response) => {
        if (response && response.status === 200) {
            success(response, context);
        }
    }).catch((error) => {
    });
}

