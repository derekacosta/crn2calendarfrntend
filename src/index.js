import { h, render } from 'preact';
import './App.css';
import App from './App';

if(window.__data__){
    renderApp(window.__data__);
}
else {
    render(<App />, document.getElementById('root'));
}

function renderApp(data) {
    render(<App />, 
        document.querySelector('body'),
        document.getElementById('root'));
}