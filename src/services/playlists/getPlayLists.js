import Vue from 'vue';

const success = (response, context) => {
    console.log("playlists got successfully");
    if (response.data && response.data.playlists) {
        console.log("songs", response.data.playlists);
        context.playlists = response.data.playlists;
    }
};

const error = (error, context) => {
    console.log("error during getting playlists");
};

export default (context) => {
    return Vue.$http.get('playlist').then((response) => {
        if (response && response.status === 200) {
            success(response, context);
        }
    }).catch((error) => {
    });
}

