const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button.id)
 button.addEventListener('click', function(e){
   console.log(e);
   console.log(e.target);

   body.style.backgroundColor=e.target.id;

 })
})

