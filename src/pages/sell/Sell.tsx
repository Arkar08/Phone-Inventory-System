import SellBody from "@/components/Sell/SellBody"
import Header from "@/components/shared/Header/Header"
import Loading from "@/components/shared/Loading/Loading"
import { PaginationHeader } from "@/components/shared/Pagination/PaginationHeader"
import TableHeaderField from "@/components/shared/TableHeader/TableHeaderField"
import { Table } from "@/components/ui/table"
import { useSell } from "@/hooks/useSell"
import { saleHeaders } from "@/utils/dummy"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Sell = () => {

  const {querySell} = useSell()
  const {data:sellItem,isLoading,isError,error,isSuccess} = querySell;
  const [sellItemList,setSellItemList] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    if(isSuccess && sellItem){
      setSellItemList(sellItem)
    }
  },[isSuccess,sellItem])

  if(isLoading){
    return <Loading />
  }

  if(isError){
    console.log(error)
  }

  const createsell =  () => {
    navigate('create')
  }

  return (
    <div>
      <Header title="Sell Item" placeholder="Search Items" filter={true} plusClick={createsell}/>
      <div className="mt-6 border-[0.5px] p-3 rounded-md h-[calc(100vh-250px)] overflow-auto w-[100%]">
        <Table>
          <TableHeaderField headers={saleHeaders} />
          <SellBody  dummyData={sellItemList}/>
        </Table>
      </div>
      <div className="h-[60px] rounded-md border-[0.5px] w-[100%] mt-6 flex">
        <PaginationHeader />
      </div>
    </div>
  )
}

export default Sell
