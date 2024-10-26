import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const USERS_SLICE_NAME = 'users';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

// users/create
export const createUserThunk = createAsyncThunk(
  `${USERS_SLICE_NAME}/post`,
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await API.createUser(payload);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue({
        status: err.response.status,
        message: err.response.data.errors,
      }); // => payload
    }
  }
);

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
// users/delete
export const removeUserThunk = createAsyncThunk(
  `${USERS_SLICE_NAME}/delete`,
  async (payload, thunkAPI) => {
    try {
      await API.removeUser(payload); // id
      return payload; // => payload
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
    // create User
    builder.addCase(createUserThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(createUserThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.users.push(payload);
    });

    builder.addCase(createUserThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });

    // get Users
    builder.addCase(getUsersThunk.pending, state => {
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
    // delete User
    builder.addCase(removeUserThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(removeUserThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      const deletedUserIndex = state.users.findIndex(u => u.id === payload);
      if (deletedUserIndex !== -1) {
        state.users.splice(deletedUserIndex, 1);
      }
    });
    builder.addCase(removeUserThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer } = usersSlice;

export default reducer;
