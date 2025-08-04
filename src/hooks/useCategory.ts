import Axios from "@/config/api"
import { useQuery } from "@tanstack/react-query"


const getCategory = async() => {
    const res = await Axios.get('category')
    return res.data.data;
}

export const useCategory = () => {

    const queryCategory = useQuery({
        queryKey:['Category'],
        queryFn:getCategory
    })
    return {queryCategory}
}