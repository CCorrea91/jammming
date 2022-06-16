let accessToken;
let clientId = '12c7c04e015a405eb4d305cc9e43ca58';
let redirectUri = 'http://localhost:3000/';


const Spotify = {

    getAccessToken() {
        if (accessToken) {
            return accessToken
        } else {
            const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
            const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

            if (accessTokenMatch && expiresInMatch) {
                accessToken = accessTokenMatch[1];
                const expiresIn = Number(expiresInMatch[1]);
                window.setTimeout(() => accessToken = '', expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
                return accessToken;
            } else {
                const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
                window.location = accessUrl;
            }
        }
    }
};

export default Spotify;
