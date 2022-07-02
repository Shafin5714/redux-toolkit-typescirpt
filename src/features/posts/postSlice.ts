import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

type Posts = {
  userId:number,
  id:number,
  title:string,
  body:string
}[]

type InitialState = {
  isLoading:boolean,
  posts:Posts,
  error:string
}

const initialState:InitialState = {
  isLoading: false,
  posts: [],
  error: '',
}


export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  } catch (error) {
    return error;
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Posts>) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = '';
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message || 'Something Went Wrong';
    });
  },
});

export default postSlice.reducer;
