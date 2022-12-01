import page from "./lib/page.mjs";
import { addRender } from './middlewares/render.js'
import { addSession } from "./middlewares/session.js";
import { getUserData } from "./util.js";
import { createView } from './views/create.js'


page(addRender(document.querySelector('main')))
page(addSession(getUserData))
page("/", '/create')
page('/rooms', ()=> console.log('catalog'))
page('/rooms/:id', ({ params: {id} })=> console.log('details', id))
page('/create',  createView)

page.start()