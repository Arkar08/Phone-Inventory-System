import type { CreateHeaderProps } from "@/utils/constant"

const CreateHeader = ({title}:CreateHeaderProps) => {
  return (
    <div className="border-b-[0.5px] h-[60px]">
        <h3 className="text-3xl font-medium text-[#09c1ef] text-center">{title}</h3>
    </div>
  )
}

export default CreateHeader
