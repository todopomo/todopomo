//querySelectors
const taskTxt=document.querySelector('.task-txt');
const breakTxt=document.querySelector('.break-txt'); 
const minTime=document.querySelector('.min-time');
const secTime=document.querySelector('.sec-time');
const startBtn=document.querySelector('.start-btn');
const resetBtn=document.querySelector('.reset-btn');
const defaultBtn=document.querySelector('.default-btn');
const todoInput=document.querySelector('.todo-input');
const addBtn=document.querySelector('.add-btn');
const todos=document.querySelector('.todos');
const taskTimeInp=document.querySelector('.task-input');
const breakTimeInp=document.querySelector('.break-input');
const taskCheckbox=document.querySelector('#task-checkbox');
const breakCheckbox=document.querySelector('#break-checkbox');
const soundCheckbox=document.querySelector('#sound-checkbox');
const modeCheckbox=document.querySelector('#mode-checkbox');

//variables
let btnState='stopped'; 
let activeState='task';
let startingMin=25;
let totalSec=startingMin*60;
let updatedCurrMin1=25;
let updatedCurrMin2=5;
let alarmAudio=new Audio('audios/complete-alarm.wav');

//localStorage variables
let todoItems=localStorage.getItem('todoItems')==null?[]:JSON.parse(localStorage.getItem('todoItems'));

minTime.innerHTML=startingMin;
secTime.innerHTML='00';

function handleStart(){
	if(btnState=='stopped'){
		btnState='started';
		startBtn.innerHTML='Stop';
	}
	else{
		btnState='stopped';
		startBtn.innerHTML='Start';
	}
}

function handleReset(){
	if(activeState=='task'){
		startingMin=updatedCurrMin1;
		totalSec=startingMin*60;
	}
	if(activeState=='break'){
		startingMin=updatedCurrMin2;
		totalSec=startingMin*60;
	}

	minTime.innerHTML=startingMin.toString().length==1 ? '0'+startingMin : startingMin;
	secTime.innerHTML='00';

	btnState='stopped';
	startBtn.innerHTML='Start';
}

function handleTimer(){
	if(btnState=='started'){
		let minutes=Math.floor(totalSec/60);
		let seconds=totalSec % 60;

		totalSec--;

		if(soundCheckbox.checked){
			if(minutes==0 && seconds==0){
				if(activeState=='task' && taskCheckbox.checked==true){
					alarmAudio.play();
					alarmAudio.addEventListener('ended',()=>{
						breakTxt.click();
					})
				}
				else if(activeState=='break' && breakCheckbox.checked==true){
					alarmAudio.play();
					alarmAudio.addEventListener('ended',()=>{
						taskTxt.click();
					})
				}
			}
		}
		else{
			if(minutes==0 && seconds==0){
				if(activeState=='task' && taskCheckbox.checked==true){
					breakTxt.click();
				}
				else if(activeState=='break' && breakCheckbox.checked==true){
					taskTxt.click();
				}
			}
		}

		totalSec=totalSec<0?0:totalSec;

		minTime.innerHTML=minutes.toString().length==1 ? '0'+minutes : minutes;
		secTime.innerHTML=seconds.toString().length==1 ? '0'+seconds : seconds;
	}
}
setInterval(handleTimer,1000);

function handleTask(){
	if(!taskTxt.classList.contains('active')){
		taskTxt.className='task-txt active';
		breakTxt.className='break-txt';
		activeState='task';

		startingMin=updatedCurrMin1;
		totalSec=startingMin*60;

		minTime.innerHTML=startingMin.toString().length==1 ? '0'+startingMin : startingMin;
		secTime.innerHTML='00';
	}
}

function handleBreak(){
	if(!breakTxt.classList.contains('active')){
		breakTxt.className='break-txt active';
		taskTxt.className='task-txt';
		activeState='break';

		startingMin=updatedCurrMin2;
		totalSec=startingMin*60;

		minTime.innerHTML=startingMin.toString().length==1 ? '0'+startingMin : startingMin;
		secTime.innerHTML='00';
	}
}

