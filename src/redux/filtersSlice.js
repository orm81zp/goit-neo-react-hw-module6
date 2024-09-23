import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// actions
export const { changeFilter } = filtersSlice.actions;

// reducer
export const filtersReducer = filtersSlice.reducer;

// selectors
export const selectNameFilter = (state) => state.filters.name;
