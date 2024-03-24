import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createRouter, ErrorComponent, RouterProvider} from "@tanstack/react-router";
import {routeTree} from "~/routeTree.gen.ts";
import {Spinner} from "~/components/Spinner.tsx";
import {useAuth} from "~/hooks/useAuth.ts";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
    },
  },
});

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: undefined,
  },
  defaultErrorComponent: ({error}) => <ErrorComponent error={error}/>,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});


declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const WithAuthApp = () => {

  const {isLoading, user} = useAuth()

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <RouterProvider
      router={router}
      context={{
        auth: user,
      }}
    />
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WithAuthApp/>
    </QueryClientProvider>
  )

};

export default App;
