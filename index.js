import axios from 'axios';
import Navigo from 'navigo';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import * as State from './store';
import Post from './components/Post';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var newState = Object.assign({}, State);


function render(state){
    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Header(state[state.active])}
            ${Content(state)}`;


    router.updatePageLinks();
}

function handleNavigation(activePage){
    newState.active = activePage;

    render(newState);
}

   
render(State);

router
    .on('/:page',(params) => handleNavigation(params.page))
    .on('/',() => handleNavigation('home'))
    .resolve();

axios
    .get('https.jsonplaceholder.typicode.com/post')
    .then((response) => {
        newState.post = response.data;

        render(newstate);
    });

