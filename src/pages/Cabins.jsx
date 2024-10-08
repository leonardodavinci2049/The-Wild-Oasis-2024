import CabinTable from "../features/cabins/CabinTable";

import Heading from "../styled_components/Heading";
import Row from "../styled_components/Row";

import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin></AddCabin>
      </Row>
    </>
  );
};

export default Cabins;
