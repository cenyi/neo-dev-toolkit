
import React from 'react';
import Base64EncoderDecoder from '@/components/tools/network/Base64EncoderDecoder';
import PageWrapper from '@/components/PageWrapper';

const Base64EncoderPage = () => {
  return (
    <PageWrapper 
      title="Base64 Encoder & Decoder Tool - Professional Encoding with Lovable AI"
      description="Professional Base64 encoder and decoder tool built with Lovable AI. Encode text to Base64 or decode Base64 to text instantly. Safe, fast, and privacy-focused Base64 conversion."
      keywords="lovable, Base64 encoder, Base64 decoder, Base64 converter, encode Base64, decode Base64, Base64 tool"
    >
      <Base64EncoderDecoder />
    </PageWrapper>
  );
};

export default Base64EncoderPage;
