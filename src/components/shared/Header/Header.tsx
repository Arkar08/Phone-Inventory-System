import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { HeaderProps } from "@/utils/constant"
import { Filter, Plus } from "lucide-react"


const Header = ({title,placeholder,filter,report}:HeaderProps) => {
  return (
    <div className="border-b-[0.5px] h-[60px] flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-[var(--sidebar)]">{title}</h3>
        <Input placeholder={placeholder} className="w-[400px]"/>
        <div className="flex gap-5">
            {
                filter && (
                    <Button className="cursor-pointer bg-[var(--sidebar)] hover:bg-[var(--sidebar-accent)]">
                        <Filter />
                    </Button>
                )
            }
            {
                !report && (
                    <Button className="cursor-pointer bg-[var(--sidebar)] hover:bg-[var(--sidebar-accent)]">
                        <Plus />
                    </Button>
                )
            }
        </div>
    </div>
  )
}

export default Header
