import { Affix, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const HomeHeader = () => {
  return (
    <Affix>
      <div className="homeHeader">
        <div className="homeHeaderInner">
          <div className="logo"></div>
          <div className="homeHeaderNav">
            <div className="homeHeaderNavItem">
              <p className="active">首页</p>
            </div>
            <div className="homeHeaderNavItem">
              <p className="nav">笔记</p>
            </div>
            <div className="homeHeaderNavItem">
              <p className="nav">个人中心</p>
            </div>
          </div>
          <div className="SearchWrapper">
            <Input className="NavSearch" placeholder="搜索" />
          </div>
        </div>
      </div>
    </Affix>
  );
}
export default HomeHeader;
