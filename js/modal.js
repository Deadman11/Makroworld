document.addEventListener('DOMContentLoaded', () => {
  'use scrict';

  let modalAllBtn = document.querySelectorAll('.all-btn');
  let modal = document.getElementById("my-modal");
  let btn = document.getElementById("modal-open");
  let span  = document.getElementsByClassName("close-modal-window")[0];

  btn.onclick = function () {
    modal.style.display = "block";
    // console.log("HIIII");
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  modalAllBtn.forEach(event => {
    event.addEventListener('click', onClick)
  })

  function onClick(){
    modal.style.display = "block";
  }

})