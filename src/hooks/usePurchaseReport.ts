import Axios from "@/config/api"
import { useQuery } from "@tanstack/react-query"

const getAllPurchaseReport = async() => {
    const res = await Axios.get('reports/purchase')
    return res.data.data;
}

export const usePurchaseReport = () => {
    const queryPurchaseReport = useQuery(
        {
            queryKey:['Purchase Report'],
            queryFn:getAllPurchaseReport
        }
    )

    return {queryPurchaseReport}
}