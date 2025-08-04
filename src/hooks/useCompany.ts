import Axios from "@/config/api";
import { useQuery } from "@tanstack/react-query";

const getCompany = async() => {
    const res = await Axios.get('company')
    return res.data.data;
}

export const useCompany = () => {
    const queryCompany = useQuery({
        queryKey:['Company'],
        queryFn:getCompany
    })

    return {queryCompany}
}