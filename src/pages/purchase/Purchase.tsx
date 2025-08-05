import PurchaseBody from "@/components/Purchase/PurchaseBody"
import Header from "@/components/shared/Header/Header"
import Loading from "@/components/shared/Loading/Loading"
import { PaginationHeader } from "@/components/shared/Pagination/PaginationHeader"
import TableHeaderField from "@/components/shared/TableHeader/TableHeaderField"
import { Table } from "@/components/ui/table"
import { usePurchase } from "@/hooks/usePurchase"
import {purchaseHeaders } from "@/utils/dummy"
import { useEffect, useState } from "react"


const Purchase = () => {

    const {queryPurchase} = usePurchase()

    const {data:purchase,isLoading,isError,isSuccess,error} = queryPurchase;
    const [purchaseItem,setPurchaseItem] = useState([])

    useEffect(()=>{
      if(isSuccess && purchase){
        setPurchaseItem(purchase)
      }
    },[isSuccess,purchase])

    if(isError){
      console.log(error.message)
    }

    if(isLoading){
      return <Loading />
    }

  return (
    <div>
      <Header title="Purchase Item" placeholder="Search Items" filter={true}/>
      <div className="mt-6 border-[0.5px] p-3 rounded-md h-[calc(100vh-250px)] overflow-auto w-[100%]">
        <Table>
          <TableHeaderField headers={purchaseHeaders} />
          <PurchaseBody dummyData={purchaseItem} />
        </Table>
      </div>
      <div className="h-[60px] rounded-md border-[0.5px] w-[100%] mt-6 flex">
        <PaginationHeader />
      </div>
    </div>
  )
}

export default Purchase
