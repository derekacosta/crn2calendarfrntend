import * as functions from 'firebase-functions';
import { h } from 'preact';
import { render } from 'preact-render-to-string';
import App from './src/App';
import './src/index.css';
import express from 'express';
import fs from 'fs'; 

const index = fs.readFileSync(__dirname + '/index.html', 'utf8');
const app = express();
app.get('**', (req, res) => {
    const html = render(<App />);
    const finalHtml = index.replace('<!--  ::APP:: -->', html);
    // const finalHtml = dataHtml.replace('/** ::DATA:: **/', JSON.stringify()); 
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(finalHtml);
});

export let ssrapp = functions.https.onRequest(app);