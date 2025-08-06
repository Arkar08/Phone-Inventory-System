import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type {  stock, stockReportProps } from "@/utils/constant";

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
            </TableRow>
          );
        })
      }
    </TableBody>
  )
}

export default StockReport
