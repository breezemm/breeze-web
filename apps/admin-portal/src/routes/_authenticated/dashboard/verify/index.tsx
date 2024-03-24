import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard/verify/')({
  component: () => <div>Verify page</div>
})
