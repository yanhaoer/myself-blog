import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      // 引入antd
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#02107e", //设置antd主题色
        },
      },
    },
  },
  resolve: {
    // 配置别名
    alias: {
      "@": path.join(__dirname, "./src"),
      "@components": path.join(__dirname, "./src/components"),
    },
  },
});
