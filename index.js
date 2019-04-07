'use strict';
import {onEventEnd, fetchData} from './utils/helpers';
import {RWD_BREAKPOINTS} from './utils/constants';

function removeImages (selector) {
    const images = document.querySelectorAll(selector);
    images.forEach(item => {
        item.remove();
    });
}

function lazyLoad (selector) {
    const photoContainer = document.querySelectorAll(selector);

    photoContainer.forEach(item => {
        if (item.offsetTop < window.innerHeight + window.pageYOffset && item.offsetTop > window.pageYOffset - item.clientHeight) {
            const imageSrc = window.innerWidth > RWD_BREAKPOINTS.xs ? item.getAttribute('data-src') : item.getAttribute('data-src-small');
            const checkImage = item.querySelector('.fp-image');
            if (!checkImage) {
                const newImage = new Image();
                newImage.src = imageSrc;
                newImage.classList.add('photo_img', 'fp-image');
                newImage.onload = () => {
                    item.append(newImage);
                }
            } else if (imageSrc !== checkImage.src) {
                removeImages('.fp-image');
            }
        }
    });
};

fetchData(data => {
    const container = document.getElementById('root');
    if (data.error) {
        container.append('Ups... Coś poszło nie tak!');
    }
    const {result: {results}} = data;
    results.forEach((item) => {
        const {thumbnails} = item;
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('photo', 'fp-lazy-image');
        photoContainer.setAttribute('data-src', thumbnails[3].src);
        photoContainer.setAttribute('data-src-small', thumbnails[0].src);
        container.append(photoContainer);
    });
    lazyLoad('.fp-lazy-image');
});

//events
onEventEnd('scroll', 250, () => lazyLoad('.fp-lazy-image'));
onEventEnd('resize', 10, () => lazyLoad('.fp-lazy-image'))  