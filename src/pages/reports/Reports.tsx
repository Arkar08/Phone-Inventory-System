import Header from "@/components/shared/Header/Header"
import Loading from "@/components/shared/Loading/Loading"
import TableHeaderField from "@/components/shared/TableHeader/TableHeaderField"
import StockReport from "@/components/StockReports/StockReport"
import { Table } from "@/components/ui/table"
import { useStock } from "@/hooks/useStock"
import { stockReport } from "@/utils/dummy"
import { useEffect, useState } from "react"


const Reports = () => {

  const {queryStock} = useStock()
  const {data:stock,isLoading,isError,error,isSuccess} = queryStock;
  const [stockList,setStockList] = useState([])

  useEffect(()=>{
    if(isSuccess && stock){
      setStockList(stock)
    }
  },[isSuccess,stock])

  if(isError){
    console.log(error)
  }

  if(isLoading){
    return <Loading />
  }

  return (
    <div>
      <Header title="Current Stock Reports" placeholder="Search Items" filter={true} report={true}/>
      <div className="mt-6 border-[0.5px] p-3 rounded-md h-[calc(100vh-200px)] overflow-auto w-[100%]">
          <Table>
            <TableHeaderField headers={stockReport} />
            <StockReport dummyData={stockList} />
          </Table>
        </div>
    </div>
  )
}

export default Reports
