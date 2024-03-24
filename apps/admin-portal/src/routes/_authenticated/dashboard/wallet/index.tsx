
import {Card, CardContent, CardHeader, CardTitle,} from "@breeze/ui"
import {  createFileRoute, useNavigate } from '@tanstack/react-router'
import DollarSignIcon from "~/assets/icons/DollarSignIcon"
import HistoryIcon from "~/assets/icons/HistoryIcon"

export const Route = createFileRoute('/_authenticated/dashboard/wallet/')({
  component:  Wallet
})

function Wallet () {
  const navigate = useNavigate()

  return <div>
  <div className='flex gap-8'>
   <Card className="w-52 bg-zinc-800 text-zinc-50" onClick={() => navigate({
          to: '/dashboard/wallet/cash-in-cash-out'
        })}>
      <CardHeader>  
        <CardTitle className="text-[18px]">Cash In/Out</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-end gap-2 text-normal">          
        <DollarSignIcon />
      </CardContent>
    </Card>

   <Card className="w-52 bg-zinc-800 text-zinc-50" onClick={() => navigate({
          to: '/dashboard/wallet/cash-history'
        })}>
      <CardHeader>  
        <CardTitle className="text-[18px]">History</CardTitle>
        </CardHeader>
      <CardContent className="flex items-center justify-end gap-2 text-normal"> 
        <HistoryIcon />
      </CardContent>
    </Card>
  </div>
</div>
}