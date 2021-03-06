import React from "react";
import { PageHeader } from "antd";

import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Dashboard"
      />
      <Outlet />
    </div>
  );
};

export default Dashboard;
