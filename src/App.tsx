import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import JsonTool from "@/components/tools/json/JsonTool";
import JsonSchemaValidator from "@/components/tools/json/JsonSchemaValidator";
import JsonCodeGen from "@/components/tools/json/JsonCodeGen";
import JsonDiff from "@/components/tools/json/JsonDiff";
import JsonMock from "@/components/tools/json/JsonMock";
import UrlEncoderDecoder from "@/components/tools/network/UrlEncoderDecoder";
import Base64EncoderDecoder from "@/components/tools/network/Base64EncoderDecoder";
import IpLookup from "@/components/tools/network/IpLookup";
import JwtDecoder from "@/components/tools/crypto/JwtDecoder";
import CaseConverter from "@/components/tools/text/CaseConverter";
import WordCounter from "@/components/tools/text/WordCounter";
import TextReverser from "@/components/tools/text/TextReverser";
import WhitespaceRemover from "@/components/tools/text/WhitespaceRemover";
import LoremIpsumGenerator from "@/components/tools/text/LoremIpsumGenerator";
import TextDiff from "@/components/tools/text/TextDiff";
import EncryptionTool from "@/components/tools/crypto/EncryptionTool";
import RegexTool from "@/components/tools/text/RegexTool";
import MarkdownEditor from "@/components/tools/editor/MarkdownEditor";
import MermaidEditor from "@/components/tools/editor/MermaidEditor";
import TimestampConverter from "@/components/tools/time/TimestampConverter";
import TimezoneConverter from "@/components/tools/time/TimezoneConverter";
import DateCalculator from "@/components/tools/time/DateCalculator";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import JsonToolsPage from "./pages/JsonToolsPage";
import NetworkToolsPage from "./pages/NetworkToolsPage";
import TextToolsPage from "./pages/TextToolsPage";
import EditorToolsPage from "./pages/EditorToolsPage";
import TimeToolsPage from "./pages/TimeToolsPage";
import SiteMap from "@/components/SiteMap";
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
              <main className="flex-grow">
                <Routes>
          {/* 语言前缀路由重定向 */}
          <Route path="/" element={<Navigate to="/en" replace />} />
                  <Route path=":lang/json/formatter" element={
                    <PageWrapper 
                      title="JSON Formatter & Validator" 
                      description="Free online JSON formatter with syntax highlighting. Validate, minify and format JSON data instantly. No signup required."
                      keywords="JSON formatter, JSON validator, JSON beautifier, JSON minifier, online JSON tool, free JSON formatter"
                    >
                      <JsonTool />
                    </PageWrapper>
                  } />
                  {/* JSON Tool Redirects */}
                  <Route path="/json-tool" element={<Navigate to="/:lang/json/formatter" replace />} />
                  <Route path=":lang/json" element={
                    <PageWrapper 
                      title="JSON Tools - Professional JSON Utilities" 
                      description="Complete JSON toolset: formatter, validator, schema checker, code generator, diff tool & mock data creator."
                      keywords="JSON tools, JSON formatter, JSON validator, JSON schema, JSON code generator, JSON diff, mock data generator"
                    >
                      <JsonToolsPage />
                    </PageWrapper>
                  } />
                  <Route path=":lang/json/schema-validator" element={
                    <PageWrapper 
                      title="JSON Schema Validator"
                      description="Validate JSON data against schemas with detailed error reporting. Free online JSON Schema validation tool."
                      keywords="JSON schema validator, JSON validation, schema validation, JSON schema checker, data validation"
                    >
                      <JsonSchemaValidator />
                    </PageWrapper>
                  } />
                  <Route path=":lang/json/codegen" element={
                    <PageWrapper 
                      title="Generate Code Types from JSON"
                      description="Generate TypeScript, Python, Java & C# code types from JSON data. Free online developer tool."
                      keywords="JSON code generator, TypeScript generator, Python types, Java classes, C# models, code generation"
                    >
                      <JsonCodeGen />
                    </PageWrapper>
                  } />
                  <Route path=":lang/json/diff" element={
                    <PageWrapper 
                      title="JSON Diff Tool"
                      description="Compare JSON objects visually with syntax highlighting. Find differences between JSON data instantly."
                      keywords="JSON diff, JSON compare, JSON comparison, data comparison, JSON difference checker"
                    >
                      <JsonDiff />
                    </PageWrapper>
                  } />
                  <Route path=":lang/json/mock" element={
                    <PageWrapper 
                      title="JSON Mock Data Generator"
                      description="Generate realistic mock JSON data for testing with customizable schemas and realistic values."
                      keywords="mock data generator, JSON mock data, test data generator, fake data, API testing data"
                    >
                      <JsonMock />
                    </PageWrapper>
                  } />
                  {/* JSON Redirects */}
                  <Route path="/json-schema-validator" element={<Navigate to="/:lang/json/schema-validator" replace />} />
                  <Route path="/json-codegen" element={<Navigate to="/:lang/json/codegen" replace />} />
                  <Route path="/json-diff" element={<Navigate to="/:lang/json/diff" replace />} />
                  <Route path="/json-mock" element={<Navigate to="/:lang/json/mock" replace />} />
                  {/* Network Tools */}
                  <Route path=":lang/network/url-encoder" element={
                    <PageWrapper 
                      title="URL Encoder / Decoder"
                      description="Free URL encoder/decoder tool. Encode URLs for safe transmission or decode percent-encoded URLs."
                      keywords="URL encoder, URL decoder, percent encoding, URI encoding, URL encoding tool"
                    >
                      <UrlEncoderDecoder />
                    </PageWrapper>
                  } />
                  <Route path=":lang/network" element={
                    <PageWrapper 
                      title="Network Tools - Encoding & Security Utilities" 
                      description="Essential network tools: URL encoder, Base64 converter, IP lookup & JWT decoder. Secure, privacy-focused utilities."
                      keywords="network tools, URL encoder, Base64 converter, IP lookup, JWT decoder, encoding tools"
                    >
                      <NetworkToolsPage />
                    </PageWrapper>
                  } />
                  <Route path=":lang/network/base64-encoder" element={
                    <PageWrapper 
                      title="Base64 Encoder / Decoder"
                      description="Free Base64 encoder/decoder. Encode text to Base64 or decode Base64 strings back to text."
                      keywords="Base64 encoder, Base64 decoder, Base64 converter, text encoding, data encoding"
                    >
                      <Base64EncoderDecoder />
                    </PageWrapper>
                  } />
                  <Route path=":lang/network/ip-lookup" element={
                    <PageWrapper 
                      title="IP Lookup"
                      description="Free IP lookup tool. Get geolocation, ISP information, and network details for any IP address."
                      keywords="IP lookup, IP geolocation, IP address lookup, ISP lookup, network information"
                    >
                      <IpLookup />
                    </PageWrapper>
                  } />
                  <Route path=":lang/network/jwt-decoder" element={
                    <PageWrapper 
                      title="JWT Decoder"
                      description="Free JWT decoder and validator. View header, payload, and signature information for any JWT token."
                      keywords="JWT decoder, JWT validator, JSON Web Token, token decoder, JWT parser"
                    >
                      <JwtDecoder />
                    </PageWrapper>
                  } />
                  {/* Network Redirects */}
                  <Route path="/url-encoder" element={<Navigate to="/:lang/network/url-encoder" replace />} />
                  <Route path="/base64-encoder" element={<Navigate to="/:lang/network/base64-encoder" replace />} />
                  <Route path="/ip-lookup" element={<Navigate to="/:lang/network/ip-lookup" replace />} />
                  <Route path="/jwt-decoder" element={<Navigate to="/:lang/network/jwt-decoder" replace />} />
                  {/* Editor Tools */}
                  <Route path=":lang/editor" element={
                    <PageWrapper 
                      title="Editor Tools - Markdown & Mermaid" 
                      description="Powerful Markdown & Mermaid editors with real-time rendering. Create and preview documents instantly." 
                      keywords="editor tools, Markdown editor, Mermaid editor, diagram editor, documentation tools"
                    >
                      <EditorToolsPage />
                    </PageWrapper>
                  } />
                  <Route path=":lang/editor/markdown" element={
                    <PageWrapper 
                      title="Markdown Editor" 
                      description="Live preview Markdown editor with syntax highlighting. Create formatted documents easily." 
                      keywords="Markdown editor, live preview, syntax highlighting, documentation, text editor"
                    >
                      <MarkdownEditor />
                    </PageWrapper>
                  } />
                  <Route path=":lang/editor/mermaid" element={
                    <PageWrapper 
                      title="Mermaid Diagram Editor" 
                      description="Create Mermaid diagrams with live preview. Generate flowcharts, sequence diagrams, and more." 
                      keywords="Mermaid editor, diagram editor, flowchart, sequence diagram, UML diagrams"
                    >
                      <MermaidEditor />
                    </PageWrapper>
                  } />
                  {/* Text Tools */}
                  <Route path=":lang/text/case-converter" element={
                    <PageWrapper 
                      title="Text Case Converter - Upper, Lower, Title Case"
                      description="Free text case converter. Convert to uppercase, lowercase, title case, camelCase, snake_case instantly. No signup required."
                      keywords="case converter, text converter, uppercase, lowercase, title case, camelCase, snake_case, text transformation"
                    >
                      <CaseConverter />
                    </PageWrapper>
                  } />
                  <Route path=":lang/text/word-counter" element={
                    <PageWrapper 
                      title="Word & Character Counter"
                      description="Free word and character counter. Count words, characters, sentences, and paragraphs instantly."
                      keywords="word counter, character counter, text counter, word count, character count"
                    >
                      <WordCounter />
                    </PageWrapper>
                  } />
                  <Route path=":lang/text/text-reverser" element={
                    <PageWrapper 
                      title="Text Reverser"
                      description="Free text reverser tool. Reverse character order in your text instantly."
                      keywords="text reverser, reverse text, text manipulation, string reverser"
                    >
                      <TextReverser />
                    </PageWrapper>
                  } />
                  <Route path=":lang/text/whitespace-remover" element={
                    <PageWrapper 
                      title="Whitespace Remover"
                      description="Free whitespace remover. Remove extra spaces, trim text, and clean up formatting."
                      keywords="whitespace remover, text cleaner, remove spaces, text formatter, trim text"
                    >
                      <WhitespaceRemover />
                    </PageWrapper>
                  } />
                  <Route path=":lang/text/lorem-ipsum-generator" element={
                    <PageWrapper 
                      title="Lorem Ipsum Generator"
                      description="Free Lorem Ipsum generator. Create placeholder text for design and development projects."
                      keywords="Lorem Ipsum generator, placeholder text, dummy text, filler text, design text"
                    >
                      <LoremIpsumGenerator />
                    </PageWrapper>
                  } />
                  <Route path=":lang/text/text-diff" element={
                    <PageWrapper 
                      title="Text Comparison Tool"
                      description="Free text comparison tool. Find differences between documents with visual highlighting."
                      keywords="text diff, text comparison, document compare, text difference, file compare"
                    >
                      <TextDiff />
                    </PageWrapper>
                  } />
                  <Route path=":lang/text" element={
                    <PageWrapper 
                      title="Text Tools - Comprehensive Text Processing"
                      description="Complete text processing tools: case converter, word counter, reverser, whitespace remover, Lorem Ipsum generator & text diff."
                      keywords="text tools, text processing, case converter, word counter, text manipulation, text utilities"
                    >
                      <TextToolsPage />
                    </PageWrapper>
                  } />
                  {/* Text Redirects */}
                  <Route path="/case-converter" element={<Navigate to=":lang/text/case-converter" replace />} />
                  <Route path="/word-counter" element={<Navigate to=":lang/text/word-counter" replace />} />
                  <Route path="/text-reverser" element={<Navigate to=":lang/text/text-reverser" replace />} />
                  <Route path="/whitespace-remover" element={<Navigate to=":lang/text/whitespace-remover" replace />} />
                  <Route path="/lorem-ipsum-generator" element={<Navigate to=":lang/text/lorem-ipsum-generator" replace />} />
                  <Route path="/text-diff" element={<Navigate to=":lang/text/text-diff" replace />} />

                  {/* Regex Tool */}
                  <Route path=":lang/regex" element={
                    <PageWrapper 
                      title="Regular Expression Tester & Generator"
                      description="Free regex tester and generator. Test patterns, find matches, and replace text with powerful regex engine. Real-time validation."
                      keywords="regex tester, regular expression, regex generator, pattern matching, text search, regex validator"
                    >
                      <RegexTool />
                    </PageWrapper>
                  } />

                  {/* Editor Tools */}
                  <Route path=":lang/editor/markdown" element={
                    <PageWrapper 
                      title="Markdown Editor"
                      description="Free Markdown editor with live preview. Write with syntax highlighting and export options."

                    >
                      <MarkdownEditor />
                    </PageWrapper>
                  } />
                  <Route path=":lang/editor/mermaid" element={
                    <PageWrapper 
                      title="Mermaid Editor"
                      description="Free Mermaid diagram editor. Create flowcharts, sequence diagrams with Mermaid syntax."

                    >
                      <MermaidEditor />
                    </PageWrapper>
                  } />
                  <Route path="/editor" element={
                    <PageWrapper 
                      title="Code Editors - Markdown & Diagram Tools"
                      description="Professional online editors for Markdown and Mermaid diagrams. Create documentation and diagrams with live preview. Built with Lovable AI."
                      keywords="code editor, Markdown editor, Mermaid editor, diagram creator, documentation tools, lovable"
                    >
                      <EditorToolsPage />
                    </PageWrapper>
                  } />
                  {/* Editor Redirects */}
                  <Route path="/markdown" element={<Navigate to=":lang/editor/markdown" replace />} />
                  <Route path="/mermaid" element={<Navigate to=":lang/editor/mermaid" replace />} />

                  {/* Time Tools */}
                  <Route path=":lang/time/timestamp-converter" element={
                    <PageWrapper 
                      title="Timestamp Converter"
                      description="Convert Unix timestamps to readable dates and vice versa. Supports milliseconds and multiple formats."
                      keywords="timestamp converter, Unix timestamp, epoch converter, date converter, time converter"
                    >
                      <TimestampConverter />
                    </PageWrapper>
                  } />
                  <Route path=":lang/time/timezone-converter" element={
                    <PageWrapper 
                      title="Timezone Converter"
                      description="Convert times between time zones with daylight saving adjustments for accurate results."
                      keywords="timezone converter, time zone converter, world clock, time conversion, UTC converter"
                    >
                      <TimezoneConverter />
                    </PageWrapper>
                  } />
                  <Route path=":lang/time/date-calculator" element={
                    <PageWrapper 
                      title="Date Calculator"
                      description="Calculate date differences and add/subtract days, months, or years from any date."
                      keywords="date calculator, date difference, date math, age calculator, days calculator"
                    >
                      <DateCalculator />
                    </PageWrapper>
                  } />
                  <Route path=":lang/time" element={
                    <PageWrapper 
                      title="Date & Time Tools - Timestamp & Timezone"
                      description="Essential date and time tools: timestamp converter, timezone converter, date calculator. Handle time calculations with precision. Built with Lovable AI."
                      keywords="time tools, timestamp converter, timezone converter, date calculator, lovable"
                    >
                      <TimeToolsPage />
                    </PageWrapper>
                  } />
                  {/* Time Redirects */}
                  <Route path="/timestamp-converter" element={<Navigate to="/:lang/time/timestamp-converter" replace />} />
                  <Route path="/timezone-converter" element={<Navigate to="/:lang/time/timezone-converter" replace />} />
                  <Route path="/date-calculator" element={<Navigate to="/:lang/time/date-calculator" replace />} />

                  {/* Encryption Tools */}
                  <Route path=":lang/encryption" element={
                    <PageWrapper 
                      title="Encryption Tool"
                      description="Secure encryption tools: AES encryption, password generator, and hash calculator for data security."
                      keywords="encryption tool, AES encryption, password generator, hash calculator, data security, cryptography"
                    >
                      <EncryptionTool />
                    </PageWrapper>
                  } />

                  {/* Footer Pages */}
                  <Route path=":lang/privacy" element={
                    <PageWrapper 
                      title="Privacy Policy"
                      description="Understand how we collect, use, and protect your personal information when using our tools."
                      keywords="privacy policy, data protection, personal information, privacy rights"
                    >
                      <PrivacyPolicy />
                    </PageWrapper>
                  } />
                  <Route path=":lang/terms" element={
                    <PageWrapper 
                      title="Terms of Service"
                      description="Understand the legal agreement between you and our service when using our tools."
                      keywords="terms of service, legal agreement, terms and conditions, user agreement"
                    >
                      <TermsOfService />
                    </PageWrapper>
                  } />
                  <Route path=":lang/about" element={
                    <PageWrapper 
                      title="About Us"
                      description="Learn about our mission, team, and the story behind our developer tools collection."
                      keywords="about us, developer tools, mission, team, company information"
                    >
                      <AboutUs />
                    </PageWrapper>
                  } />
                  
                  {/* Site Map Page */}
                  <Route path=":lang/sitemap" element={
                    <PageWrapper 
                      title="Site Map - All Developer Tools"
                      description="Complete site map of all free online developer tools: JSON formatter, text utilities, network tools, editors and more."
                      keywords="sitemap, developer tools, JSON tools, text tools, network utilities, free online tools"
                    >
                      <SiteMap />
                    </PageWrapper>
                  } />

                  <Route path=":lang" element={
                    <PageWrapper 
                      title="DevTools Hub" 
                      description="Free online developer tools collection: JSON formatter, text processing, encryption utilities. No signup required, privacy-focused with modern design."
                      keywords="developer tools, JSON formatter, text converter, encryption, hash generator, URL encoder, Base64, timestamp converter, free dev tools"
                    >
                      <HomePage />
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
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default App;
