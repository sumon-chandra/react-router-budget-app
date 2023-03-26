// Helper functions
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";

// Loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
};

export default Dashboard;
