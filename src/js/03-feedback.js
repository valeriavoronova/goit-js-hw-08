// Отслеживай на форме событие input, и каждый раз записывай в локальное 
// хранилище объект с полями email и message, 
// в которых сохраняй текущие значения полей формы. 
// Пусть ключом для хранилища будет строка "feedback-form-state".

// При загрузке страницы проверяй состояние хранилища, 
// и если там есть сохраненные данные, заполняй ими поля формы. 
// В противном случае поля должны быть пустыми.

// При сабмите формы очищай хранилище и поля формы, а также выводи объект 
// с полями email, message и текущими их значениями в консоль.

// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
// Для этого добавь в проект и используй библиотеку lodash.throttle.
import throttle from 'lodash.throttle';


const formRef = document.querySelector(".feedback-form");
const emailInputRef = document.querySelector(".feedback-form input")
const textRef = document.querySelector(".feedback-form textarea");
//const submitBtnRef = document.querySelector("button");
//console.log(formRef, textRef, emailInputRef, )
formRef.addEventListener("input", throttle(onTextInput, 500));
// textRef.addEventListener("input", throttle(onTextInput, 500));
// emailInputRef.addEventListener("input", throttle(onEmailInput, 500));

formRef.addEventListener("submit", onFormSub);

const review = {};
const STORAGE_DATA = 'feedback-form-state';
// const savedData = localStorage.getItem('feedback-form-state');

if (localStorage.getItem(STORAGE_DATA)!==null) {
    recoverData();
}
return;

// function onEmailInput(e){
//     review.email = e.target.value;
//     localStorage.setItem(STORAGE_DATA, JSON.stringify(review));
// }

function onTextInput(e){
    review[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_DATA, JSON.stringify(review));
}



// console.log(review)
function onFormSub(e){
    e.preventDefault();
    e.currentTarget.reset();
    
     const savedData = localStorage.getItem(STORAGE_DATA);
    if(savedData){
        console.log(savedData)
       localStorage.removeItem(STORAGE_DATA);
    }
}


function recoverData(){ 
      const savedData = localStorage.getItem(STORAGE_DATA); 
 
    if(JSON.parse(savedData).email){
        emailInputRef.value = JSON.parse(savedData).email;
    } 
    if(JSON.parse(savedData).message){
        // emailInputRef.value = JSON.parse(savedData).email;
        textRef.value = JSON.parse(savedData).message;
    }

}