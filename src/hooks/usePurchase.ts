import Axios from "@/config/api"
import { useQuery } from "@tanstack/react-query"



const getPurchaseItem = async() => {
    const res = await Axios.get('purchase?page=1&limit=10')
    return res.data.data;
}

export const usePurchase = () => {
    const queryPurchase = useQuery(
        {
            queryKey:['Purchase'],
            queryFn:getPurchaseItem
        }
    )

    return {queryPurchase}
}