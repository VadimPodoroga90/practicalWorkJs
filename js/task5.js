const textTypeEl = document.querySelector('#textField')
const textBlockEl = document.querySelector('#duplicateTextField')
const buttonEl = document.querySelector('#button') 

textTypeEl.addEventListener('input', () => {
    textBlockEl.textContent = textTypeEl.value;

})

buttonEl.addEventListener('click', (event) => {
    console.log(textTypeEl.value)
    textTypeEl.value = ""
    textBlockEl.textContent = ""
    event.preventDefault()
})


