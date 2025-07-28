import SellReportBody from "@/components/SellReports/SellReport"
import Header from "@/components/shared/Header/Header"
import { PaginationHeader } from "@/components/shared/Pagination/PaginationHeader"
import TableHeaderField from "@/components/shared/TableHeader/TableHeaderField"
import { Table } from "@/components/ui/table"
import { saleReport, saleReportData } from "@/utils/dummy"



const SellReport = () => {
  return (
    <div>
      <Header title="Sell Reports" placeholder="Search Items" filter={true} report={true}/>
      <div className="mt-6 border-[0.5px] p-3 rounded-md h-[calc(100vh-250px)] overflow-auto w-[100%]">
          <Table>
            <TableHeaderField headers={saleReport} />
            <SellReportBody dummyData={saleReportData} />
          </Table>
        </div>
        <div className="h-[60px] rounded-md border-[0.5px] w-[100%] mt-6 flex">
          <PaginationHeader />
        </div>
    </div>
  )
}

export default SellReport
