'use strict';

const API_KEY = '21054801-09e9951a2ca09cf628ee27e12';
const API_URL = 'https://pixabay.com/api/';

$(document).ready(()=> {
    $('button').on('click', (e) => {
        e.preventDefault();
        const searchText =($('.input-text').val());
        const searchColor =($('.input-color').val());
        getImages(searchText, searchColor);
    })
  
});

function getImages(searchText, searchColor) {
    fetch(`${API_URL}/?key=${API_KEY}&q=${searchColor}+${searchText}&image_type=photo&orientation=horizontal`)
    .then((res) => res.json())
    .then((data) =>{
       let images = data.hits;
        let output ='';
        $.each(images, (index, image) =>{
            output +=`
            <div class="card" key=${index}>
                <p>${image.tags.slice(0, 8)}</p>
                <img src="${image.webformatURL}">
                </div>
            `
        })
        if(data.hits.length === 0) output='no images found';
        $('.gallery').html(output);
    } )
    .catch((err) => console.log(err));
};