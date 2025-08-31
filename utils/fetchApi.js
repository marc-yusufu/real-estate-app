import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) =>{
    try{
        const {data} = await axios.get((url), {
            headers: {
                'x-rapidapi-key': '6e8113ce01msh81c7606ffc6bf6cp18fa47jsnaae010d3b162',
                'x-rapidapi-host': 'bayut.p.rapidapi.com'
            }
        })
        return data
    }catch(err){
        console.log("Error fetching data: ", err);
    }

}