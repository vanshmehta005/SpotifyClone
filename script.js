console.log("Welcome To Spotify");

//Initialize the vairables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let forwardSong = document.getElementById('forwardSong');
let backwardSong = document.getElementById('backwardSong');
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName : "Warriyo - Mortals",filepath :"songs/1.mp3" , coverpath : "covers/1.jpg"}, 
    {songName : "Cielo - Huma-Huma",filepath :"songs/2.mp3" , coverpath : "covers/2.jpg"}, 
    {songName : "Different Heaven & EHIDE",filepath :"songs/4.mp3" , coverpath : "covers/4.jpg"}, 
    {songName : "DEAF KEV",filepath :"songs/3.mp3" , coverpath : "covers/3.jpg"}, 
    {songName : "Janji-Heroes-Tonight",filepath :"songs/5.mp3" , coverpath : "covers/5.jpg"}, 
    {songName : "Salam-e-Ishq",filepath :"songs/6.mp3" , coverpath : "covers/6.jpg"}, 
    {songName : "Salam-e-Ishq",filepath :"songs/7.mp3" , coverpath : "covers/7.jpg"} 
]

songItems.forEach((element,i)=>
{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})



//Handle Play/Pause Click
masterPlay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else
    {
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//Listen To Events
audioElement.addEventListener('timeupdate',()=>
{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
    {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        masterSongNameUpdate();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

backwardSong.addEventListener('click',()=>
{
    if(songIndex!=1)
    {
        songIndex-=1;
        masterSongNameUpdate();
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})

forwardSong.addEventListener('click',()=>
{
    if(songIndex!=6)
    {
        songIndex+=1;
        masterSongNameUpdate();
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})

const masterSongNameUpdate=() =>
{
    masterSongName.innerText=songs[songIndex].songName;
}