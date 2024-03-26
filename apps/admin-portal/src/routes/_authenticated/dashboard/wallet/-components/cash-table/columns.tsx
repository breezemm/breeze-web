import { ColumnDef } from "@tanstack/react-table";

export type Cash_History_Data = {
  id: number;
  date: string;
  username: string;
  cash_flow: "Cash-in" | "Cash-out";
  amount: number;
};

export const columns: ColumnDef<Cash_History_Data>[] = [
  {
    accessorKey: "date",
    header: "Date",
    accessorFn: (row) => {
      const originalDate = row.date;
      return new Date(originalDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "cash_flow",
    header: "Cash Flow",
  },
  {
    accessorKey: "amount",
    accessorFn: (row) => row.amount.toLocaleString(),
    header: "Amount",
  },
];
