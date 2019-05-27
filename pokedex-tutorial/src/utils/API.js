import axios from "axios"

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export function getPokeByName (name) {
    return axios.get(`${BASE_URL}/${name}`)
}