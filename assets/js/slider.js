const images = [
  'assets/image/rtw-co.JPG',
  'assets/image/rtw-cw.JPG',
]

let key = 0

function setImageSlider() {
  const imageSliderElement = document.getElementById('img-slide')
  imageSliderElement.setAttribute('src', images[key])
}

setImageSlider()

const navigatorButtons = document.getElementsByClassName('slider-button')
for (const navButton of navigatorButtons) {
  navButton.addEventListener('click', () => {
    if (navButton.innerHTML == 'Next') {
      key++
      if (typeof (images[key]) !== 'undefined') {
        setImageSlider()
      } else {
        key = 0
        setImageSlider()
      }
    }

    if (navButton.innerHTML == 'Prev') {
      key--
      if (typeof (images[key]) !== 'undefined') {
        setImageSlider()
      } else {
        key = images.length - 1
        setImageSlider()
      }
    }
  })
}