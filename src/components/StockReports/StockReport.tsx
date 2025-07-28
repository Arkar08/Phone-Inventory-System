import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type {  stock, stockReportProps } from "@/utils/constant";
import { View } from "lucide-react";
import { Button } from "@/components/ui/button";

const StockReport = ({dummyData}: stock) => {
  return (
     <TableBody>
      {
        dummyData.map((data: stockReportProps) => {
          return (
            <TableRow key={data.id}>
              <TableCell className="text-center">{data.itemName}</TableCell>
              <TableCell className="text-center">{data.category}</TableCell>
              <TableCell className="text-center">{data.stock}</TableCell>
              <TableCell className="text-center">{data.sold}</TableCell>
              <TableCell className="text-center">{data.purchase}</TableCell>
              <TableCell className="text-center">{data.currentStock}</TableCell>
              <TableCell className="flex gap-4 justify-center items-center">
                <Button className="cursor-pointer w-[35px] h-[35px] bg-blue-600 hover:bg-blue-500">
                  <View color="white" />
                </Button>
              </TableCell>
            </TableRow>
          );
        })
      }
    </TableBody>
  )
}

export default StockReport
