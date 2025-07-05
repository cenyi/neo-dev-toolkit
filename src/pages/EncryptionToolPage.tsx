
import React from 'react';
import EncryptionTool from '@/components/tools/crypto/EncryptionTool';
import PageWrapper from '@/components/PageWrapper';

const EncryptionToolPage = () => {
  return (
    <PageWrapper 
      title="Hash Generator & Encryption Tool"
      description="Free hash generator and encryption tool. Generate MD5, SHA1, SHA256, SHA512 hashes, bcrypt, UUID, and more. Secure text hashing made simple."
      keywords="hash generator, MD5 hash, SHA256 hash, SHA1 hash, SHA512 hash, bcrypt, UUID generator, encryption tool"
    >
      <EncryptionTool />
    </PageWrapper>
  );
};

export default EncryptionToolPage;
