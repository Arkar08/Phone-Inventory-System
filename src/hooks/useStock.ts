import Axios from "@/config/api"
import { useQuery } from "@tanstack/react-query"

const getAllStock = async() => {
    const res = await Axios.get('reports/stock')
    return res.data.data;
}

export const useStock = () => {
    const queryStock = useQuery(
        {
            queryKey:['Stock'],
            queryFn:getAllStock
        }
    )

    return {queryStock}
}