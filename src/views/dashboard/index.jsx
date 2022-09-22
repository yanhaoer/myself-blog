import React, { useEffect } from "react";
import HomeHeader from "@components/home-header";
import HomeFooter from "@components/home-footer";
import { get } from "../../services";

HomeHeader;
function Dashboard() {
  useEffect(() => {
    get("/index-infos").then(() => {});
  }, []);
  return (
    <div style={{ height: "2000px" }}>
      <HomeHeader />
      <HomeFooter />
    </div>
  );
}
export default Dashboard;
