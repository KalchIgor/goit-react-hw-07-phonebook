import axios from "axios";

const instanceContacts = axios.create({
   baseURL: "https://64750e3fe607ba4797db960e.mockapi.io/contacts/contacts",
    
});

export const getContacts = async() => {
    const {data} = await instanceContacts.get("/");
    console.log(data)
    return data;
}

export const addContact = async data => {
    const {data: result} = await instanceContacts.post("/", data);
    return result;
}

export const removeContact = async id => {
    const { data } = await instanceContacts.delete(`/${id}`);
    return data;
}