console.log('data', data);

console.log('data[0].artist', data[0].artist);

document.querySelector('#test').addEventListener('click',(event) => {
    var filterRock = data.filter(function (song){
        return song.genre === "Electronic";
    })
    .map(function (genre) {
       return  `
       <div id="songCont">
       <img class="songFeat image" src=${genre.image}>
       <div id="minorContainer">
       <p id="songName" class="songFeat">${genre.song}</p>
       <p id="auth" class="songFeat">${genre.artist}</p>
       <p id="genre" clas="songFeat">${genre.genre}</p>
       <audio controls> <source src=${genre.music} type='audio/mpeg'></audio>
       </div>
       </div>
       `
    }) 
    
    const renderRock = `
    <p>${filterRock}</p>
    `
    result.innerHTML = renderRock;
});


var result = document.querySelector('#mscCont');

document.querySelector('#test2').addEventListener('click',(event) => {
    var filterRock = data.filter(function (song){
        return song.genre === "Hip-Hop";
    })
    .map(function (genre) {
       return  `
       <div id="songCont">
       <img class="songFeat image" src=${genre.image}>
       <div id="minorContainer">
       <p id="songName" class="songFeat">${genre.song}</p>
       <p id="auth" class="songFeat">${genre.artist}</p>
       <p id="genre" clas="songFeat">${genre.genre}</p>
       <audio controls> <source src=${genre.music} type='audio/mpeg'></audio>
       </div>
       </div>
       `
    }) 
    
    const renderRock = `
    <p>${filterRock}</p>
    `
    result.innerHTML = renderRock;
});

document.querySelector('#test3').addEventListener('click',(event) => {
    var filterRock = data.filter(function (song){
        return song.genre === "rap";
    })
    .map(function (genre) {
       return  `
       <div id="songCont">
       <img class="songFeat image" src=${genre.image}>
       <div id="minorContainer">
       <p id="songName" class="songFeat">${genre.song}</p>
       <p id="auth" class="songFeat">${genre.artist}</p>
       <p id="genre" clas="songFeat">${genre.genre}</p>
       <audio controls> <source src=${genre.music} type='audio/mpeg'></audio>
       </div>
       </div>
       `
    }) 
    
    const renderRock = `
    <p>${filterRock}</p>
    `
    result.innerHTML = renderRock;
});

document.querySelector('#test2').click();

