const TITLE = `welcome to our ToDo app !!!`

/*onload = function(){
    document.querySelector('#loginBtnId')
        .addEventListener('click',inputfunction);

    }*/







function logingFunction() {


    /*document.querySelector('#r').innerHTML = userName*/
    let inputBtn = document.querySelector('#inputUsername')
    let userName = inputBtn.value;
    if (userName.trim() === "") {
        alert("Please enter a valid username.");
        return;
    }

    let loginbtn1 = document.querySelector('#loginBtnId')
    loginbtn1.innerText = 'loging... in';
    setTimeout(displayApp, 1000);

    function displayApp() {
        let container = document.querySelector('.todo-container');
        container.style.display = 'block';
        let welcomectr = document.querySelector('.login-container')
        welcomectr.style.display = 'none'

    }
    displayTitle();
    displayTasks();

    document.querySelector('#user-name').innerText = document.querySelector('#inputUsername').value;
}


function displayTitle() {
    for (let i = 0; i < TITLE.length; i++) {
        setTimeout(function () {
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


function createUsername() {
    let a = document.querySelector('.createNewUser');
    a.style.display = 'block'
    let welcomectr = document.querySelector('.login-container')
    welcomectr.style.display = 'none'
}

function backBtn() {
    let a = document.querySelector('.createNewUser');
    a.style.display = 'none'
    let welcomectr = document.querySelector('.login-container')
    welcomectr.style.display = 'block'
    let userNameInputElement = document.querySelector("#inputNewUserName");
    let passInputElement = document.querySelector("#inputNewPassword");
    userNameInputElement.value = "";
    passInputElement.value = "";
}
