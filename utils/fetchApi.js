import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) =>{
    try{
        const data = await fetch((url), {
            headers: {
                'x-rapidapi-key': '5daf11ddcemsh7602d0f55fd367bp155bd5jsnd6d11fe37393',
                'x-rapidapi-host': 'bayut.p.rapidapi.com'
            },
            //to make api calls at build time only
            cache: "force-cache",
            next: {revalidate: false}
            
        })
        if (!data.ok) throw new Error("Failed to fetch");
        return data.json();

    }catch(err){
        console.log("Error fetching data: ", err);
    }

}