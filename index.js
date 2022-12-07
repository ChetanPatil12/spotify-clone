const music = new Audio('songs/1.mp3');
// music.play();

const songs = [
    {id:1,
        songName : `<h5>7 Rings</h5> <h6>Ariana Grande</h6>`,
        poster : "covers/1.jpg"
        },
    {id:2,
        songName : `<h5>Shape of you</h5> <h6>Ed Sheeran</h6>`,
        poster : "covers/2.jpg"
        },
    {id:3,
        songName : `<h5>At my worst</h5> <h6>Pink Sweat</h6>`,
        poster : "covers/3.jpg"
        },
    {id:4,
        songName : `<h5>Lily</h5> <h6>alen waker</h6>`,
        poster : "covers/4.jpg"
        },
    {id:5,
        songName : `<h5>Sorry</h5> <h6>Justin Bieber</h6>`,
        poster : "covers/5.jpg"
        },
    {id:6,
        songName : `<h5>Arcade</h5> <h6>Duncan Laurence</h6>`,
        poster : "covers/6.jpg"
        },
    {id:7,
        songName : `<h5>Lovely</h5> <h6>Billie Eilish</h6>`,
        poster : "covers/7.jpg"
        },
    {id:8,
        songName : `<h5>Perfect</h5> <h6>Ed Sheeran</h6>`,
        poster : "covers/8.jpg"
        },
    {id:9,
        songName : `<h5>Dandelions</h5> <h6>Ruth B.</h6>`,
        poster : "covers/9.jpg"
        },
    {id:10,
        songName : `<h5>On my way</h5> <h6>alen waker</h6>`,
        poster : "covers/10.jpg"
        }, 

        
]


const songList =[
    {id:11,
        songName : `<h5>At my worst</h5> `,
        poster : "covers/11.jpg"
        },
    {id:12,
        songName : `<h5>Dandelions</h5> `,
        poster : "covers/12.jpg"
        },
        {id:13,
            songName : `<h5>Sorry</h5> `,
            poster : "covers/13.jpg"
            },
            {id:14,
                songName : `<h5>Shape of you</h5> `,
                poster : "covers/14.jpg"
                },
                {id:15,
                    songName : `<h5>7 Rings</h5> `,
                    poster : "covers/15.jpg"
                    },

]

Array.from(document.getElementsByClassName('cover')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

Array.from(document.getElementsByClassName('s1')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songList[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songList[i].songName;

})

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click' , () =>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    } else{
        music.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
});


let masterPoster = document.getElementById('masterPoster');
let index = 0;

Array.from(document.getElementsByClassName('cover')).forEach((e) =>{
    e.addEventListener('click' , (el) => {
        index = el.target.id;
        music.src = `songs/${index}.mp3`;
        masterPoster.src = `covers/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        let songsTitles = songs.filter((els) => {
            return els.id == index;
        });
        let title = document.getElementById('songTitle');

        songsTitles.forEach(elss => {
            let{songName} = elss;
            title.innerHTML = songName;
        })
    })
})

Array.from(document.getElementsByClassName('s1')).forEach((e) =>{
    e.addEventListener('click' , (el) => {
        index = el.target.id;
        music.src = `songs/${index}.mp3`;
        masterPoster.src = `covers/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        let songsTitles = songList.filter((els) => {
            return els.id == index;
        });
        let title = document.getElementById('songTitle');

        songsTitles.forEach(elss => {
            let{songName} = elss;
            title.innerHTML = songName;
        })
    })
})

let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
   
    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('fa-play');
    masterPlay.classList.remove('fa-pause');
})



let popularRight = document.getElementById('popularRight');
let popularLeft = document.getElementById('popularLeft');
let mostPopular = document.getElementsByClassName('mostPopular')[0];
popularLeft.addEventListener('click', () =>{
    mostPopular.scrollLeft -= 150;
})

popularRight.addEventListener('click', () =>{
    mostPopular.scrollLeft += 150;
})