import Navigo from 'navigo';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import * as State from './store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);


function render(state){
    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Header(state[state.active])}
            ${Content(state[state.active])}`;


    router.updatePageLinks();
}

function handleNavigation(activePage){
    var newState = Object.assign({}, State);
 
    newState.active = activePage;

    render(newState);
}

   
render(State);

router
    .on('/:page',(params) => handleNavigation(params.page))
    .on('/',() => handleNavigation('home'))
    .resolve();