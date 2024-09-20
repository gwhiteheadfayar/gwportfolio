import React, { useState, useEffect } from 'react';

function LastFmScrobbles() {

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const [scrobbles, setScrobbles] = useState([]);

  useEffect(() => {
    const fetchScrobbles = async () => {
      try {
        const response = await fetch('https://us-central1-gwportfolio-db.cloudfunctions.net/getLastFmScrobbles'); // Replace with your Cloud Function URL
        
        const data = await response.json();

        // const data = { //temp data. remove later
        //   "scrobbles": [
        //     {
        //       "artist": "Eric Prydz",
        //       "track": "Pjanoo - Club Mix",
        //       "albumArtUrl": "https://lastfm.freetls.fastly.net/i/u/300x300/f5845a86ff4f43119fef25898e2edff3.jpg"
        //     },
        //     {
        //       "artist": "Naomi Akimoto",
        //       "track": "Bewitched (Are You Leaving Soon)",
        //       "albumArtUrl": "https://lastfm.freetls.fastly.net/i/u/300x300/aff98cdd10ea98f8cd02b2de25fe41a3.jpg"
        //     },
        //     {
        //       "artist": "Kerri Chandler",
        //       "track": "Hallelujah - Kaoz 6:23 Gospel Extended Mix",
        //       "albumArtUrl": "https://lastfm.freetls.fastly.net/i/u/300x300/68348846ba304f459977fa791f8e1905.jpg"
        //     },
        //     {
        //       "artist": "Yuni Wa",
        //       "track": "Can't Wait",
        //       "albumArtUrl": "https://lastfm.freetls.fastly.net/i/u/300x300/fb90c4ddeeae6d372b972b55b2342459.jpg"
        //     },
        //     {
        //       "artist": "The Salsoul Orchestra",
        //       "track": "Runaway",
        //       "albumArtUrl": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
        //     },
        //     {
        //       "artist": "Daft Punk",
        //       "track": "Something About Us",
        //       "albumArtUrl": "https://lastfm.freetls.fastly.net/i/u/300x300/1340e9e1082cf0dc748583b7eefce6d5.jpg"
        //     }
        //   ]
        // }

        setScrobbles(data.scrobbles);
      } catch (error) {
        console.error('Error fetching Last.fm scrobbles:', error);
      }
    };

    fetchScrobbles();
  }, []);

  return (
    <div>
      <div className="scrobbles-card" onClick={() => openInNewTab("https://www.last.fm/user/garrettwlastfm")}>
        <p>My recent songs:</p>
        {scrobbles.map((scrobble, index) => (
          <div key={index} className="scrobble-item">
            <img
              src={scrobble.albumArtUrl}
              alt={`${scrobble.artist} - ${scrobble.track}`}
            />
            <div className="scrobble-details">
              <h3>{scrobble.track}</h3>
              <p>{scrobble.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default LastFmScrobbles;