let btns = document.getElementsByClassName('rate')
let submit = document.getElementsByClassName('submit')
let card2 = document.getElementsByClassName('card-2')
let card = document.getElementsByClassName('.card')
let span = document.querySelector('span')

Array.from(btns).forEach(btn => {
    btn.addEventListener('click' , e => {
        const rating = e.target.textContent
        span.textContent = rating;
       // card2.style.display = "visible"
      //  card.style.display ='none'
    })
})

// Array.from(submit).addEventListener('click', e => {
    card2.style.display = "block"
    card.style.display ='none'
// }) 