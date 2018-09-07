import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';

var State = {
    'active': 'home',
    'home': {
        'title': '32 year old man learning and journeying through life'
    },
    'blog': {
        'title': 'I like to talk and stuff'
    },
    'projects': {
        'title': 'these are my projects I worked on'
    },
    'resume': {
        'title': 'My Resume'
    },
};

var root = document.querySelector('#root');

function handleNavigation(event){
    var newState = State;

    newState.active = event.target.textContent;

    event.preventDefault();

    render(newState);
}

function render(state){
    var links;

    root.innerHTML = `
            ${Navigation()}
            ${Header(state[state.active])}
            ${Content()}`;


    links = document.querySelectorAll('#navigation a');

    for(let i = 0; i < links.lenght; i++){
        links[i].addEventListener(
            'click',
            handleNavigation
        );
    }
}
   
render(State);
