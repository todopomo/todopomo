//songs data
let songs=[{
	songName:'Haven of the faeries',
	artistName:'Darren Curtis',
	path:'audios/haven-of-the-faeries.mp3',
	description:''
},{
	songName:'Motivate',
	artistName:'Wavecont',
	path:'audios/motivate.mp3',
	description:''
},{
	songName:'On my way',
	artistName:'Ghostrifter',
	path:'audios/on-my-way.mp3',
	description:''
},{
	songName:'Art of silence',
	artistName:'Uniq',
	path:'audios/art-of-silence.mp3',
	description:''
},{
	songName:'Adventure',
	artistName:'Alexander Nakarada',
	path:'audios/adventure.mp3',
	description:''
},{
	songName:'Sunset eyes',
	artistName:'Inossi',
	path:'audios/sunset-eyes.mp3',
	description:''
},{
	songName:'Dreaming under the stars',
	artistName:'Darren Curtis',
	path:'audios/dreaming-under-the-stars.mp3',
	description:''
},{
	songName:'Inspire',
	artistName:'Wavecont',
	path:'audios/inspire.mp3',
	description:''
},{
	songName:'Longer way to go',
	artistName:'Miguel Johnson',
	path:'audios/longer-way-to-go.mp3',
	description:''
},{
	songName:'Morning routine',
	artistName:'Ghostrifter',
	path:'audios/morning-routine.mp3',
	description:''
},{
	songName:'Wake up',
	artistName:'Heroic',
	path:'audios/wake-up.mp3',
	description:''
},{
	songName:'Infinitely',
	artistName:'Keys of Moon',
	path:'audios/infinitely.mp3',
	description:''
},{
	songName:'Melody of nature',
	artistName:'GoodBMusic',
	path:'audios/melody-of-nature.mp3',
	description:''
},{
	songName:'Reality',
	artistName:'Ashutosh',
	path:'audios/reality.mp3',
	description:''
},{
	songName:'Balance',
	artistName:'Komiku',
	path:'audios/balance.mp3',
	description:''
}];

//querySelectors
const musicSec=document.querySelector('.music-sec-outer');
const musicCrossBtn=document.querySelector('.music-cross-btn');
const musicBtn=document.querySelector('.music-btn');
const songsSec=document.querySelector('.songs');
const audio= document.querySelector('audio');
const controllerSec=document.querySelector('.music-controller')
const previousBtn=document.querySelector('#previous');
const nextBtn=document.querySelector('#next');
const controllerPBtn=document.querySelector('#controller-play-pause');
const progress=document.querySelector('.progress-container');
const controllerDisp=document.querySelector('.controller-display-btn');
const musicCurrentTime=document.querySelector('.current-time');
const musicTotalTime=document.querySelector('.music-time');
const volumeAdjuster=document.querySelector('.volume-input');

//variables
let currentIndex=0;

updatePlayer();

function handleMusic(){
	musicSec.style.display='block';
}

function handleMusicCross(){
	musicSec.style.display='none';
}

function updatePlayer(){
	audio.src=songs[currentIndex].path;

	if(controllerPBtn.classList.contains('fa-pause-circle')){
		audio.play();
	}
}

function handlePlayPause(){
	if(controllerPBtn.classList.contains('fa-play-circle')){
		controllerPBtn.classList.remove('fa-play-circle');
		controllerPBtn.classList.add('fa-pause-circle');

		audio.play();
		handleToggle();
		audio.volume=volumeAdjuster.value/10;

		indSongDivs[currentIndex].lastElementChild.classList.remove('fa-play');
		indSongDivs[currentIndex].lastElementChild.classList.add('fa-pause');
	}
	else{
		controllerPBtn.classList.remove('fa-pause-circle');
		controllerPBtn.classList.add('fa-play-circle');

		audio.pause();
		handleToggle();

		indSongDivs[currentIndex].lastElementChild.classList.remove('fa-pause');
		indSongDivs[currentIndex].lastElementChild.classList.add('fa-play');
	}
}

function handleToggle(){
	indSongDivs.forEach(indSong =>{
		indSong.lastElementChild.classList.remove('fa-pause');
		indSong.lastElementChild.classList.add('fa-play');	
	})
}

function handlePrevious(){
	if(currentIndex==0){
		currentIndex=15
	}
	currentIndex--;
	updatePlayer();

	if(controllerPBtn.classList.contains('fa-play-circle')){
		handleToggle();

		indSongDivs[currentIndex].lastElementChild.classList.remove('fa-pause');
		indSongDivs[currentIndex].lastElementChild.classList.add('fa-play');
	}
	else{
		handleToggle();

		indSongDivs[currentIndex].lastElementChild.classList.remove('fa-play');
		indSongDivs[currentIndex].lastElementChild.classList.add('fa-pause');
	}
}

