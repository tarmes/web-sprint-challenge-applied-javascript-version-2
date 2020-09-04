/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function MakeCarousel() {

  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const mountainPic = document.createElement('img')
  const computerPic = document.createElement('img')
  const treesPic = document.createElement('img')
  const turntablePic = document.createElement('img')
  const rightButton = document.createElement('div')

  carousel.appendChild(leftButton)
  
  carousel.appendChild(rightButton)

  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')
  mountainPic.src = 'https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg'
  computerPic.src = 'https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg'
  treesPic.src = 'https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg'
  turntablePic.src = 'https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg'
  
  let index = 0

  mountainPic.classList.add('display-img')

  leftButton.addEventListener('click', evt => {
    if (index > 0) {
      index = index - 1}
    if (index === 0) {
      mountainPic.classList.add('display-img')
      computerPic.classList.remove('display-img')
    } else if (index === 1) {
      computerPic.classList.add('display-img')
      treesPic.classList.remove('display-img')
    } else if (index === 2) {
      treesPic.classList.add('display-img')
      turntablePic.classList.remove('display-img')
    } else if (index ===3) {
      turntablePic.classList.add('display-img')
    }
  })

  rightButton.addEventListener('click', evt => {
    if (index < 3) {
      index = index + 1}
    if (index === 0) {
      mountainPic.classList.add('display-img')
    } else if (index === 1) {
      computerPic.classList.add('display-img')
      mountainPic.classList.remove('display-img')
    } else if (index === 2) {
      treesPic.classList.add('display-img')
      computerPic.classList.remove('display-img')
    } else if (index ===3) {
      turntablePic.classList.add('display-img')
      treesPic.classList.remove('display-img')
    }
  })

  carousel.appendChild(mountainPic)
  carousel.appendChild(computerPic)
  carousel.appendChild(treesPic)
  carousel.appendChild(turntablePic)

  if (index === 0) {
    carousel.appendChild(mountainPic)
  } else if (index === 1) {
    carousel.appendChild(computerPic)
  } else if (index === 2) {
    carousel.appendChild(treesPic)
  } else if (index ===3) {
    carousel.appendChild(turntablePic)
  }

  return carousel
}


const carouselContainer = document.querySelector('.carousel-container')


carouselContainer.appendChild(MakeCarousel())