function handleTodoInput(){
	if(todoInput.value.trim().length!==0){
		handleAdd(todoInput.value);

		todoItems.push(todoInput.value);
		localStorage.setItem('todoItems',JSON.stringify(todoItems));
		
		todoInput.value='';	
	}
}

function handleAdd(todoValue){
	const indTodo=document.createElement('div');
	indTodo.className='ind-todo';
	todos.appendChild(indTodo);

	const tickCircle=document.createElement('div');
	tickCircle.className='tick-circle';
	indTodo.appendChild(tickCircle);

	const circleIcon=document.createElement('i');
	circleIcon.className='far fa-circle';
	circleIcon.setAttribute('id','circle');
	tickCircle.appendChild(circleIcon);

	const tickIcon=document.createElement('i');
	tickIcon.className='far fa-check-circle';
	tickIcon.setAttribute('id','tick');
	tickCircle.appendChild(tickIcon);

	const todoText=document.createElement('div');
	todoText.className='todo-text';
	todoText.innerHTML=todoValue;
	indTodo.appendChild(todoText);

	let tickCircles=Array.from(document.querySelectorAll('.tick-circle'));
	tickCircles.forEach(indTickCircle=>{
		indTickCircle.addEventListener('mouseenter',()=>{
			indTickCircle.firstElementChild.style.display='none';
			indTickCircle.lastElementChild.style.display='flex';
		})
	})
	tickCircles.forEach(indTickCircle=>{
		indTickCircle.addEventListener('mouseleave',()=>{
			indTickCircle.firstElementChild.style.display='flex';
			indTickCircle.lastElementChild.style.display='none';
		})
	})
}


if(todoItems){
	todoItems.forEach(todoItem=>{
		handleAdd(todoItem)
	})
}

todos.addEventListener('click',function(e){
	if(e.target.classList.contains('fa-check-circle')){
		e.target.parentElement.parentElement.remove();
		todoItems.splice(todoItems.indexOf(e.target.parentElement.nextElementSibling.innerText),1);
		localStorage.setItem('todoItems',JSON.stringify(todoItems));
	}
})

function handleTaskTimeInp(){
	if(taskTimeInp.value>=1 && taskTimeInp.value<=60){
		updatedCurrMin1=taskTimeInp.value;
		if(activeState=='task'){
			startingMin=updatedCurrMin1;
			totalSec=startingMin*60;

			minTime.innerHTML=startingMin.toString().length==1 ? '0'+startingMin :startingMin;
			secTime.innerHTML='00';
		}
	}
	else{
		taskTimeInp.value=updatedCurrMin1;
	}
}

function handleBreakTimeInp(){
	if(breakTimeInp.value>=1 && breakTimeInp.value<=15){
		updatedCurrMin2=breakTimeInp.value;
		if(activeState=='break'){
			startingMin=updatedCurrMin2;
			totalSec=startingMin*60;

			minTime.innerHTML=startingMin.toString().length==1 ? '0'+startingMin :startingMin;
			secTime.innerHTML='00';
		}
	}
	else{
		breakTimeInp.value=updatedCurrMin2;
	}
}

function handleSMode(){
	sCurrMode=sModeCheckbox.checked==true?'dark':'light';

}

function handleDefault(){
	taskTimeInp.value=25;
	breakTimeInp.value=5;
	taskCheckbox.checked=true;
	breakCheckbox.checked=true;

	handleTaskTimeInp();
	handleBreakTimeInp();
}

startBtn.addEventListener('click',handleStart);
resetBtn.addEventListener('click',handleReset);
taskTxt.addEventListener('click',handleTask);
breakTxt.addEventListener('click',handleBreak);
addBtn.addEventListener('click',handleTodoInput);
taskTimeInp.addEventListener('change',handleTaskTimeInp);
breakTimeInp.addEventListener('change',handleBreakTimeInp);
defaultBtn.addEventListener('click',handleDefault);
todoInput.addEventListener('keydown',function(e){
	if(e.keyCode==13){
		handleTodoInput();
	}
})

