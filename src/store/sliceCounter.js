import { createSlice } from '@reduxjs/toolkit';

const sliceCounter = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        changeCounterValue: (state, action) => {
            console.log(action);
            const { amount } = action.payload;
            return state += amount;
        }
    }
});

export const { changeCounterValue } = sliceCounter.actions;

export default sliceCounter.reducer;