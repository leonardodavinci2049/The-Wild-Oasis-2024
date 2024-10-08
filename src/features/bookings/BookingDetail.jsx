import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Spinner from "../../styled_components/Spinner";
import BookingDataBox from "./BookingDataBox";
import Row from "../../styled_components/Row";
import Heading from "../../styled_components/Heading";
import Tag from "../../styled_components/Tag";
import ButtonGroup from "../../styled_components/ButtonGroup";
import Button from "../../styled_components/Button";
import Modal from "../../styled_components/Modal";
import ConfirmDelete from "ui/ConfirmDelete";

import { useBooking } from "features/bookings/useBooking";
import { useDeleteBooking } from "./useDeleteBooking";
import { useMoveBack } from "hooks/useMoveBack";
import { useCheckout } from "features/check-in-out/useCheckout";
import ButtonText from "../../styled_components/ButtonText";
import Empty from "../../styled_components/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking } = useBooking();
  const { mutate: deleteBooking, isLoading: isDeleting } = useDeleteBooking();
  const { mutate: checkout, isLoading: isCheckingOut } = useCheckout();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  // if (isLoading) return <Spinner />;
  // if (!booking) return <Empty resource='booking' />;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const { id: bookingId, status } = booking;

  // We return a fragment so that these elements fit into the page's layout
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading type="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
            Check out
          </Button>
        )}

        <Modal>
          <Modal.Toggle opens="delete">
            <Button variation="danger">Delete booking</Button>
          </Modal.Toggle>
          <Modal.Window name="delete">
            <ConfirmDelete
              resource="booking"
              // These options will be passed wherever the function gets called, and they determine what happens next
              onConfirm={(options) => deleteBooking(bookingId, options)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
