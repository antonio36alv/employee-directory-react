import axios from "axios"
const queryUrl = "https://randomuser.me/api/?results=50&nat=US"

export const getUsers = () => {
    return axios.get(queryUrl)
}