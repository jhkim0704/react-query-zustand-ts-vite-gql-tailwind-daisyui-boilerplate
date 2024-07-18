import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import graphqlLoader from "vite-plugin-graphql-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), graphqlLoader()],
});
