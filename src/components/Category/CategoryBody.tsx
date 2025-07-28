import { Edit2, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CategoryBody = (dummyData: any) => {
  return (
    <TableBody>
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dummyData.dummyData.map((data: any) => {
          return (
            <TableRow key={data.id}>
              <TableCell className="text-center">{data.id}</TableCell>
              <TableCell className="text-center">{data.name}</TableCell>
              <TableCell className="flex gap-4 justify-center items-center">
                <Button className="cursor-pointer w-[35px] h-[35px] bg-blue-600 hover:bg-blue-500">
                  <Edit2 color="white" />
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
  );
};

export default CategoryBody;
