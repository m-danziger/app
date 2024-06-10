const TITLE = `welcome to our ToDo app !!!`

/*onload = function(){
    document.querySelector('#x')
        .addEventListener('click',inputfunction);

    }*/

function inputfunction() {
    /*let inputBtn = document.querySelector('#y');
    let userName = inputBtn.value;/*
    /*document.querySelector('#r').innerHTML = userName*/


    let loginbtn1 = document.querySelector('#x')
    loginbtn1.innerText = 'loging... in';
    setTimeout(displayApp, 1000);

    function displayApp() {
        let container = document.querySelector('.todo-container');
        container.style.display = 'block';
        let welcomectr = document.querySelector('.z')
        welcomectr.style.display = 'none'

    }
    displayTitle();
    displayTasks();
    
    document.querySelector('#user-name').innerText = document.querySelector('#y').value;
}


function displayTitle() {
    for (let i = 0; i < TITLE.length; i++) {
        setTimeout(function() {
            displayTitleTillIndex(i);
        }, i * 100);
    }
};

function displayTitleTillIndex(index) {
    let subTitle = TITLE.substring(0, index + 1)
    let h1el = document.querySelector('#app-title')
    if (index < TITLE.length - 1) subTitle += '_'

    h1el.innerText = subTitle
}


