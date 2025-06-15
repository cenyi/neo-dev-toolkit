
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
import CaseConverter from "@/components/tools/CaseConverter";
import WordCounter from "@/components/tools/WordCounter";
import TextReverser from "@/components/tools/TextReverser";
import WhitespaceRemover from "@/components/tools/WhitespaceRemover";
import LoremIpsumGenerator from "@/components/tools/LoremIpsumGenerator";
import EncryptionTool from "@/components/tools/EncryptionTool";
import MarkdownEditor from "@/components/tools/MarkdownEditor";
import MermaidEditor from "@/components/tools/MermaidEditor";
import TimestampConverter from "@/components/tools/TimestampConverter";
import TimezoneConverter from "@/components/tools/TimezoneConverter";
import DateCalculator from "@/components/tools/DateCalculator";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import PageWrapper from "@/components/PageWrapper";
import "@/styles/neumorphism.css";
import "@/i18n";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Toaster />
              <Sonner />
              <Navigation />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<PageWrapper title="DevTools Hub"><HomePage /></PageWrapper>} />
                  <Route path="/json" element={<PageWrapper title="JSON Formatter & Validator"><JsonTool /></PageWrapper>} />
                  <Route path="/json-schema-validator" element={<PageWrapper title="JSON Schema Validator"><JsonSchemaValidator /></PageWrapper>} />
                  <Route path="/json-codegen" element={<PageWrapper title="Generate Code Types from JSON"><JsonCodeGen /></PageWrapper>} />
                  <Route path="/json-diff" element={<PageWrapper title="JSON Diff Tool"><JsonDiff /></PageWrapper>} />
                  <Route path="/json-mock" element={<PageWrapper title="JSON Mock Data Generator"><JsonMock /></PageWrapper>} />
                  {/* Network Tools */}
                  <Route path="/network" element={<PageWrapper title="URL Encoder / Decoder"><UrlEncoderDecoder /></PageWrapper>} />
                  <Route path="/base64-encoder" element={<PageWrapper title="Base64 Encoder / Decoder"><Base64EncoderDecoder /></PageWrapper>} />
                  <Route path="/ip-lookup" element={<PageWrapper title="IP Lookup"><IpLookup /></PageWrapper>} />
                  <Route path="/jwt-decoder" element={<PageWrapper title="JWT Decoder"><JwtDecoder /></PageWrapper>} />
                  {/* Text Tools */}
                  <Route path="/text" element={<PageWrapper title="Case Converter"><CaseConverter /></PageWrapper>} />
                  <Route path="/case-converter" element={<PageWrapper title="Case Converter"><CaseConverter /></PageWrapper>} />
                  <Route path="/word-counter" element={<PageWrapper title="Word & Character Counter"><WordCounter /></PageWrapper>} />
                  <Route path="/text-reverser" element={<PageWrapper title="Text Reverser"><TextReverser /></PageWrapper>} />
                  <Route path="/whitespace-remover" element={<PageWrapper title="Whitespace Remover"><WhitespaceRemover /></PageWrapper>} />
                  <Route path="/lorem-ipsum-generator" element={<PageWrapper title="Lorem Ipsum Generator"><LoremIpsumGenerator /></PageWrapper>} />
                  <Route path="/markdown" element={<PageWrapper title="Markdown Editor"><MarkdownEditor /></PageWrapper>} />
                  <Route path="/mermaid" element={<PageWrapper title="Mermaid Editor"><MermaidEditor /></PageWrapper>} />

                  {/* Time Tools */}
                  <Route path="/timestamp-converter" element={<PageWrapper title="Timestamp Converter"><TimestampConverter /></PageWrapper>} />
                  <Route path="/timezone-converter" element={<PageWrapper title="Timezone Converter"><TimezoneConverter /></PageWrapper>} />
                  <Route path="/date-calculator" element={<PageWrapper title="Date Calculator"><DateCalculator /></PageWrapper>} />

                  {/* Encryption Tools */}
                  <Route path="/encryption" element={<PageWrapper title="Encryption Tool"><EncryptionTool /></PageWrapper>} />

                  {/* Footer Pages */}
                  <Route path="/privacy" element={<PageWrapper title="Privacy Policy"><PrivacyPolicy /></PageWrapper>} />
                  <Route path="/terms" element={<PageWrapper title="Terms of Service"><TermsOfService /></PageWrapper>} />
                  <Route path="/about" element={<PageWrapper title="About Us"><AboutUs /></PageWrapper>} />

                  <Route path="*" element={<PageWrapper title="404 Not Found"><NotFound /></PageWrapper>} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default App;
