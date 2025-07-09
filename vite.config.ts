import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      '@monaco-editor/react',
      'monaco-editor/esm/vs/editor/editor.api'
    ],
  },
  define: {
    // 配置Monaco Editor使用本地资源而不是CDN
    'process.env.MONACO_EDITOR_CDN': JSON.stringify(false),
  },
}));
