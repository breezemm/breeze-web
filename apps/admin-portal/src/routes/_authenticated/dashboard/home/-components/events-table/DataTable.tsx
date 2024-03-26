import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@breeze/ui/table";
import { Button, DatePickerDemo, Switch } from "@breeze/ui";
import DollarSign from "~/assets/icons/DollarSign";
import React from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function EventDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setConlumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onColumnFiltersChange: setConlumnFilters,
    state: {
      columnFilters,
    },
  });

  return (
    <div>
      {/* Table */}
      <div className="flex justify-between w-[100%]">
        {/* For service fees with Switch button */}
        <div className=" gap-2 h-24 py-2 ml-4">
          <div className="flex font-bold text-lg gap-2">
            <div className="my-1">
              <DollarSign />
            </div>
            <p>Service Fee</p>
          </div>

          <div className="flex gap-2 my-6">
            <p>Free</p>
            <Switch
              value={table.getColumn("service_fee")?.getFilterValue() as string}
              onClick={(e) => {
                const value = e.target.value;
                let filterValue = value.toLowerCase() === "on";

                return filterValue
                  ? table.getColumn("service_fee")?.setFilterValue(value)
                  : table.getColumn("service_fee")?.setFilterValue([]);
              }}
            />
            <p>Charge</p>
          </div>
        </div>

        {/* Date picker for events table */}
        <div>
          <div className="flex mt-14 gap-2">
            <p className="mt-1">View event from</p>
            <DatePickerDemo />

            <p className="mt-1">to</p>
            <DatePickerDemo />
          </div>
        </div>
      </div>
      <div className="rounded-md w-[100%] justify-between text-center">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="border-b-2 border-b-gray-300"
                    >
                      <div className="font-bold text-black text-center text-lg my-3">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="border-b-1 border-b-white"
                    >
                      <div className="my-4">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination*/}
      <div className="flex items-center justify-start space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default EventDataTable;
