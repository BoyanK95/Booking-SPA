import { html } from "../lib/lit-html.js";


const homeTemplate = (user) => html`
<div class="home">
    ${user ? html`<p id="welcome-user-msg">Hello, ${user.username} !</p>` 
    : ''}
    <h1>Welcome to my Booking page</h1>
    <h3>If you are looking for a room to rent ...<a href="/rooms"> Click here !</a></h3>
    <img id="homeImg" src="../../images/sunrise-city.webp" alt="">
    ${user ? html`
    <h3>Do you want to post your room for rent ...<a href="/create"> Click here !</a></h3>` : ''}
    
</div>`

export function homeView(ctx) {
    const user = ctx.user
    ctx.render(homeTemplate(user))

}