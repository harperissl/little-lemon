import { useState } from "react";



function BookingForm({ availableTimes, dispatch, submitForm }) {

    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("")

    const handleSumbit = (e) => {
        e.preventDefault();
        submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSumbit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of Guests</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) => { setGuests(e.target.value) }} type={"number"} placeholder={0} max={10} required></input>
                        </div>
                        <div>
                            <input aria-label="On Click" type={"submit"} value={"Submit"}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;