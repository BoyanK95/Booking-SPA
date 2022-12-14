import { html } from "../lib/lit-html.js";

const aboutTemplate = () => html` <div class="aboutUs">
  <div>
    <h1>Welcome to our booking app!</h1>
  </div>
  <div class="aboutUsMsg">
    <h3>
      We're here to help you find the perfect place to stay, whether you're
      traveling for business or leisure. With our app, you can easily search for
      and book accommodations in destinations around the world. Here are some of
      the features our app offers:
    </h3>
    <ul>
        <li>Nice cuber-punk desing for the new hype generation</li>
        <li>Easy and intuitive search: Find the perfect place to stay based on your preferences and budget.</li>
        <li>Wide selection of accommodations: Choose from a variety of hotels, apartments, hostels, and more.</li>
        <li>Real-time availability and pricing: See availability and pricing for your desired dates and make your booking in just a few taps.</li>
        <li>Easy and intuitive search: Find the perfect place to stay based on your preferences and budget.</li>
    </ul>
  </div>
</div>`;

export function aboutUsView(ctx) {
  ctx.render(aboutTemplate());
}
