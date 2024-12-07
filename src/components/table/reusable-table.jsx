import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ReusableTable({ data, headers, py }) {
  return (
    <Table className="mt-6">
      <TableHeader >
        <TableRow className="border-none">
          {headers?.map((cell, index) => (
            <TableHead
              key={index}
              className={`${
                index + 1 === headers?.length ? "text-center" : "text-left"
              } text-black/30 font-normal`}
            >
              {cell.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item, index) => (
          <TableRow key={index} className="border-none">
            {headers.map((header, index) => (
              <TableCell
                key={index}
                className={`${py ? py : "py-1.5"} ${
                  index + 1 === headers?.length ? "text-center" : "text-left"
                }`}
              >
                {item[header.field]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
