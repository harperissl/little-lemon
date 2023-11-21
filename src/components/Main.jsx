import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import ConfirmedReservation from "./ConfirmedReservation";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import Booking from "./Booking";
function Main() {

    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const initialState = { availableTimes: fetchAPI(new Date()) }
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date(date)) }
    }

    const navigate = useNavigate();
    function submitForm(formData) {
        navigate("/confirmed")
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/reservations" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedReservation />} />
            </Routes>
        </main>


    )
}

export default Main;