const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({ origin: true });

const LASTFM_API_KEY = 'e8d1d4b2a7e5cd41dbace1dda8893928';
const LASTFM_USER = 'garrettwlastfm';

exports.getLastFmScrobbles = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => { // Add this line
        try {
            const lastfmResponse = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=5`);
            const scrobbles = lastfmResponse.data.recenttracks.track.map(track => ({
            artist: track.artist['#text'],
            track: track.name,
            albumArtUrl: track.image[3]['#text'],
            }));
            response.json({ scrobbles });
        } catch (error) {
            console.error('Error fetching Last.fm scrobbles:', error);
            response.status(500).json({ error: 'Error fetching Last.fm scrobbles' });
        }
    });
});