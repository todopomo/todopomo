const faqSec=document.querySelector('.faq-sec-outer');
const faqCrossBtn=document.querySelector('.faq-cross-btn');
const faqBtn=document.querySelector('.faq-btn');
const btn=document.querySelectorAll('.btn');
const paragraph=document.querySelectorAll('.row2');

function handleFaq(){
	faqSec.style.display='block';
}

function handleFaqCross(){
	faqSec.style.display='none'
}

for(let i=0; i<btn.length;i++){
	btn[i].onclick = function(){
		paragraph[i].classList.toggle('active');
		if(btn[i].firstElementChild.className=='fas fa-plus'){
			btn[i].firstElementChild.className='fas fa-times';
		}
		else{
			btn[i].firstElementChild.className='fas fa-plus';
		}
	}
}

faqCrossBtn.addEventListener('click',handleFaqCross);
faqBtn.addEventListener('click',handleFaq);

