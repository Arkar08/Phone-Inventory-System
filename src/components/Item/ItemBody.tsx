
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { ItemProps, Items } from "@/utils/constant";
import { Edit2, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import moment from "moment";

const ItemBody = ({dummyData}:Items) => {
  return (
     <TableBody>
      {
        dummyData.map((data: ItemProps) => {
          return (
            <TableRow key={data._id} className="h-[60px]">
                <TableCell>{data._id}</TableCell>
                <TableCell>{data.itemName}</TableCell>
                <TableCell>{data.category}</TableCell>
                <TableCell>{data.company}</TableCell>
                <TableCell>{data.option ? data.option : "-"}</TableCell>
                <TableCell>
                    <div className="w-7 h-7 rounded-full" style={{backgroundColor:data.color}}></div>
                </TableCell>
                <TableCell className="font-semibold text-center">{data.stock}</TableCell>
                <TableCell className="font-semibold text-right">{data.price} MMK</TableCell>
                <TableCell>{moment(data.createdAt).format('LLL')}</TableCell>
                <TableCell className="flex gap-4">
                  <Button className="cursor-pointer w-[28px] h-[28px] bg-blue-600 hover:bg-blue-500">
                    <Edit2 color="white" size={12}/>
                  </Button>
                  <Button className="cursor-pointer w-[28px] h-[28px] bg-red-600 hover:bg-red-500">
                    <Trash color="white" size={12}/>
                  </Button>
              </TableCell>
            </TableRow>
          );
        })
      }
    </TableBody>
  )
}

export default ItemBody
