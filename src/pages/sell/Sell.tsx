import PurchaseBody from "@/components/Purchase/PurchaseBody"
import Header from "@/components/shared/Header/Header"
import { PaginationHeader } from "@/components/shared/Pagination/PaginationHeader"
import TableHeaderField from "@/components/shared/TableHeader/TableHeaderField"
import { Table } from "@/components/ui/table"
import {  purchaseBody, purchaseHeaders } from "@/utils/dummy"


const Sell = () => {
  return (
    <div>
      <Header title="Sell Item" placeholder="Search Items" filter={true}/>
      <div className="mt-6 border-[0.5px] p-3 rounded-md h-[calc(100vh-250px)] overflow-auto w-[100%]">
        <Table>
          <TableHeaderField headers={purchaseHeaders} />
          <PurchaseBody dummyData={purchaseBody} />
        </Table>
      </div>
      <div className="h-[60px] rounded-md border-[0.5px] w-[100%] mt-6 flex">
        <PaginationHeader />
      </div>
    </div>
  )
}

export default Sell
