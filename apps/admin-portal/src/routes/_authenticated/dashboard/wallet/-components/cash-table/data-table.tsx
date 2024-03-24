import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table"
   
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@breeze/ui"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    
  }

export default function CashHistryDataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });
    return(
      <div>
        <div className="w-[75%] h-fixed top-263 left-252 gap-16 pb-20 ">
    <Table>
        <TableHeader className="justify-between text-center">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="justify-between border-b-2 border-gray-300" key={header.id}>
                    <div className="pr-3 pl-3 font-bold leading-6 text-xl tracking-tighter  pt-4 pb-5 text-gray-800 text-center ">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        </div>
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader> 
        <TableBody className="justify-between pt-6 text-center">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
              className={`border-b-0 ${index % 2 === 0 ? 'bg-white'  :  'bg-gray-300'}`}
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="justify-between" key={cell.id}>
                    <div className="text-center font-figtree-light text-base leading-24 tracking-tighter pt-2 pb-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
    </Table>

        </div>
        </div>
    )
}
