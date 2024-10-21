import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../styled_components/Heading"
import Row from "../styled_components/Row"


function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
