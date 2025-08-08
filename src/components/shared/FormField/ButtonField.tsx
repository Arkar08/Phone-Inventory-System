import { Button } from '@/components/ui/button'
import type { ButtonProps } from '@/utils/constant'

const ButtonField = ({color,text}:ButtonProps) => {
  return (
    
      <Button className='w-[100%] h-[40px] cursor-pointer hover:opacity-50' style={{backgroundColor:color}}>
        {text}
      </Button>
  )
}

export default ButtonField
