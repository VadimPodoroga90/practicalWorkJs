const elements = Array.from(document.querySelectorAll('#first, #second, #third'));

let currentElementIndex = 0;

function changeColor() {
    
     elements.forEach(element => element.style.backgroundColor = "black");

    
    const currentElement = elements[currentElementIndex];
    currentElement.style.backgroundColor = 
    (currentElementIndex === 0) 
    ? "green" 
    :
    (currentElementIndex === 1) 
    ? "yellow" 
    : "red";

    currentElementIndex = 
    (currentElementIndex === 2) 
    ? 0 
    : currentElementIndex + 1;
}

elements.forEach(element => element.addEventListener('click', changeColor));


