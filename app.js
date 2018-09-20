console.log('data', data);

console.log('data[0].artist', data[0].artist);

document.querySelector('#test').addEventListener('click',(event) => {
    const oof = document.createElement('p');
    document.querySelector('#mscCont').innerHTML = ""
    const elect2 = data.filter(music => {
        return music.genre == 'Electronic' ;
    }).forEach((e) => {
        return oof.innerHTML+=`${e.song} by ${e.artist} <br>`
    })


    document.querySelector('#mscCont').appendChild(oof)
});

document.querySelector('#test2').addEventListener('click',(event) => {
    const oof = document.createElement('p');
    document.querySelector('#mscCont').innerHTML = ""
    const elect2 = data.filter(music => {
        return music.genre == 'Hip-Hop' ;
    }).forEach((e) => {
        return oof.innerHTML+=`${e.song} by ${e.artist} <br>`
    })


    document.querySelector('#mscCont').appendChild(oof)
});
