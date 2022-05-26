//import imgCard from '../templates/gallery-item.hbs'
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//console.log(imgCard);
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

var lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250});

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

