const settingsSec=document.querySelector('.settings-sec-outer');
const settingsCrossBtn=document.querySelector('.settings-cross-btn');
const settingsBtn=document.querySelector('.settings-btn');

function handleSettings(){
	settingsSec.style.display='block';
}

function handleSettingsCross(){
	settingsSec.style.display='none';
}

settingsBtn.addEventListener('click',handleSettings);
settingsCrossBtn.addEventListener('click',handleSettingsCross);