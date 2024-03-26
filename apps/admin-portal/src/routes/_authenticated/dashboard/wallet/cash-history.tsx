import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@breeze/ui";
import { Link, createFileRoute } from "@tanstack/react-router";
import WalletIcon from "~/assets/icons/WalletIcon";
import CashHistryDataTable from "./-components/cash-table/data-table";
import { columns } from "./-components/cash-table/columns";
import { cash_history_data } from "./-components/cash-history-data";

export const Route = createFileRoute(
  "/_authenticated/dashboard/wallet/cash-history",
)({
  component: CashHistory,
});

function CashHistory() {
  return (
    <>
      <div>
        {/* Navi bar for Wallet > cash history */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="cursor-pointer">
                <Link to="/dashboard/wallet">
                  <div className="flex gap-2 items-center">
                    <WalletIcon className="w-5 h-5" /> Wallet
                  </div>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cash History</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <h1>Hi this is Cash History!!</h1>
        <CashHistryDataTable columns={columns} data={cash_history_data} />
      </div>
    </>
  );
}
