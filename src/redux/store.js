import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "./slices/potentialCountriesSlice"
import displayCountryReducer from "../redux/slices/displayCountrySlice"


export default configureStore({
    reducer: { 
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayCountryReducer,
    },
})