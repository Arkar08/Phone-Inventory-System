import { Edit2, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { Category, CategoryProps } from "@/utils/constant";
import moment from "moment";

const CategoryBody = ({dummyData}: Category) => {
  return (
    <TableBody>
      {
        dummyData.map((data: CategoryProps) => {
          return (
            <TableRow key={data._id}>
              <TableCell>{data._id}</TableCell>
              <TableCell>{data.name}</TableCell>
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
  );
};

export default CategoryBody;
