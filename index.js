import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';

document
    .querySelector('#root')
    .innerHTML = `
        ${Navigation}
        ${Header}
        ${Content}`;

