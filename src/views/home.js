import { html } from "../lib/lit-html.js";

const homeTemplate = (user) => html` 
<header class="home">
  <div id="homeImg">
    <img src="../../images/digitalCity.jpg" alt="" />
  </div>
  ${user ? html`<p id="welcome-user-msg">Hello, ${user.username} !</p>` : ""}
  <h1>Welcome to my Booking page</h1>
  <h3>
    If you are looking for a room to rent... <a href="/rooms"> click here !</a>
  </h3>
  ${user
    ? html` <h3>
        Do you want to post your room for rent... <a href="/create">
          click here !</a
        >
      </h3>`
    : ""}
</header>`;

export function homeView(ctx) {
  const user = ctx.user;
  ctx.render(homeTemplate(user));
}
