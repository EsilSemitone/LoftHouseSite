//mobile nav menu

const nav = document.querySelector('#head__nav')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => btn.addEventListener('click', function() {
    
    nav.classList.toggle('nav__list-large')
    // nav.classList.toggle('nav__list') 
}))


//telephone mask
const telephoneForm = document.querySelectorAll('.tel__form');
const nameForm = document.querySelectorAll('.name__form');

telephoneForm.forEach(form => {
    form.addEventListener('focus', () => {
        if (form.value == '') form.value = '+'
})

    form.addEventListener('blur', () => {
        if (form.value == '+') form.value = ''
    })
})




let videoScript = document.createElement('script');
videoScript.src = "https://www.youtube.com/iframe_api";

//move tag for will easy using, i thing so... i thing was can just self create new tag and added src and new selector 
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(videoScript, firstScriptTag);

let video = document.querySelector('.video__images');

let player;


function onYouTubeIframeAPIReady() {
    // function create youtube window
    player = new YT.Player('player', {
    //   height: 720,
    //   width: 650,
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {
        autoplay: 1,
        controls: 0 }
    });
}

function onPlayerReady(event) {
    // start video
    player.playVideo();
}

let done = false;

function onPlayerStateChange(event) {
    console.log('onPlayerStateChange')
    if (event.data === YT.PlayerState.PlAYING && !done) {
        event.target.stopVideo();
        done = true;
    }
}

function toggleImage(selector) {
    
    // search selector and toggle his
    let video__link = document.querySelector(selector);
    video__link.classList.toggle('video__link--mask');
    video__link.classList.toggle("video__link");
}

function playerOnOf(status) {
    //function that add event or hide video block
    let videoBlock = document.querySelector('#player');

    if (status === true) {   
        
        videoBlock.style.display = 'block';
        
        document.querySelector('.cta').addEventListener('click', finish, false);
        document.querySelector('.map').addEventListener('click', finish, false);
    }
    else {
        player.stopVideo();
        videoBlock.style.display = 'none'
        videoBlock.style.zIndex = '-1'
    }
}

function start() {

    //start function that hide images 
    video.style.display = 'none';

    toggleImage('.video__link');
    playerOnOf(true);
    
    
    
}

function finish() {
    
    
    playerOnOf(false);
    toggleImage('.video__link--mask');
    video.style.display = 'block'
}




video.addEventListener('click', start);



