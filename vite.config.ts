import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";
import path from "path";
import config from "./config";

const env = process.argv[process.argv.length - 1];
const base = config[env];
console.log("process:::env", env);

// https://vitejs.dev/config/
export default defineConfig({
  base: base.cdn,
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
      "@services": path.join(__dirname, "./src/services")
    },
  },
  server: {
    port: 3001, //开发环境启动的端口
    proxy: {
      "/api": {
        // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了新蜂商城的请求地址
        target: "http://47.99.134.126:28019/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 将 /api 重写为空
      },
    },
  },
});
