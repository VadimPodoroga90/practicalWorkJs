const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const userAlert = document.querySelector('#userAlert');

userAlert.addEventListener('click', () => {
    alert('Служит для вывода информации в диалоговом окне');
})

const userPrompt = document.querySelector('#userPrompt');

userPrompt.addEventListener('click', () => {
    prompt('Диалоговое окно с запросом на ввод текста');
})