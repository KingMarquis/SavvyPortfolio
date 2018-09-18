var welcomeUser = function welcomeUser(){
    var userName = prompt('What\'s your name');

    if(userName === ''){
        welcomeUser();
    }
    else{
        document.querySelector('#greeting').innerHTML = ` 
        <h3>Welcome to my portfolio page, ${userName}</h3>
        <h4>Hope you like my page<h4>
        `;
    }
};

welcomeUser();