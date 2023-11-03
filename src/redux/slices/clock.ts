import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ClockState {
  readonly hoursAng: number;
  readonly minutesAng: number;
  readonly secondsAng: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly ap: "AM" | "PM" | "";
}

export const updateTime = createAsyncThunk(
  "clock/updateTime",
  async () => new Date()
);

const clockSlice = createSlice({
  name: "clock",
  initialState: {
    hoursAng: 0,
    minutesAng: 0,
    secondsAng: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    ap: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateTime.fulfilled, (state, action) => {
      const date = action.payload;
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      state.ap = hours >= 12 ? "PM" : "AM";
      state.hoursAng = ((hours % 12) + minutes / 60 + seconds / 3600) * 30;
      state.minutesAng = (minutes + seconds / 60) * 6;
      state.secondsAng = seconds * 6;

      hours %= 12;
      if (hours === 0) hours = 12;
      state.hours = hours;
      state.minutes = minutes;
      state.seconds = seconds;
    });
  },
});

const clockReducer = clockSlice.reducer;

export const clockServices = { actions: clockSlice.actions };
export default clockReducer;
