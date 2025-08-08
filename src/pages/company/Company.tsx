import CompanyBody from "@/components/Company/CompanyBody"
import Header from "@/components/shared/Header/Header"
import Loading from "@/components/shared/Loading/Loading"
import { PaginationHeader } from "@/components/shared/Pagination/PaginationHeader"
import TableHeaderField from "@/components/shared/TableHeader/TableHeaderField"
import { Table } from "@/components/ui/table"
import { useCompany } from "@/hooks/useCompany"
import { companyHeaders } from "@/utils/dummy"
import { useEffect, useState } from "react"

const Company = () => {


  const {queryCompany} = useCompany()

  const {data:company,isSuccess,isError,isLoading} = queryCompany;
  const [companyList,setCompanyList] = useState([])

  useEffect(()=>{
    if(isSuccess && company){
      setCompanyList(company)
    }
  },[isSuccess,company])

  if(isError){
    console.log(isError)
  }

  if(isLoading){
    return <Loading />
  }


  return (
    <div>
      <Header title={'Company Listings'} placeholder={'Search Company Listings'}/>
      <div className="mt-6 border-[0.5px] p-3 rounded-md h-[calc(100vh-280px)] overflow-auto w-[100%]">
        <Table>
          <TableHeaderField headers={companyHeaders} />
          <CompanyBody dummyData={companyList} />
        </Table>
      </div>
      <div className="h-[60px] rounded-md border-[0.5px] w-[100%] mt-6 flex">
        <PaginationHeader />
      </div>
    </div>
  )
}

export default Company
