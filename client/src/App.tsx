import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import RealtyPartners from "@/pages/realty-partners";
import Renovation from "@/pages/renovation";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/realty-partners" component={RealtyPartners} />
      <Route path="/realty">
        <Redirect to="/realty-partners" />
      </Route>
      <Route path="/renovation" component={Renovation} />
      <Route path="/real-estate">
        <Redirect to="/renovation" />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <div className="flex min-h-screen flex-1 flex-col">
            <AppRoutes />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
