import { html } from "../lib/lit-html.js";
import * as roomService from "../api/room.js";
import { submitHandler } from "../util.js";

const createTemplate = (onSubmit) => html` 
<div class="create-room">
  <h2>Host Room</h2>
  <form @submit=${onSubmit}>
    <label>Name: <input type="text" name="name" /></label>
    <label>Location: <input type="text" name="location" /></label>
    <label>Beds: <input type="number" name="beds" /></label>
    <label>Price: <input type="number" name="price" /></label>
    <button>Create Room</button>
  </form>
</div>`;

export function createView(ctx) {
  ctx.render(createTemplate(submitHandler(onSubmit)));

  async function onSubmit({ name, location, beds, price }) {
    beds = parseInt(beds);
    if (
      name == "" ||
      location == "" ||
      Number.isNaN(beds) ||
      Number.isNaN(price)
    ) {
      return alert("All fields are required");
    }

    const userId = ctx.user?.objectId;

    const result = await roomService.create(
      { name, location, beds, price },
      userId
    );

    ctx.page.redirect("/rooms/" + result.objectId);
  }
}
