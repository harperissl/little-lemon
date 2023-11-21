import BookingForm from "./BookingForm";

function Booking({ availableTimes, dispatch, submitForm }) {

    return (

        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    )
}

export default Booking;