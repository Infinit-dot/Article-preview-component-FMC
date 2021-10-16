const openBtn = document.querySelector('.article__share-btn--open');
const closeBtn = document.querySelector('.article__share-btn--close');
const popUp = document.querySelector('.article__pop-up');

closeBtn.addEventListener('click', () => {
    popUp.classList.toggle('active')
    closeBtn.classList.toggle('active')
})

openBtn.addEventListener('click', () => {
    popUp.classList.remove('active')
    closeBtn.classList.remove('active')
})