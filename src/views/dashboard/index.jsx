import React, { useEffect } from "react";
import HomeHeader from "@components/home-header";
import { get } from "../../services";

HomeHeader
function Dashboard() {
  useEffect(() => {
    get('/index-infos').then(() => {
      
    })
  }, [])
  return (
    <div style={{ height:"2000px"}}>
      <HomeHeader />
    </div>
  );
}
export default Dashboard;
