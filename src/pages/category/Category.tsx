import CategoryBody from "@/components/Category/CategoryBody";
import Header from "@/components/shared/Header/Header";
import Loading from "@/components/shared/Loading/Loading";
import { PaginationHeader } from "@/components/shared/Pagination/PaginationHeader";
import TableHeaderField from "@/components/shared/TableHeader/TableHeaderField";
import { Table } from "@/components/ui/table";
import { useCategory } from "@/hooks/useCategory";
import { categoryHeaders } from "@/utils/dummy";
import { useEffect, useState } from "react";

const Category = () => {

  const {queryCategory} = useCategory()
  const [categoryList,setCategoryList] = useState([])

  const {data:category,isError,isLoading,isSuccess} = queryCategory;

  useEffect(() => {
    if(isSuccess && category){
      setCategoryList(category)
    }
  },[category,isSuccess])

  if(isError){
    console.log(isError)
  }

  if(isLoading){
    return <Loading />
  }



  return (
    <div>
      <Header title={"Category"} placeholder={"Search Category"} />
      <div className="mt-6 border-[0.5px] p-3 rounded-md h-[calc(100vh-280px)] overflow-auto w-[100%]">
        <Table>
          <TableHeaderField headers={categoryHeaders} />
          <CategoryBody dummyData={categoryList} />
        </Table>
      </div>
      <div className="h-[60px] rounded-md border-[0.5px] w-[100%] mt-6 flex">
        <PaginationHeader />
      </div>
    </div>
  );
};

export default Category;
