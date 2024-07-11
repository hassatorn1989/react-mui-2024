import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserAll } from './userService';


interface User {
    id : number;
    name : string;
    username : string;
    password : string;
}

interface UserState {
    users : User[];
    page : number;
    size : number;
    sortField : string;
    sortOrder : string;
    search : string;
    loading : boolean;
    error : string | null;
}

const initialState : UserState = {
    users : [],
    page : 1,
    size : 10,
    sortField : 'id',
    sortOrder : 'asc',
    search : '',
    loading : false,
    error : null,
};


export const fetchUsers = createAsyncThunk('user/fetchUsers', async (page : number, { getState }) => {
    const { sortField, sortOrder } = (getState() as { user : UserState }).user;
    return fetchUserAll(page, 10, sortField, sortOrder as 'asc' | 'desc', '');
});


const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setPage : (state, action) => {
            state.page = action.payload;
        },
        setSortField : (state, action) => {
            state.sortField = action.payload;
        },
        setSortOrder : (state, action) => {
            state.sortOrder = action.payload;
        },
    },
    extraReducers : builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        
    },
});

export const { setPage, setSortField, setSortOrder } = userSlice.actions;

export default userSlice.reducer;