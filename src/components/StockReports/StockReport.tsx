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
            <TableRow key={data._id}>
              <TableCell className="flex items-center gap-4">
                  {
                    data?.color && (
                       <div className="w-7 h-7 rounded-full" style={{ backgroundColor: data?.color }}></div>
                    )
                  }
                  <div>
                    <p className="capitalize">{data.itemName}</p>
                    <p>{data?.option}</p>
                  </div>
              </TableCell>
              <TableCell>{data.category}</TableCell>
              <TableCell className="font-semibold">{data.stock}</TableCell>
              <TableCell className="font-semibold">{data.sold}</TableCell>
              <TableCell className="font-semibold">{data.purchased}</TableCell>
              <TableCell className="font-semibold">{data.currentStock}</TableCell>
              <TableCell>
                <Button className="cursor-pointer w-[28px] h-[28px] bg-blue-600 hover:bg-blue-500">
                  <View color="white" size={12}/>
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
