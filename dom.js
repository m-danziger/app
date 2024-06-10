const TITLE = `welcome to our ToDo app !!!`

/*onload = function(){
    document.querySelector('#x')
        .addEventListener('click',inputfunction);

    }*/

function inputfunction() {

    
    /*document.querySelector('#r').innerHTML = userName*/
    let inputBtn = document.querySelector('#y')
    let userName = inputBtn.value;
    if (userName.trim() === "") {
        alert("Please enter a valid username.");
        return;
      }

    let loginbtn1 = document.querySelector('#x')
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


