import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { InputProps } from '@/utils/constant'

const InputFormField = ({title,placeholder,option,type}:InputProps) => {
  return (
    <div className='h-[100%]'>
        <Label className='pb-3 font-normal text-[#09c1ef]'>
            <p style={{fontSize:16}}>{title}</p>
            {option && (<span className='text-red-600'>*</span>)}
        </Label>
        <Input className='border-[0.5px] rounded-md focus-visible:border-none h-[40px] placeholder:opacity-75' type={type} placeholder={placeholder}/>
    </div>
  )
}

export default InputFormField
