
const userTextField = document.querySelector('.link');


function changeText (event) {
    const userText = prompt('Текст ссылки будет изменён на введённый!');
    userTextField.textContent = userText;
    event.preventDefault();
    


    if (userText === null) {
        alert('Вы не ввели текст');
        userTextField.textContent = 'Кликните чтобы изменить текст ссылки';
    } 
    
    
    
}


 

userTextField.addEventListener('click', changeText);

