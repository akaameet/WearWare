import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_BACKEND_URL;
const token = () => `Bearer ${localStorage.getItem("userToken")}`;

export const fetchUserOrders = createAsyncThunk(
  "orders/fetchUserOrders",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/api/orders/my-orders`, {
        headers: { Authorization: token() },
      });
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const fetchOrderDetails = createAsyncThunk(
  "orders/fetchOrderDetails",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/api/orders/${id}`, {
        headers: { Authorization: token() },
      });
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: { orders: [], orderDetails: null, loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchUserOrders.pending, (s) => {
      s.loading = true;
    })
      .addCase(fetchUserOrders.fulfilled, (s, a) => {
        s.loading = false;
        s.orders = a.payload;
      })
      .addCase(fetchUserOrders.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })

      .addCase(fetchOrderDetails.pending, (s) => {
        s.loading = true;
      })
      .addCase(fetchOrderDetails.fulfilled, (s, a) => {
        s.loading = false;
        s.orderDetails = a.payload;
      })
      .addCase(fetchOrderDetails.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      });
  },
});

export default orderSlice.reducer;
