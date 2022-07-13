let btns = document.querySelectorAll('.btn-container button')
let card2 = document.querySelector('card-2')
let card = document.querySelector('card')
let span = document.querySelector('span')

Array.from(btns).forEach(btn => {
    btn.addEventListener('click' , e => {
        const rating = e.target.textConent
        span.textContent = rating
        card2.classList.remove('hide')
        card.classList.add('hide')
    })
})