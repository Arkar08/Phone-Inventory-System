import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SelectProps } from "@/utils/constant";

const SelectFormField = ({title,placeholder,optionData,isLoading,option,handleChange}:SelectProps) => {
  return (
    <div className="h-[100%]">
      <Label className="pb-3 font-normal text-[#09c1ef]">
        <p style={{fontSize:16}}>{title}</p>
        {option && (<span className='text-red-600'>*</span>)}
      </Label>
      <Select disabled={isLoading} onValueChange={handleChange}>
        <SelectTrigger className="w-[100%] cursor-pointer h-[40px] placeholder:opacity-75">
          <SelectValue placeholder={placeholder}/>
        </SelectTrigger>
        <SelectContent>
            {
                optionData.map((option)=>{
                    return (
                        <SelectItem value={option._id} key={option._id}>{option.name}</SelectItem>
                    )
                })
            }
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectFormField;
