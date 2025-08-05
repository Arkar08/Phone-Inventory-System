import Axios from "@/config/api"
import { useQuery } from "@tanstack/react-query"


const getSellItem = async() => {
    const res = await Axios.get('sell?page=1&limit=10')
    return res.data.data;
}

export const useSell = () => {
    const querySell = useQuery(
        {
            queryKey:['Sell'],
            queryFn:getSellItem
        }
    )
    return {querySell}
}