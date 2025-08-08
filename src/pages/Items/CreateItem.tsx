import ButtonField from "@/components/shared/FormField/ButtonField";
import InputFormField from "@/components/shared/FormField/InputFormField";
import SelectFormField from "@/components/shared/FormField/SelectFormField";
import CreateHeader from "@/components/shared/Header/CreateHeader";
import { useCategory } from "@/hooks/useCategory";
import { useCompany } from "@/hooks/useCompany";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createItemSchema = z.object({
  item: z.string().min(1, { message: "Item is required." }),
  stock: z.string().min(1, {message: "Stock is required."}),
  price:z.string().min(1, {message: "Price is required."}),
  specs:z.string().min(1, {message:"Specs is required."}),
  color:z.string().min(1 , {message:"Color is required."})
});

const CreateItem = () => {
  const { queryCategory } = useCategory();
  const { queryCompany } = useCompany();
  const { data: category, isLoading, isSuccess } = queryCategory;
  const { data: company } = queryCompany;
  const [companyList, setCompanyList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    if (isSuccess && category && company) {
      setCategoryList(category);
      setCompanyList(company);
    }
  }, [isSuccess, category, company]);

  const companyChange = (data: string) => {
    console.log(data);
  };

  const categoryChange = (data: string) => {
    console.log(data);
  };

  const form = useForm<z.infer<typeof createItemSchema>>({
    resolver: zodResolver(createItemSchema),
    mode: "all",
    defaultValues: {
      item: "",
      stock:"",
      price:"",
      specs:"",
      color:""
    },
  });

  const { control, handleSubmit } = form;

  const submit = (values: z.infer<typeof createItemSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <CreateHeader title="Create Item" />
      <div className=" border-[0.5px] relative h-[calc(100vh-180px)] rounded-md mt-4">
        <Form {...form}>
        <form
          className="grid grid-cols-3 gap-4 p-4"
          onSubmit={handleSubmit(submit)}
        >
          <div>
            <InputFormField
              title={"Item"}
              placeholder={"Item Name"}
              option={true}
              control={control}
              name={"item"}
            />
          </div>
          <div>
            <SelectFormField
              title={"Category"}
              placeholder={"Select Category"}
              optionData={categoryList}
              isLoading={isLoading}
              option={true}
              handleChange={categoryChange}
            />
          </div>
          <div>
            <SelectFormField
              title={"Company"}
              placeholder={"Select Company"}
              optionData={companyList}
              isLoading={isLoading}
              option={true}
              handleChange={companyChange}
            />
          </div>
          <div>
            <InputFormField
              title={"Specs"}
              placeholder={"Specs"}
              option={true}
              control={control}
              name={"specs"}
            />
          </div>
          <div>
            <InputFormField
              title="Color"
              placeholder="Color"
              option={true}
              control={control}
              name={"color"}
            />
          </div>
          <div>
            <InputFormField
              title="Stock"
              placeholder={"0"}
              option={true}
              control={control}
              type={"number"}
              name={"stock"}
            />
          </div>
          <div className="h-[60px]">
            <InputFormField
              title="Price"
              placeholder={"0"}
              option={true}
              control={control}
              type={"number"}
              name={"price"}
            />
          </div>
          <div className="flex absolute justify-center w-[100%] bottom-0 items-center gap-4 h-[100px] mt-4 rounded-md">
            <div className="w-[12%]">
              <ButtonField text="Cancel" color="red" />
            </div>
            <div className="w-[12%]">
              <ButtonField text="Save" color="green" type="submit" />
            </div>
          </div>
        </form>
      </Form>
      </div>
    </div>
  );
};

export default CreateItem;
