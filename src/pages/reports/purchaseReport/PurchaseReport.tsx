import PurchaseReportBody from "@/components/PurchaseReports/PurchaseReport"
import Header from "@/components/shared/Header/Header"
import Loading from "@/components/shared/Loading/Loading"
import TableHeaderField from "@/components/shared/TableHeader/TableHeaderField"
import { Table } from "@/components/ui/table"
import { usePurchaseReport } from "@/hooks/usePurchaseReport"
import { purchaseReport } from "@/utils/dummy"
import { useEffect, useState } from "react"


const PurchaseReport = () => {

  const {queryPurchaseReport} = usePurchaseReport()

  const {data:purchaseReports,isLoading,isError,error,isSuccess} = queryPurchaseReport;
  const [purchaseReportList,setPurchaseReportList] = useState([])

  useEffect(()=>{
    if(isSuccess && purchaseReports){
      setPurchaseReportList(purchaseReports)
    }
  },[isSuccess,purchaseReports])

  if(isError){
    console.log(error.message)
  }

  if(isLoading){
    return <Loading />
  }

  return (
    <div>
      <Header title="Purchase Reports" filter={true} report={true}/>
      <div className="mt-6 border-[0.5px] p-3 rounded-md h-[calc(100vh-200px)] overflow-auto w-[100%]">
          <Table>
            <TableHeaderField headers={purchaseReport} />
            <PurchaseReportBody dummyData={purchaseReportList} />
          </Table>
        </div>
    </div>
  )
}

export default PurchaseReport
