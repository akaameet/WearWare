import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_BACKEND_URL;
const token = () => `Bearer ${localStorage.getItem("userToken")}`;

export const fetchAllOrders = createAsyncThunk(
  "adminOrders/fetchAllOrders",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/api/admin/orders`, {
        headers: { Authorization: token() },
      });
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  "adminOrders/updateOrderStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `${API}/api/admin/orders/${id}`,
        { status },
        { headers: { Authorization: token() } }
      );
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "adminOrders/deleteOrder",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API}/api/admin/orders/${id}`, {
        headers: { Authorization: token() },
      });
      return id;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const adminOrderSlice = createSlice({
  name: "adminOrders",
  initialState: {
    orders: [],
    totalOrders: 0,
    totalSales: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchAllOrders.pending, (s) => {
      s.loading = true;
    })
      .addCase(fetchAllOrders.fulfilled, (s, a) => {
        s.loading = false;
        s.orders = a.payload;
        s.totalOrders = a.payload.length;
        s.totalSales = a.payload.reduce((t, o) => t + o.totalPrice, 0);
      })
      .addCase(fetchAllOrders.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })
      .addCase(updateOrderStatus.fulfilled, (s, a) => {
        const i = s.orders.findIndex((o) => o._id === a.payload._id);
        if (i !== -1) s.orders[i] = a.payload;
      })
      .addCase(deleteOrder.fulfilled, (s, a) => {
        s.orders = s.orders.filter((o) => o._id !== a.payload);
      });
  },
});

export default adminOrderSlice.reducer;
