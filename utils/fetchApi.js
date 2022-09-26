// headers: {
//     'X-RapidAPI-Key': 'e9d07fd662mshf5261f9df3e5804p11f029jsnaef002cb4d0a',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const response = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'e9d07fd662mshf5261f9df3e5804p11f029jsnaef002cb4d0a',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return response.data;
}

export default fetchApi;