import Axios from "@/config/api"
import { useQuery } from "@tanstack/react-query"


const getItem = async() => {
    const res = await Axios.get('items?page=1&limit=10')
    return res.data.data;
}

export const useItem = () => {
    const queryItem = useQuery(
        {
            queryKey:['Items'],
            queryFn:getItem
        }
    )

    return {queryItem}
}