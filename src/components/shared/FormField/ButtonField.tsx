import { Button } from '@/components/ui/button'
import type { ButtonProps } from '@/utils/constant'

const ButtonField = ({color,text,type}:ButtonProps) => {
  return (
    
      <Button className='w-[100%] h-[40px] cursor-pointer hover:opacity-50' type={type} style={{backgroundColor:color}}>
        {text}
      </Button>
  )
}

export default ButtonField
