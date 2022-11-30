import { render, html } from './lib/lit-html.js'
import { until } from './lib/directives/until.js'

async function delayed() {
    await new Promise(r => setTimeout(r, 500))

    return html`<h1>Hello world!</h1>`
}


render(until(delayed(), html`<p>Loading...</p>`), document.body)