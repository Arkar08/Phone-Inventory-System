import Axios from "@/config/api"
import { useQuery } from "@tanstack/react-query"

const getAllSaleReport = async() => {
    const res = await Axios.get('/reports/sale')
    return res.data.data;
}


export const useSaleReport = () => {
    const querySaleReport = useQuery(
        {
            queryKey:['Sale Reports'],
            queryFn:getAllSaleReport
        }
    )

    return {querySaleReport}
}