import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllItems } from './../../api/itemApis';

import type { Item } from "../../types/Item";

export type ItemsState = Item[];
const initialState: ItemsState = [];

export const getAllItems = createAsyncThunk<Item[]>(
  "items/getAllItems",
  async () => {
    const res = await fetchAllItems();
    return res;
  }
);

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllItems.fulfilled, (state, action: PayloadAction<Item[]>) => action.payload);
  },
});

export default itemsSlice.reducer;