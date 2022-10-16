import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { openModal } from "../modal/modalSlice";

const url = "https://course-api.com/react-tours-project";

const initialState = {
  tourItems: [],
//   amount: 4,
  total: 0,
  isLoading: true,
};

//Fetch
// export const getTourItems = createAsyncThunk("tour/getTourItems", () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

//Axios
// ThunkAPI can get the state of the APP and access andinvoke functions on the state
export const getTourItems = createAsyncThunk(
  "tour/getTourItems",
  async (name, thunkAPI) => {
    try {
      //   console.log(name);
      //   console.log(thunkAPI);
      //   thunkAPI.dispatch(openModal());
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const tourSlice = createSlice({
  name: "tourName",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.tourItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      console.log(itemId)
      state.cartItems = state.tourItems.filter((item) => item.id !== itemId);
    },
  },
  extraReducers: {
    [getTourItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getTourItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.tourItems = action.payload;
    },
    [getTourItems.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

//console.log(tourSlice);
export const { clearCart, removeItem} = tourSlice.actions;

export default tourSlice.reducer;
