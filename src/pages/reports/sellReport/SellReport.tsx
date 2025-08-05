import SellReportBody from "@/components/SellReports/SellReport"
import Header from "@/components/shared/Header/Header"
import Loading from "@/components/shared/Loading/Loading"
import TableHeaderField from "@/components/shared/TableHeader/TableHeaderField"
import { Table } from "@/components/ui/table"
import { useSaleReport } from "@/hooks/useSaleReport"
import {saleReport } from "@/utils/dummy"
import { useEffect, useState } from "react"



const SellReport = () => {

  const {querySaleReport} = useSaleReport()

  const {data:saleReports,isLoading,isError,error,isSuccess} = querySaleReport;
  const [saleReportList,setSaleReportList] = useState([])

  useEffect(()=>{
    if(isSuccess && saleReports){
        setSaleReportList(saleReports)
    }
  },[isSuccess,saleReports])


  if(isError){
    console.log(error.message)
  }

  if(isLoading){
    return <Loading />
  }

  return (
    <div>
      <Header title="Sell Reports" placeholder="Search Items" filter={true} report={true}/>
      <div className="mt-6 border-[0.5px] p-3 rounded-md h-[calc(100vh-180px)] overflow-auto w-[100%]">
          <Table>
            <TableHeaderField headers={saleReport} />
            <SellReportBody dummyData={saleReportList} />
          </Table>
        </div>
    </div>
  )
}

export default SellReport
