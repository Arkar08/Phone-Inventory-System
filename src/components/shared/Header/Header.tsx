import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { HeaderProps } from "@/utils/constant"
import { Filter, Plus } from "lucide-react"


const Header = ({title,placeholder,filter,report,plusClick}:HeaderProps) => {
  return (
    <div className="border-b-[0.5px] h-[60px] flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-[#09c1ef]">{title}</h3>
        {
            !report && (
                <Input placeholder={placeholder} className="w-[400px]"/>
            )
        }
        <div className="flex gap-5">
            {
                !report && (
                    <Button className="cursor-pointer bg-[#09c1ef] hover:bg-[var(--sidebar-accent)]" onClick={plusClick}>
                        <Plus />
                    </Button>
                )
            }
            {
                filter && (
                    <Button className="cursor-pointer bg-[#09c1ef] hover:bg-[var(--sidebar-accent)]">
                        <Filter />
                    </Button>
                )
            }
        </div>
    </div>
  )
}

export default Header
