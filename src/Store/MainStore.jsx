import { configureStore } from "@reduxjs/toolkit";
import FirstSlice from "./StoreSlice";

const MainStore = configureStore({
  reducer: { firstSlice: FirstSlice.reducer },
});

export default MainStore;
