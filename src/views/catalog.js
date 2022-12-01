import { html } from '../lib/lit-html.js';
// import { repeat }  from '../lib/directives/repeat.js'
import * as roomService from '../api/room.js'

const catalogTemplate = (list) => html`
<h1>Available Rooms</h1>
${list}
`


const listTemplate = (rooms) => html`
<section>
    ${rooms.map(r => roomCard(r))}
</section>`

const roomCard = (room) => html`
<article class="room-card">
    <h3>${room.name}</h3>
    <p>Location: ${room.location}</p>
    <p>Beds: ${room.beds}</p>
    <p>price: ${room.price}</p>
    <p><a class="action" href="/rooms/${room.objectId}">View Details</a></p>
</article>`

export async function catalogView(ctx) {
    ctx.render(catalogTemplate(html`<h1>Loading &hellip;</h1>`))

    const {results: rooms} = await roomService.getAll()

    ctx.render(catalogTemplate(listTemplate(rooms)))
}