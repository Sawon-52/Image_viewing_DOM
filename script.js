const gallary = document.querySelector('.gallary');
var view = document.querySelector('.view');

gallary.addEventListener('click' , function(event){
    const ourImage = event.target;
    console.log(ourImage);
})