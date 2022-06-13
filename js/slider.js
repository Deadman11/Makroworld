document.addEventListener('DOMContentLoaded', () => {
  'use scrict';

  const btnPrev = document.querySelector('.btn-left');
  const btnNext = document.querySelector('.btn-right');
  
  let doc = document.querySelectorAll('.box-offer .box-all');
  let i = 0

  btnPrev.onclick = function(){
    doc[i].className = 'box-all box-all';
    i--;

    if(i < 0){
      i = doc.length - 1;
    }

    doc[i].className = 'box-show';
  }

  btnNext.onclick = function(){
    doc[i].className = 'box-all';
    i++;

    if(i >= doc.length){
      i = 0;
    }
    
    doc[i].className = 'box-all box-show';
  }







































  // btnPrev.onclick = function(){
  //   doc[i].className = 'box-all box-all';
  //   i--;

  //   if(i < 0){
  //     i = doc.length - 1;
  //   }

  //   doc[i].className = 'box-show';
  // }

  // btnNext.onclick = function(){
  //   doc[i].className = 'box-all';
  //   i++;

  //   if(i >= doc.length){
  //     i = 0;
  //   }
    
  //   doc[i].className = 'box-all box-show';
  // }




})
