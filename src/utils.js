import axios from "axios";
const link = "https://raw.githubusercontent.com/mkatay/json-tours/refs/heads/main/tours.json"
export const getData = async(setData)=>{
    const response = await axios.get(link)
    const data = response.data
    setData(data)
}