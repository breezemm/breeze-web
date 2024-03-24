import { ColumnDef } from "@tanstack/react-table"
import { User } from "../user"

export const columns: ColumnDef<User>[] = [
    {
        header: "Username",
        accessorKey: "user_name"
    },
    {
        header: "Gender",
        accessorKey: "gender"
    },
    {
        header: "City",
        accessorKey: "city"
    },
    {
        header: "Interest",
        accessorKey: "interest"
    },
    {
        header: "Created On",
        accessorKey: "created_on",
        cell: ({ row }) => {
            const date_of_created_on = row.getValue("created_on");
            const dateObject = new Date(date_of_created_on as string);
          
            // Getting the month name
            const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObject);
          
            // Combining month day, name and year
            const formatted = ` ${dateObject.getDate()} ${monthName}, ${dateObject.getFullYear()}`;
          
            return <div>{formatted}</div>;
        }
    },
]