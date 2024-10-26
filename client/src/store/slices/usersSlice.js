import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const USERS_SLICE_NAME = 'users';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

// users/get
export const getUsersThunk = createAsyncThunk(
  `${USERS_SLICE_NAME}/get`,
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await API.getUsers();
      return data; // => payload
    } catch (err) {
      return thunkAPI.rejectWithValue({
        status: err.response.status,
        message: err.response.data.errors,
      }); // => payload
    }
  }
);

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState,
  extraReducers: builder => {
    // get Users
    builder.addCase(getUsersThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.users = [...payload];
    });
    builder.addCase(getUsersThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer } = usersSlice;

export default reducer;
