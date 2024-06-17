import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import FrontPage from "@/pages/front-page/page";
import FinancesPage from "@/pages/finances-page/page";
import HabitsPage from "@/pages/habits-page/page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="finances" element={<FinancesPage />} />
          <Route path="habits" element={<HabitsPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
