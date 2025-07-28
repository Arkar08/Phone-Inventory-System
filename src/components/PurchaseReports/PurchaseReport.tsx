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
            <TableRow key={data.id}>
              <TableCell className="text-center">{data.itemName}</TableCell>
              <TableCell className="text-center">{data.category}</TableCell>
              <TableCell className="text-center">{data.quantityPurchase}</TableCell>
              <TableCell className="text-center">${data.purchasePrice}</TableCell>
              <TableCell className="text-center">${data.totalCost}</TableCell>
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

export default PurchaseReportBody;
