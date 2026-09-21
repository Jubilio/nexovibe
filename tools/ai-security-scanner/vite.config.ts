import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'node:url';
export default defineConfig({
 plugins:[react()],
 base:'/ai-security-scanner/',
 resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},
 build:{outDir:'../../public/ai-security-scanner',emptyOutDir:true},
});
