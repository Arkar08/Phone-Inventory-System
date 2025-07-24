import { Suspense } from "react";
import View from "./routes/View"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Loading from "./components/shared/Loading/Loading";
import {Toaster} from 'sonner'
function App() {

  const query = new QueryClient()

  return (
    <QueryClientProvider client={query}>
      <Suspense fallback={<Loading />}>
        <View/>
        <Toaster />
      </Suspense>
    </QueryClientProvider>
  )
}

export default App;
