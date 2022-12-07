import { html } from "../lib/lit-html.js";

export const navTemplate = (hasUser) => html` 
<nav>
  <div id="logo-img"><a href="/"><i class="fa-solid fa-hotel" ></i></a></div>
  <a href="/">Home</a>
  <a href="/rooms">Rooms</a>
  ${hasUser ? html`
  <a href="/create">Create</a>
  <a href="javascript:void(0)">Logout</a>` : html`
  <a href="/login">Login</a>
  <a href="/register">Register</a>`}
</nav>`;
