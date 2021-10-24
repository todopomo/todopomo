//querySelectors
const mBody=document.querySelector('body');
const mHeader=document.querySelector('.header');
const mTimerContainer=document.querySelector('.timer-container');
const mTimerUpper=document.querySelector('.timer-upper');
const mTodoInput=document.querySelector('.todo-input');
const mSettingsSec=document.querySelector('.settings-sec');
const mSettingsHorizons=document.querySelectorAll('.settings-horizons');
const mMusicSec=document.querySelector('.music-sec');
const mIndMusics=document.querySelectorAll('.ind-song');
const mMusicController=document.querySelector('.music-controller');
const mProgressCont=document.querySelector('.progress-container');
const mProgress=document.querySelector('.progress');
const mControllerDispBtn=document.querySelector('.controller-display-btn');
const mFaqSec=document.querySelector('.faq-sec')
const mFaqRow1s=document.querySelectorAll('.row1');
const mFaqRow2s=document.querySelectorAll('.row2');
const cssRoot=document.querySelector(':root');

const modeElem=document.querySelector('#mode-checkbox');

currMode='light';

function handleMode(){
	currMode=modeElem.checked==true?'dark':'light';
	if(currMode=='dark'){
		let darkBgColor='rgba(0,0,0,.3)';
		let darkBgColor2='rgba(255,255,255,.25)';
		let darkTextColor='rgba(255,255,255,.7)';

		mBody.style.background='linear-gradient(90deg, rgba(97,90,117,1) 0%, rgba(133,75,75,1) 73%)';
		mBody.style.color=darkTextColor;
		mHeader.style.borderBottom=`2px solid ${darkTextColor}`;
		mTimerContainer.style.background=darkBgColor;
		mTimerUpper.style.color=darkTextColor;
		mTodoInput.style.background=darkBgColor;
		mTodoInput.style.color=darkTextColor;
		mSettingsSec.style.background=darkBgColor;
		mSettingsSec.style.color=darkTextColor;	
		mSettingsHorizons.forEach(mSettingsHorizon=>{
			mSettingsHorizon.style.borderBottom=`2px solid ${darkTextColor}`;
		})
		mMusicSec.style.background=darkBgColor;
		mMusicSec.style.color=darkTextColor;
		mIndMusics.forEach(mIndMusic=>{
			mIndMusic.style.background=darkBgColor2;
			mIndMusic.style.color=darkTextColor;
			mIndMusic.lastElementChild.style.color=darkTextColor;
		})
		mMusicController.style.background=darkBgColor;
		mMusicController.style.color=darkTextColor;
		mProgressCont.style.background='rgba(192,192,192,.5)';
		mProgress.style.background='rgb(173,216,230)';
		mControllerDispBtn.style.background=darkBgColor;
		mFaqSec.style.background=darkBgColor;
		mFaqSec.style.color=darkTextColor;
		mFaqRow1s.forEach(mFaqRow1 =>{
			mFaqRow1.style.background=darkBgColor2;
			mFaqRow1.style.color=darkTextColor;
		});
		mFaqRow2s.forEach(mFaqRow2 =>{
			mFaqRow2.style.background='rgba(255,255,255,.05)';
			mFaqRow2.style.color=darkTextColor;
		});
		cssRoot.style.setProperty('--indTodoBg',darkBgColor);
		cssRoot.style.setProperty('--musicArtistColor','rgba(255,255,255,.4)');
	}
	else if(currMode=='light'){
		let lightBgColor='rgba(255,255,255,.5)';
		let lightBgColor2='rgba(255,255,255,.3)';
		let lightTextColor='rgba(0,0,0,.7)';

		mBody.style.background='radial-gradient(circle, rgba(237,204,218,1) 0%, rgba(148,187,233,1) 100%)';
		mBody.style.color=lightTextColor;
		mHeader.style.borderBottom=`2px solid ${lightTextColor}`;
		mTimerContainer.style.background=lightBgColor;
		mTimerUpper.style.color=lightTextColor;
		mTodoInput.style.background=lightBgColor;
		mTodoInput.style.color=lightTextColor;
		mSettingsSec.style.background=lightBgColor;
		mSettingsSec.style.color=lightTextColor;
		mSettingsHorizons.forEach(mSettingsHorizon=>{
			mSettingsHorizon.style.borderBottom=`2px solid rgba(0,0,0,.4)`;
		})
		mMusicSec.style.background=lightBgColor;
		mMusicSec.style.color=lightTextColor;
		mIndMusics.forEach(mIndMusic=>{
			mIndMusic.style.background=lightBgColor2;
			mIndMusic.style.color=lightTextColor;
			mIndMusic.lastElementChild.style.color=lightTextColor;
		})
		mMusicController.style.background=lightBgColor;
		mMusicController.style.color=lightTextColor;
		mProgressCont.style.background='rgba(0,0,0,.2)';
		mProgress.style.background='rgb(70,130,180)';
		mControllerDispBtn.style.background=lightBgColor;
		mFaqSec.style.background=lightBgColor;
		mFaqSec.style.color=lightTextColor;
		mFaqRow1s.forEach(mFaqRow1 =>{
			mFaqRow1.style.background=lightBgColor2;
			mFaqRow1.style.color='rgba(0,0,0,.7)';
		});
		mFaqRow2s.forEach(mFaqRow2 =>{
			mFaqRow2.style.background='rgba(255,255,255,.1)';
			mFaqRow2.style.color=lightTextColor;
		});
		cssRoot.style.setProperty('--indTodoBg',lightBgColor);
		cssRoot.style.setProperty('--musicArtistColor','rgba(0,0,0,.5)');

	}
}

modeElem.addEventListener('click',handleMode);
