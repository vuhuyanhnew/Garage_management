
import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./reducers/service";
import ownerReducer from "./reducers/owner";
import garageReducer from "./reducers/garage";
export const store = configureStore({
    reducer: {
        service: serviceReducer,
        owner: ownerReducer,
        garage: garageReducer

    }
})