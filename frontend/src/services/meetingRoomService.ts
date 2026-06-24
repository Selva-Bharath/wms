import axios from "axios";

const API =
  "http://localhost:5000/api/meeting-rooms";

export const getRooms = () =>
  axios.get(`${API}/rooms`);

export const getBookings = () =>
  axios.get(`${API}/bookings`);

export const createBooking = (data: any) =>
  axios.post(`${API}/bookings`, data);

export const createRoom = (data: any) =>
  axios.post(`${API}/rooms`, data);

export const cancelBooking = (id: number) =>
  axios.put(
    `${API}/bookings/${id}/cancel`
  );

  export const getDashboardStats = () =>
  axios.get(
    "http://localhost:5000/api/meeting-rooms/dashboard-stats"
  );