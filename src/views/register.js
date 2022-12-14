import { register } from "../api/user.js";
import { html } from "../lib/lit-html.js";
import { submitHandler } from "../util.js";

const registerTempalte = (onRegister) => html` 
<div class="register">
  <h2>Register</h2>
  <form @submit=${onRegister}>
    <label>Email <input type="text" name="email" /></label>
    <label>Username <input type="text" name="username" /></label>
    <label>Password <input type="password" name="password" /></label>
    <label>Repeat pass<input type="password" name="repass" /></label>
    <button>Register</button>
  </form>
</div>`;

export function registerView(ctx) {
  ctx.render(registerTempalte(submitHandler(onRegister)));

  async function onRegister({ email, password, repass, username }) {
    if (email == "" || password == "" || repass == "" || username == "") {
      return alert("All fields are required!");
    }

    if (password != repass) {
      return alert("Passwords must match");
    }

    await register(email, username, password);
    ctx.page.redirect("/");
  }
}
