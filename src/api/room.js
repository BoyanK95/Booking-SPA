import { del, get, post, put } from "./api.js";


const endpoints = {
    'rooms': '/classes/Room',
    'roomById': `/classes/Room`
}

export async function getAll() {
    return get(endpoints.rooms)
}

export async function getById(id) {
    return get(endpoints.roomById + id)
}

export async function create(roomData, userId) {
    const data = Object.assign({}, roomData)
    data.owner = {__type:'Pointer', className: '_User', objectId: userId}
    return post(endpoints.rooms, data)
}

export async function update(id, roomData) {
    return put(endpoints.roomById + id, roomData)
    
}

export async function deleteById(id) {
    return del(endpoints.roomById + id)
}