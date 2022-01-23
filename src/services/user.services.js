import {urls} from "../configs/urls";

const getAll = () => {
    return fetch(urls.users)
        .then(value => value.json())
}

const getUserId = (id) => {
    return fetch(`${urls.users}/` + id)
        .then(value => value.json())
}

const getPostsUserId = (id) => {
    return fetch(`${urls.posts}?userId=`+id)
        .then(value => value.json())
}

export const userService = {
    getAll,
    getUserId,
    getPostsUserId
}