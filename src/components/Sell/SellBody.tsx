
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type {  Sale, saleProps } from "@/utils/constant";
import { Edit2, Trash, View } from "lucide-react";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const SellBody = ({dummyData}: Sale) => {

  const navigate = useNavigate();

  const updateSell = (id:string) => {
    navigate(`${id}`)
  }


  const viewSell = (id:string) => {
    navigate(`view/${id}`)
  }

  return (
    <TableBody>
      {
        dummyData.map((data: saleProps) => {
          return (
            <TableRow key={data._id}>
              <TableCell>{data._id}</TableCell>
              <TableCell>{data.item}</TableCell>
              <TableCell className="text-center font-semibold">{data.quantity}</TableCell>
              <TableCell className="text-right font-semibold">{data.sellPrice} MMK</TableCell>
              <TableCell className={`${data.sellDate ? "":"text-center"}`}>{data?.sellDate ? moment(data?.sellDate).format('LL'):"_"}</TableCell>
              <TableCell className="flex gap-4">
                <Button className="cursor-pointer w-[28px] h-[28px] bg-blue-600 hover:bg-blue-500" onClick={()=>updateSell(data._id)}>
                  <Edit2 color="white" size={12}/>
                </Button>
                <Button className="cursor-pointer w-[28px] h-[28px] bg-[#59008c] hover:bg-[#af4aea]" onClick={()=>viewSell(data._id)}>
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

export default SellBody
