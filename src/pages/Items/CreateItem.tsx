import ButtonField from "@/components/shared/FormField/ButtonField";
import InputFormField from "@/components/shared/FormField/InputFormField";
import SelectFormField from "@/components/shared/FormField/SelectFormField";
import CreateHeader from "@/components/shared/Header/CreateHeader";
import { useCategory } from "@/hooks/useCategory";
import { useCompany } from "@/hooks/useCompany";
import { useEffect, useState } from "react";


const CreateItem = () => {

  const {queryCategory} = useCategory()
  const {queryCompany} = useCompany()
  const {data:category , isLoading,isSuccess} = queryCategory;
  const {data:company} = queryCompany;
  const [companyList,setCompanyList] = useState([])
  const [categoryList,setCategoryList] = useState([])

  useEffect(()=>{
    if(isSuccess && category && company){
      setCategoryList(category)
      setCompanyList(company)
    }
  },[isSuccess,category,company])



  return (
    <div>
      <CreateHeader title="Create Item"/>
      <div className="grid grid-cols-3 gap-4 p-4 border-[0.5px] h-[400px] rounded-md mt-4">
        <div className="h-[60px]">
          <InputFormField title="Item" placeholder="Item Name" option={true}/>
        </div>
        <div className="h-[60px]">
          <SelectFormField title="Category" placeholder="Select Category" optionData={categoryList} isLoading={isLoading} option={true}/>
        </div>
        <div className="h-[60px]">
          <SelectFormField title="Company" placeholder="Select Company" optionData={companyList} isLoading={isLoading} option={true}/>
        </div>
        <div className="h-[60px]">
          <InputFormField title="Specs" placeholder="Specs" option={true}/>
        </div>
        <div className="h-[60px]">
          <InputFormField title="Color" placeholder="Color Name" option={true}/>
        </div>
        <div className="h-[60px]">
          <InputFormField title="Stock" placeholder={"0"} option={true} type={"number"}/>
        </div>
        <div className="h-[60px]">
          <InputFormField title="Price" placeholder={"0"} option={true} type={"number"}/>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 border-[0.5px] h-[100px] mt-4 rounded-md">
        <div className="w-[12%]">
          <ButtonField text="Cancel" color="red"/>
        </div>
        <div className="w-[12%]">
          <ButtonField text="Save" color="green"/>
        </div>
      </div>
    </div>
  )
}

export default CreateItem;
