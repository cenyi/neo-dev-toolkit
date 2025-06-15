
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import JsonTool from "@/components/tools/JsonTool";
import JsonSchemaValidator from "@/components/tools/JsonSchemaValidator";
import JsonCodeGen from "@/components/tools/JsonCodeGen";
import JsonDiff from "@/components/tools/JsonDiff";
import JsonMock from "@/components/tools/JsonMock";
import UrlEncoderDecoder from "@/components/tools/UrlEncoderDecoder";
import Base64EncoderDecoder from "@/components/tools/Base64EncoderDecoder";
import IpLookup from "@/components/tools/IpLookup";
import JwtDecoder from "@/components/tools/JwtDecoder";
import NotFound from "./pages/NotFound";
import "@/styles/neumorphism.css";
import "@/i18n";
const queryClient = new QueryClient();
const App = () => <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <div className="neu-container py-0">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navigation />
            <main className="pb-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/json" element={<JsonTool />} />
                <Route path="/json-schema-validator" element={<JsonSchemaValidator />} />
                <Route path="/json-codegen" element={<JsonCodeGen />} />
                <Route path="/json-diff" element={<JsonDiff />} />
                <Route path="/json-mock" element={<JsonMock />} />
                {/* Network Tools */}
                <Route path="/network" element={<UrlEncoderDecoder />} />
                <Route path="/base64-encoder" element={<Base64EncoderDecoder />} />
                <Route path="/ip-lookup" element={<IpLookup />} />
                <Route path="/jwt-decoder" element={<JwtDecoder />} />
                {/* TODO: Add other tool routes */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>;
export default App;