function handleNext(){
	if(currentIndex==14){
		currentIndex=-1
	}
	currentIndex++;
	updatePlayer();

	if(controllerPBtn.classList.contains('fa-play-circle')){
		handleToggle();

		indSongDivs[currentIndex].lastElementChild.classList.remove('fa-pause');
		indSongDivs[currentIndex].lastElementChild.classList.add('fa-play');
	}
	else{
		handleToggle();

		indSongDivs[currentIndex].lastElementChild.classList.remove('fa-play');
		indSongDivs[currentIndex].lastElementChild.classList.add('fa-pause');
	}
}

function updateProgress(e){
	let {duration,currentTime}=e.srcElement;
	let progressPercent=currentTime/duration*100
	progress.firstElementChild.style.width=progressPercent+'%';
	
	currentMin=Math.floor(currentTime/60);
	currentSec=Math.floor(currentTime%60);
	mUpdatedCurrMin=currentMin.toString().length==1? '0'+currentMin :currentMin;
	mUpdatedCurrSec=currentSec.toString().length==1? '0'+currentSec :currentSec;

	musicCurrentTime.innerHTML=`${mUpdatedCurrMin}:${mUpdatedCurrSec}`;

	if(isNaN(duration)){
		musicTotalTime.innerHTML='00:00';
	}
	else{
		mTotalMin=Math.floor(duration/60);
		mTotalSec=Math.floor(duration%60);

		updatedTotMin=mTotalMin.toString().length==1? '0'+mTotalMin :mTotalMin;
		updatedTotSec=mTotalSec.toString().length==1? '0'+mTotalSec :mTotalSec;
	
		musicTotalTime.innerHTML=`${updatedTotMin}:${updatedTotSec}`;
	}
}

function handleProgress(e){
	let width=this.clientWidth;
	let clickX=e.offsetX;
	audio.currentTime=(clickX/width)*audio.duration;
}

function handleVolume(){
	audio.volume=volumeAdjuster.value/10;	
}

function handleControllerDisp(){
	if(controllerDisp.firstElementChild.classList.contains('fa-chevron-down')){
		controllerSec.style.display='none';
		controllerDisp.style.bottom=0;
		controllerDisp.firstElementChild.classList.remove('fa-chevron-down');
		controllerDisp.firstElementChild.classList.add('fa-chevron-up');
	}
	else{
		controllerSec.style.display='flex';
		controllerDisp.style.bottom=57+'px';
		controllerDisp.firstElementChild.classList.remove('fa-chevron-up');
		controllerDisp.firstElementChild.classList.add('fa-chevron-down');
	}
}

songs.forEach(song =>{
	const indSong=document.createElement('div');
	indSong.className='ind-song';
	songsSec.appendChild(indSong);

	const songInfo=document.createElement('div');
	songInfo.className='song-info';
	indSong.appendChild(songInfo);

	const songTitle=document.createElement('div');
	songTitle.className='song-title';
	songTitle.innerHTML=song.songName;
	songInfo.appendChild(songTitle);

	const artist=document.createElement('div');
	artist.className='artist';
	artist.innerHTML=song.artistName;
	songInfo.appendChild(artist);

	const playPause=document.createElement('i');
	playPause.className='fas fa-play';
	indSong.appendChild(playPause);
})

let indSongDivs=document.querySelectorAll('.ind-song');
for(let i=0;i<indSongDivs.length;i++){
	indSongDivs[i].addEventListener('click',function(){
		currentIndex=i;
		controllerPBtn.classList.remove('fa-play-circle');
		controllerPBtn.classList.add('fa-pause-circle');
		updatePlayer();

		handleToggle();
		indSongDivs[i].lastElementChild.classList.remove('fa-play');
		indSongDivs[i].lastElementChild.classList.add('fa-pause');
	})
}

musicBtn.addEventListener('click',handleMusic);
musicCrossBtn.addEventListener('click',handleMusicCross);
previousBtn.addEventListener('click',handlePrevious);
nextBtn.addEventListener('click',handleNext);
controllerPBtn.addEventListener('click',handlePlayPause);
audio.addEventListener('timeupdate',updateProgress);
audio.addEventListener('ended',handleNext);
progress.addEventListener('click',handleProgress);
controllerDisp.addEventListener('click',handleControllerDisp);
volumeAdjuster.addEventListener('change',handleVolume);