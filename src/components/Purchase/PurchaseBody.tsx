
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { Purchase, PurchaseProps } from "@/utils/constant";
import { Edit2, Trash, View } from "lucide-react";
import { Button } from "@/components/ui/button";
import moment from "moment";

const PurchaseBody = ({dummyData}: Purchase) => {
  return (
    <TableBody>
      {
        dummyData.map((data: PurchaseProps) => {
          return (
            <TableRow key={data._id}>
              <TableCell>{data._id}</TableCell>
              <TableCell>{data.item}</TableCell>
              <TableCell className="text-center font-semibold">{data.quantity}</TableCell>
              <TableCell className="text-right font-semibold">{data.purchasePrice} MMK</TableCell>
              <TableCell className={`${data.purchaseDate ? "":"text-center"}`}>{data?.purchaseDate ? moment(data?.purchaseDate).format('LL'):"_"}</TableCell>
              <TableCell className="flex gap-4">
                <Button className="cursor-pointer w-[28px] h-[28px] bg-blue-600 hover:bg-blue-500">
                  <Edit2 color="white" size={12}/>
                </Button>
                <Button className="cursor-pointer w-[28px] h-[28px] bg-[#59008c] hover:bg-[#af4aea]">
                  <View color="white" size={12}/>
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

export default PurchaseBody
