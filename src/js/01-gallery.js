// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");
// create html
const items = galleryItems.map(( { preview, original, description } ) => {
    const listEl = `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    return listEl;
}).join("");

galleryRef.insertAdjacentHTML("beforeend", items);

//create event
galleryRef.addEventListener("click", onImageClick);

var lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250});
// import SimpleLightbox from "simplelightbox";
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

function onImageClick(e){
    if(e.target.nodeName !== 'IMG'){
        return;
    }

      e.preventDefault();

      const instance = basicLightbox.create(
      `<img src="${e.target.dataset.source}" width="800" height="600">
      `, {
        onShow: () => window.addEventListener('keydown', onEscClose),
        onClose: () => window.removeEventListener('keydown', onEscClose)
      })

      instance.show();

      // if (basicLightbox.visible()){
      //   window.addEventListener('keydown', onEscClose);
      //   //console.log('повесила слушатель');
      // }

      function onEscClose(e){
        //console.log(e);
        if(e.code === 'Escape')
        instance.close();

      }
}