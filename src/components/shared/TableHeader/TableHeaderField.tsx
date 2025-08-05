import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableHeaderField = ({ headers }: any) => {
  return (
    <TableHeader>
      <TableRow>
        {headers.map((header: string) => {
          return (
            <TableHead key={header}>
              {header}
            </TableHead>
          );
        })}
      </TableRow>
    </TableHeader>
  );
};

export default TableHeaderField;
