const images = [
    './assets/images./shrimp-skewers.jpg',
    './assets/images./table-in-restaurant.jpg',
    './assets/images./about.jpg'



]

const image = document.querySelector('.image')
const nextButton = document.querySelector('.next')
const previousButton = document.querySelector('.previous')
const bubbleButtons = document.querySelectorAll('.bubble')

let currentImageIndex = 0
image.src = images[currentImageIndex]
bubbleButtons[currentImageIndex].textContent = '●'

for (let i = 0; i < bubbleButtons.length; i++) {
    bubbleButtons[i].addEventListener('click', function (e) {
        currentImageIndex = i;
        image.src = images[currentImageIndex]
        for(let i = 0; i < bubbleButtons.length; i++) bubbleButtons[i].textContent = '○'
        bubbleButtons[currentImageIndex].textContent = '●'
    })
}

previousButton.addEventListener('click', function () {
    if (currentImageIndex > 0) currentImageIndex--
    image.src = images[currentImageIndex]
    for(let i = 0; i < bubbleButtons.length; i++) bubbleButtons[i].textContent = '○'
    bubbleButtons[currentImageIndex].textContent = '●'
})

nextButton.addEventListener('click', function () {
    if (currentImageIndex < 2) currentImageIndex++
    image.src = images[currentImageIndex]
    for(let i = 0; i < bubbleButtons.length; i++) bubbleButtons[i].textContent = '○'
    bubbleButtons[currentImageIndex].textContent = '●'
})