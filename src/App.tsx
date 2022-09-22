import React from "react";

import {useRoutes} from 'react-router-dom'
import routes from "./routers";

const App: React.FC = () => {
  //根据路由表生成对应的路由规则
	const element = useRoutes(routes)
  return (
    <div>
      {element}
    </div>
  );
}
export default App;