import { ColumnDef } from "@tanstack/react-table";
import { Event } from "../event";
import { Switch } from "@breeze/ui";




export const eventcolumns: ColumnDef<Event>[] = [
  {
    header: "Service Fee",
    accessorKey: "service_fee",
    cell: ({ row }) => {
      const switchData:string = row.getValue('service_fee');
      const isServiceFree: boolean = switchData.toLowerCase() == 'on';

      return (
        <div className="flex gap-2">
          <p>Free</p> 
          <Switch checked={isServiceFree} />
          <p>Charge</p>
        </div>
      );
    },
  },
  {
    header: "Event Date",
    accessorKey: "event_date",
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
  {
    header: "Event Name",
    accessorKey: "event_name",
    },
    {
        header: "Created On",
        accessorKey: 'created_on',
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
  {
    header: "Revenue",
    accessorKey: "revenue",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: () => {
      return <u>View more</u>;
    },
  },
];
