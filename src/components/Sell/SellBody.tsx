
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type {  Sale, saleProps } from "@/utils/constant";
import { Edit2, Trash, View } from "lucide-react";
import { Button } from "@/components/ui/button";

const SellBody = (dummyData: Sale) => {
  return (
    <TableBody>
      {
        dummyData.dummyData.map((data: saleProps) => {
          return (
            <TableRow key={data.id}>
              <TableCell className="text-center">{data.id}</TableCell>
              <TableCell className="text-center">{data.items.length}</TableCell>
              <TableCell className="text-center">{data.quantity}</TableCell>
              <TableCell className="text-center">${data.price}</TableCell>
              <TableCell className="text-center">{data.date}</TableCell>
              <TableCell className="flex gap-4 justify-center items-center">
                <Button className="cursor-pointer w-[35px] h-[35px] bg-blue-600 hover:bg-blue-500">
                  <Edit2 color="white" />
                </Button>
                <Button className="cursor-pointer w-[35px] h-[35px] bg-[#59008c] hover:bg-[#af4aea]">
                  <View color="white" />
                </Button>
                <Button className="cursor-pointer w-[35px] h-[35px] bg-red-600 hover:bg-red-500">
                  <Trash color="white" />
                </Button>
              </TableCell>
            </TableRow>
          );
        })
      }
    </TableBody>
  )
}

export default SellBody
