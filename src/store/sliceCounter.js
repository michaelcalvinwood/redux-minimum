import { createSlice } from '@reduxjs/toolkit';

const sliceCounter = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        changeCounterValue: (state, action) => {
            const { amount } = action.payload;
            state += amount;
        }
    }
});

export const { changeCounterValue } = sliceCounter.actions;

export default sliceCounter.reducer;