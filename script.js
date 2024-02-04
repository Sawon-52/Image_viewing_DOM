const gallary = document.querySelector('.gallary');


gallary.addEventListener('click' , function(event){
    const ourImage = event.target.attributes[0].value;
    // console.dir(ourImage);



    const image = document.createElement('img');
    image.setAttribute('src', ourImage)

    const view = document.querySelector('.view');
    view.innerHTML='';
    view.appendChild(image);
    // console.log(image)


})