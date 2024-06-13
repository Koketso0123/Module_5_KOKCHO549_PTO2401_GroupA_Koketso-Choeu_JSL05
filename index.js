// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Emo girl", artist: "MGK", genre: "Punk" },
    { title: "Natives", artist: "Blink-182", genre: "Punk" },
    { title: "Wonderland", artist: "Taylor Swift", genre: "Pop" },
    { title: "Feline", artist: "Juice WRLD", genre: "Trap" },
    { title: "Moonlight", artist: "XXTentation", genre: "Emo Rap" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Punk",
    "Groot": "Punk"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
  
 const playList = document.getElementById("playlists");
  Object.entries(guardians).forEach(([guardian,preference]) => {
    
 const mixDiv = document.createElement("div");
  const mixHeader = document.createElement("h3");
  mixHeader.textContent = `${guardian}` +"'s" + " Playlist";
    
    const mixUlList = document.createElement("ul");
    const mixList = document.createElement("li");
   
    mixDiv.appendChild(mixHeader);
    mixDiv.appendChild(mixUlList)
    mixUlList.appendChild(mixList)
     playList.appendChild(mixDiv)
    
   const obj = songs.filter(song => song.genre === `${preference}`);
    
    const objectValue = obj.map(findSongs)
    
    function findSongs(song){
      return [song.title,song.artist].join(" by ")
    }
    mixList.textContent = objectValue;
   
  })
 
}

generatePlaylist(guardians, songs);