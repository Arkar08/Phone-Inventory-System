
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { ItemProps, Items } from "@/utils/constant";

const ItemBody = ({dummyData}:Items) => {
  return (
     <TableBody>
      {
        dummyData.map((data: ItemProps) => {
          return (
            <TableRow key={data.id}>
                <TableCell className="text-center">{data.id}</TableCell>
                <TableCell className="text-center">{data.name}</TableCell>
                <TableCell className="text-center">{data.categoryName}</TableCell>
                <TableCell className="text-center">{data.companyName}</TableCell>
                <TableCell className="text-center font-semibold">{data.price}</TableCell>
                <TableCell className="text-center">{data.specs ? data.specs : "-"}</TableCell>
                <TableCell className="text-center flex justify-center items-center gap-2">
                    <div className="w-[20px] h-[20px] border-[0.5px] rounded-full" style={{backgroundColor:data.color}}></div>
                    <p className="capitalize">{data.color}</p>
                </TableCell>
                <TableCell className="text-center font-semibold">{data.stock}</TableCell>
            </TableRow>
          );
        })
      }
    </TableBody>
  )
}

export default ItemBody
