import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import FrontPage from "@/pages/front-page/page";
import FinancesPage from "@/pages/finances-page/page";
import HabitsPage from "@/pages/habits-page/page";
import RootLayout from "@/components/root-layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Navigate to="front" replace />} />
            <Route path="front" element={<FrontPage />} />
            <Route path="finances" element={<FinancesPage />} />
            <Route path="habits" element={<HabitsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
