import ItemBody from "@/components/Item/ItemBody"
import Header from "@/components/shared/Header/Header"
import Loading from "@/components/shared/Loading/Loading"
import { PaginationHeader } from "@/components/shared/Pagination/PaginationHeader"
import TableHeaderField from "@/components/shared/TableHeader/TableHeaderField"
import { Table } from "@/components/ui/table"
import { useItem } from "@/hooks/useItem"
import { itemHeaders } from "@/utils/dummy"
import { useEffect, useState } from "react"


const Items = () => {
  
  const {queryItem} = useItem()

  const {data:items,isSuccess,isError,isLoading,error} = queryItem;
  const [itemList,setItemList] = useState([])

  useEffect(()=>{
    if(isSuccess && items){
      setItemList(items)
    }
  },[isSuccess,items])

  if(isError){
    console.log(error.message)
  }

  if(isLoading){
    return <Loading />
  }

  return (
    <div>
        <Header title={'Items'} placeholder={'Search Items'} filter={true} />
        <div className="mt-6 border-[0.5px] p-3 rounded-md h-[calc(100vh-250px)] overflow-auto w-[100%]">
          <Table>
            <TableHeaderField headers={itemHeaders} />
            <ItemBody dummyData={itemList} />
          </Table>
        </div>
        <div className="h-[60px] rounded-md border-[0.5px] w-[100%] mt-6 flex">
          <PaginationHeader />
        </div>
    </div>
  )
}

export default Items
