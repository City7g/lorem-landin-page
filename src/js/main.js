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
  if (window.pageYOffset > 10) {
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

// Load products
function loadProduct() {
  fetch('https://fakestoreapi.com/products?limit=8')
    .then(res => res.json())
    .then(json => {
      json.forEach(item => {
        const product = document.createElement('div')
        product.classList.add('products__item')
        product.innerHTML = `
        <div class="products__item-img">
          <img src="${item.image}" alt="Syltherine">
        </div>
        <h5 class="title-h5 products__item-title">${item.title}</h5>
        <p class="body-normal products__item-description">${item.description}</p>
        <p class="body-xlarge products__item-price">Rp ${item.price}</p>
        <div class="products__item-wrap"><a class="btn-main btn-main--white products__item-btn" href="#" data-text="Вы добавили товар${item.title}">Add to cart</a><a class="button-normal products__item-link" href="#" data-text="Поделиться товаром"><img src="img/share-white-icon.svg" alt=""><span>Share</span></a><a class="button-normal products__item-link" href="#" data-text="Вы поставили лайк"><img src="img/heart-white-icon.svg" alt=""><span>Like</span></a></div>
      `
        console.log(item)
        document.querySelector('.products__list').appendChild(product)
      })
    })
}

loadProduct()

const productBtn = document.querySelector('.products__btn')
productBtn.addEventListener('click', () => {
  loadProduct()
})


// Burger
document.querySelector('.header__burger').addEventListener('click', () => {
  document.querySelector('.header__burger').classList.toggle('active')
  document.querySelector('.header__list').classList.toggle('active')
})