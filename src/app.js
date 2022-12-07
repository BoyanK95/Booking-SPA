import page from "./lib/page.mjs";
import { addRender } from './middlewares/render.js'
import { addSession } from "./middlewares/session.js";
import { addUserNav } from "./middlewares/userNav.js";
import { getUserData } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { createView } from './views/create.js'
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { navTemplate } from "./views/nav.js";
import { homeView } from "./views/home.js";


page(addRender(document.querySelector('main'), document.querySelector('header')))
page(addSession(getUserData))
page(addUserNav(navTemplate))
page("/", homeView)
page('/rooms', catalogView)
page('/rooms/:id', ({ params: {id} })=> console.log('details', id))
page('/create',  createView)
page('/login',  loginView)
page('/register',  registerView)

page.start()