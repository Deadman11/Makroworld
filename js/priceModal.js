document.addEventListener('DOMContentLoaded', () => {
  'use scrict';


  const firstBox = document.querySelector('#first-box'),
        secondBox = document.querySelector('#second-box'),
        thirdBox = document.querySelector('#third-box'),
        fourthBox = document.querySelector('#fourth-box');


  const makroBtnOne = document.querySelector('#makro-btn-one'),
        makroBtnTwo = document.querySelector('#makro-btn-two'),
        makroBtnTree = document.querySelector('#makro-btn-tree'),
				makroBtnFour = document.querySelector('#makro-btn-four');
				
			

			makroBtnOne.onclick = function(){
				firstBox.className = 'box-show';
			};


			makroBtnTwo.onclick = function() {
				secondBox.className = 'box-show';
			};

			makroBtnTree.onclick = function() {
				thirdBox.className = 'box-show'
			};

			makroBtnFour.onclick = function() {
				fourthBox.className = 'box-show';
			};



  
});