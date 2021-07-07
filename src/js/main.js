// Hide Product item
const productCart = document.querySelectorAll('.products__item')
const productBtn = document.querySelector('.products__btn')

for (let i = 0; i < productCart.length; i++) {
  if (i > 7) {
    productCart[i].style.display = 'none'
  }
}

productBtn.addEventListener('click', i => {
  productCart.forEach(item => {
    item.style.display = 'block'
  })
  productBtn.style.display = 'none'
})

// Subscribe Form
const subscribeForm = document.querySelector('.footer__subscribe-form')
const subscribeBtn = document.querySelector('.footer__subscribe-form button')
const subscribeInputs = document.querySelectorAll(
  '.footer__subscribe-form input'
)

subscribeForm.addEventListener('submit', e => {
  e.preventDefault()
  console.log('Форма subscribe с вот такими значениями: ')
  subscribeInputs.forEach(item => {
    console.log(item.value)
  })
})

// All link
const addToCartLinks = document.querySelectorAll('a')

addToCartLinks.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()
    console.log(item.getAttribute('data-text'))
  })
})

// Header on scroll
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 10) {
    header.classList.add('header--white')
  } else {
    header.classList.remove('header--white')
  }
})

// Slick
$('.tips__list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
})
