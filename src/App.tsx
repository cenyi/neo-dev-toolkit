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
import TextDiff from "@/components/tools/TextDiff";
import EncryptionTool from "@/components/tools/EncryptionTool";
import RegexTool from "@/components/tools/RegexTool";
import MarkdownEditor from "@/components/tools/MarkdownEditor";
import MermaidEditor from "@/components/tools/MermaidEditor";
import TimestampConverter from "@/components/tools/TimestampConverter";
import TimezoneConverter from "@/components/tools/TimezoneConverter";
import DateCalculator from "@/components/tools/DateCalculator";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import JsonToolsPage from "./pages/JsonToolsPage";
import NetworkToolsPage from "./pages/NetworkToolsPage";
import TextToolsPage from "./pages/TextToolsPage";
import EditorToolsPage from "./pages/EditorToolsPage";
import TimeToolsPage from "./pages/TimeToolsPage";
import PageWrapper from "@/components/PageWrapper";

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
                  <Route path="/" element={
                    <PageWrapper 
                      title="DevTools Hub" 
                      description="Free online developer tools collection: JSON formatter, text processing, encryption utilities. No signup required, privacy-focused with modern design."
                      keywords="developer tools, JSON formatter, text converter, encryption, hash generator, URL encoder, Base64, timestamp converter, free dev tools"
                    >
                      <HomePage />
                    </PageWrapper>
                  } />
                  <Route path="/json-tool" element={
                    <PageWrapper 
                      title="JSON Formatter & Validator" 
                      description="Free online JSON formatter, validator and beautifier. Format, validate, minify JSON data with syntax highlighting. Extract values with JSONPath."
                      keywords="JSON formatter, JSON validator, JSON beautifier, JSON minifier, JSONPath extractor, validate JSON online"
                    >
                      <JsonTool />
                    </PageWrapper>
                  } />
                  <Route path="/json" element={
                    <PageWrapper 
                      title="JSON Tools - Professional JSON Utilities Collection" 
                      description="Complete collection of JSON tools: formatter, validator, schema validator, code generator, diff tool, and mock data generator. Built with Lovable AI."
                      keywords="JSON tools, JSON formatter, JSON validator, JSON schema, JSON diff, JSON mock data, lovable"
                    >
                      <JsonToolsPage />
                    </PageWrapper>
                  } />
                  <Route path="/json-schema-validator" element={
                    <PageWrapper 
                      title="JSON Schema Validator"
                      description="Validate JSON data against JSON Schema. Free online JSON Schema validation tool with detailed error reporting."
                      keywords="JSON schema validator, JSON validation, schema validation, JSON schema online"
                    >
                      <JsonSchemaValidator />
                    </PageWrapper>
                  } />
                  <Route path="/json-codegen" element={
                    <PageWrapper 
                      title="Generate Code Types from JSON"
                      description="Generate TypeScript, Python, Java, C# code types from JSON data. Free online code generator for developers."
                      keywords="JSON to code, code generation, TypeScript generator, Python classes from JSON, Java POJO generator"
                    >
                      <JsonCodeGen />
                    </PageWrapper>
                  } />
                  <Route path="/json-diff" element={
                    <PageWrapper 
                      title="JSON Diff Tool"
                      description="Compare and find differences between two JSON objects. Visual JSON diff tool with syntax highlighting."
                      keywords="JSON diff, JSON compare, JSON difference, compare JSON objects, JSON comparison tool"
                    >
                      <JsonDiff />
                    </PageWrapper>
                  } />
                  <Route path="/json-mock" element={
                    <PageWrapper 
                      title="JSON Mock Data Generator"
                      description="Generate realistic mock JSON data for testing. Create fake data with customizable schemas and realistic values."
                      keywords="JSON mock data, fake JSON generator, test data generator, mock API data, JSON faker"
                    >
                      <JsonMock />
                    </PageWrapper>
                  } />
                  {/* Network Tools */}
                  <Route path="/url-encoder" element={
                    <PageWrapper 
                      title="URL Encoder / Decoder"
                      description="Free online URL encoder and decoder tool. Encode URLs for safe transmission or decode percent-encoded URLs."
                      keywords="URL encoder, URL decoder, percent encoding, URL escape, URI encoding, web safe encoding"
                    >
                      <UrlEncoderDecoder />
                    </PageWrapper>
                  } />
                  <Route path="/network" element={
                    <PageWrapper 
                      title="Network Tools - Encoding & Security Utilities Collection" 
                      description="Essential network and encoding tools: URL encoder, Base64 converter, IP lookup, JWT decoder. Secure, privacy-focused utilities built with Lovable AI."
                      keywords="network tools, URL encoder, Base64 encoder, IP lookup, JWT decoder, lovable"
                    >
                      <NetworkToolsPage />
                    </PageWrapper>
                  } />
                  <Route path="/base64-encoder" element={
                    <PageWrapper 
                      title="Base64 Encoder / Decoder"
                      description="Free online Base64 encoder and decoder. Encode text to Base64 or decode Base64 strings back to text."
                      keywords="Base64 encoder, Base64 decoder, Base64 converter, encode Base64, decode Base64 online"
                    >
                      <Base64EncoderDecoder />
                    </PageWrapper>
                  } />
                  <Route path="/ip-lookup" element={
                    <PageWrapper 
                      title="IP Lookup"
                      description="Free IP address lookup tool. Get geolocation, ISP information, and network details for any IP address."
                      keywords="IP lookup, IP geolocation, IP address info, what is my IP, IP location finder"
                    >
                      <IpLookup />
                    </PageWrapper>
                  } />
                  <Route path="/jwt-decoder" element={
                    <PageWrapper 
                      title="JWT Decoder"
                      description="Free JWT token decoder and validator. Decode JSON Web Tokens and view header, payload, and signature information."
                      keywords="JWT decoder, JSON Web Token decoder, JWT validator, decode JWT online, JWT parser"
                    >
                      <JwtDecoder />
                    </PageWrapper>
                  } />
                  {/* Text Tools */}
                  <Route path="/text" element={
                    <PageWrapper 
                      title="Text Tools - Comprehensive Text Processing Suite"
                      description="Complete collection of text processing tools: case converter, word counter, text reverser, whitespace remover, Lorem Ipsum generator, and text diff. Built with Lovable AI."
                      keywords="text tools, case converter, word counter, text reverser, Lorem Ipsum generator, text diff, lovable"
                    >
                      <TextToolsPage />
                    </PageWrapper>
                  } />
                  <Route path="/case-converter" element={
                    <PageWrapper 
                      title="Case Converter"
                      description="Free online text case converter. Convert text to uppercase, lowercase, title case, sentence case instantly."
                      keywords="case converter, text converter, uppercase, lowercase, title case, sentence case, text transformation"
                    >
                      <CaseConverter />
                    </PageWrapper>
                  } />
                  <Route path="/word-counter" element={
                    <PageWrapper 
                      title="Word & Character Counter"
                      description="Free online word and character counter. Count words, characters, sentences, and paragraphs in your text."
                      keywords="word counter, character counter, text statistics, count words online, paragraph counter, sentence counter"
                    >
                      <WordCounter />
                    </PageWrapper>
                  } />
                  <Route path="/text-reverser" element={
                    <PageWrapper 
                      title="Text Reverser"
                      description="Free online text reverser tool. Reverse the order of characters in your text instantly."
                      keywords="text reverser, reverse text, backwards text, flip text, reverse string online"
                    >
                      <TextReverser />
                    </PageWrapper>
                  } />
                  <Route path="/whitespace-remover" element={
                    <PageWrapper 
                      title="Whitespace Remover"
                      description="Free online whitespace remover tool. Remove extra spaces, trim whitespace, and clean up text formatting."
                      keywords="whitespace remover, remove spaces, trim text, clean text, remove extra spaces, text cleaner"
                    >
                      <WhitespaceRemover />
                    </PageWrapper>
                  } />
                  <Route path="/lorem-ipsum-generator" element={
                    <PageWrapper 
                      title="Lorem Ipsum Generator"
                      description="Free Lorem Ipsum placeholder text generator. Generate dummy text for design and development projects."
                      keywords="Lorem Ipsum generator, placeholder text, dummy text, filler text, design text, mock content"
                    >
                      <LoremIpsumGenerator />
                    </PageWrapper>
                  } />
                  <Route path="/text-diff" element={
                    <PageWrapper 
                      title="Text Comparison Tool"
                      description="Free text comparison tool to compare and find differences between two text documents. Visual diff highlighting shows additions, deletions, and modifications line by line."
                      keywords="text diff, text compare, text comparison, text difference, compare text, text merger, document comparison"
                    >
                      <TextDiff />
                    </PageWrapper>
                  } />

                  {/* Regex Tool */}
                  <Route path="/regex" element={
                    <PageWrapper 
                      title="Regular Expression Tool"
                      description="Free online regex tester and generator. Test regular expressions, find matches, and replace text with powerful regex engine."
                      keywords="regex tester, regular expression, regex generator, pattern matching, regex validator, regex online"
                    >
                      <RegexTool />
                    </PageWrapper>
                  } />

                  {/* Editor Tools */}
                  <Route path="/editor" element={
                    <PageWrapper 
                      title="Code Editors - Markdown & Diagram Tools Collection"
                      description="Professional online editors for Markdown and Mermaid diagrams. Create documentation and diagrams with live preview. Built with Lovable AI."
                      keywords="code editor, Markdown editor, Mermaid editor, diagram creator, documentation tools, lovable"
                    >
                      <EditorToolsPage />
                    </PageWrapper>
                  } />
                  <Route path="/markdown" element={
                    <PageWrapper 
                      title="Markdown Editor"
                      description="Free online Markdown editor with live preview. Write and preview Markdown with syntax highlighting and export options."
                      keywords="Markdown editor, Markdown preview, online Markdown, Markdown converter, write Markdown online"
                    >
                      <MarkdownEditor />
                    </PageWrapper>
                  } />
                  <Route path="/mermaid" element={
                    <PageWrapper 
                      title="Mermaid Editor"
                      description="Free online Mermaid diagram editor. Create flowcharts, sequence diagrams, and other diagrams with Mermaid syntax."
                      keywords="Mermaid editor, flowchart creator, diagram maker, sequence diagram, Mermaid online, chart generator"
                    >
                      <MermaidEditor />
                    </PageWrapper>
                  } />

                  {/* Time Tools */}
                  <Route path="/time" element={
                    <PageWrapper 
                      title="Date & Time Tools - Timestamp & Timezone Utilities"
                      description="Essential date and time tools: timestamp converter, timezone converter, date calculator. Handle time calculations with precision. Built with Lovable AI."
                      keywords="time tools, timestamp converter, timezone converter, date calculator, lovable"
                    >
                      <TimeToolsPage />
                    </PageWrapper>
                  } />
                  <Route path="/timestamp-converter" element={
                    <PageWrapper 
                      title="Timestamp Converter"
                      description="Free Unix timestamp converter. Convert between Unix timestamps and human-readable dates and times."
                      keywords="timestamp converter, Unix timestamp, epoch converter, timestamp to date, date to timestamp"
                    >
                      <TimestampConverter />
                    </PageWrapper>
                  } />
                  <Route path="/timezone-converter" element={
                    <PageWrapper 
                      title="Timezone Converter"
                      description="Free timezone converter tool. Convert date and time between different timezones worldwide with DST support."
                      keywords="timezone converter, time zone converter, convert time zones, world clock, timezone calculator"
                    >
                      <TimezoneConverter />
                    </PageWrapper>
                  } />
                  <Route path="/date-calculator" element={
                    <PageWrapper 
                      title="Date Calculator"
                      description="Free online date calculator. Add or subtract days, months, and years from any date. Calculate date differences."
                      keywords="date calculator, date math, add days to date, subtract days from date, date difference calculator"
                    >
                      <DateCalculator />
                    </PageWrapper>
                  } />

                  {/* Encryption Tools */}
                  <Route path="/encryption" element={
                    <PageWrapper 
                      title="Encryption Tool"
                      description="Free online encryption and hash generator tool. Generate MD5, SHA1, SHA256 hashes and encrypt/decrypt text."
                      keywords="encryption tool, hash generator, MD5 generator, SHA256 generator, encrypt text online, decrypt text"
                    >
                      <EncryptionTool />
                    </PageWrapper>
                  } />

                  {/* Footer Pages */}
                  <Route path="/privacy" element={
                    <PageWrapper 
                      title="Privacy Policy"
                      description="DevTools Hub privacy policy. Learn how we protect your data and privacy while using our free developer tools."
                      keywords="privacy policy, data protection, user privacy, DevTools Hub privacy"
                    >
                      <PrivacyPolicy />
                    </PageWrapper>
                  } />
                  <Route path="/terms" element={
                    <PageWrapper 
                      title="Terms of Service"
                      description="DevTools Hub terms of service. Terms and conditions for using our free online developer tools."
                      keywords="terms of service, terms and conditions, DevTools Hub terms, usage terms"
                    >
                      <TermsOfService />
                    </PageWrapper>
                  } />
                  <Route path="/about" element={
                    <PageWrapper 
                      title="About Us"
                      description="Learn about DevTools Hub - your free online developer tools collection. Our mission to provide privacy-focused, professional development utilities."
                      keywords="about DevTools Hub, developer tools, about us, free dev tools, privacy-focused tools"
                    >
                      <AboutUs />
                    </PageWrapper>
                  } />

                  <Route path="*" element={
                    <PageWrapper 
                      title="404 Not Found"
                      description="Page not found. Return to DevTools Hub for free online developer tools including JSON formatter, text utilities, and more."
                      keywords="404 error, page not found, DevTools Hub"
                    >
                      <NotFound />
                    </PageWrapper>
                  } />
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
