import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type {  purchaseReport, purchaseReportProps} from "@/utils/constant";
import { View } from "lucide-react";
import { Button } from "@/components/ui/button";

const PurchaseReportBody = ({dummyData}: purchaseReport) => {
  return (
    <TableBody>
      {
        dummyData.map((data: purchaseReportProps) => {
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
              <TableCell className="font-semibold">{data.purchaseQuantity}</TableCell>
              <TableCell className="font-semibold">{data.purchasePrice} MMK</TableCell>
              <TableCell className="font-semibold">{data.totalCost} MMK</TableCell>
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

export default PurchaseReportBody;
