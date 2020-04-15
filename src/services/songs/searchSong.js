import Vue from 'vue';

const success = (response, context) => {
    console.log("song searched successfully");
    if (response.data && response.data.songs) {
        console.log("songs", response.data.songs);
    }
};

const error = (error, context) => {
    console.log("error during song search");
};

export default (context, param) => {
    return Vue.$http.post('search-song', param).then((response) => {
        if (response && response.status === 200) {
            success(response, context);
        }
    }).catch((error) => {
    });
}

