# myself-blog

##  一、搭建vite脚手架

```
yarn create vite
```

## 二、引入antd

```
yarn add antd
```

##### 使用.less是为了方便设置主题色

```
import 'antd/dist/antd.less'
```

##### vite.config.js设置主题色

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#4377FE',//设置antd主题色
        },
      },
    }
  },
})
```

##### 按需引入

```
yarn add vite-plugin-imp
```

删除掉import 'antd/dist/antd.less'

##### vite.config.js完整代码

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#4377FE',//设置antd主题色
        },
      },
    }
  },
})
```

## 三、配置reactRouter

##### 配置路由项

```javascript
import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../views/login";
import Dashboard from "../views/dashboard";

const element = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export default element;
```

##### App.tsx

```javascript
import React from "react";
import "./App.less";

import {useRoutes} from 'react-router-dom'
import routes from "./routers";

export default function App() {
  //根据路由表生成对应的路由规则
	const element = useRoutes(routes)
  return (
    <div className="App">
      {element}
    </div>
  );
}
```

##### main.tsx

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.less";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

## 四、引入别名alias

##### vite.config.ts配置

```javascript
// ...
resolve: {
    // 配置别名
    alias: {
      '@': path.join(__dirname, './src'),
      '@components': path.join(__dirname, './src/components'),
      '@utils': path.join(__dirname, './src/utils')
    }
  },
  // ...
```

##### 配置 tsconfig.json

```javascript
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "types": ["vite/client"],

	// ++ 这里加上baseUrl 和 path即可 ++
    "baseUrl": "./",
    "paths": {
	  // 根据别名配置相关路径
      "@utils/*": ["./src/utils/*"]
    }
    
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

##### 安装@types/node

```
yarn add @types/node --save-dev
```

