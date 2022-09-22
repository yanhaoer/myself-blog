import React, { useEffect } from "react";
import HomeHeader from "@components/home-header";
import HomeFooter from "@components/home-footer";
import Banner from "./banner/banner";
import { get } from "../../services";

const Dashboard: React.FC<any> = () => {
  useEffect(() => {
    get("/index-infos").then(() => {});
  }, []);
  return (
    <div style={{ height: "2000px" }}>
      <HomeHeader />
      <Banner />
      <HomeFooter />
    </div>
  );
}
export default Dashboard;
