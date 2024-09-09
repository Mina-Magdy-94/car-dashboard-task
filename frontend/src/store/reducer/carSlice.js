import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    cars: [],
    isLoading: false,
    networkErr: false
}

const baseUrl = `http://localhost:8080/cars`
// const baseUrl = `https://backend-owo3swb7p-mina-magdys-projects-cc31b199.vercel.app/cars`

export const getAllCars = createAsyncThunk("cars/getAllCars",
    async (args, thunkAPI) => {
        const { rejectWithValue } = thunkAPI
        try {
            const response = await axios.get(baseUrl)
            // console.log(response.data)
            return (response.data)
        } catch (error) {
            return rejectWithValue(error.message)
        }

    })

export const likeOrUnlikeAcar = createAsyncThunk("cars/likeOrUnlikeAcar",
    async ([carId, editedCar], thunkAPI) => {
        const { rejectWithValue } = thunkAPI
        try {
            // // console.log(carId,editedCar);
            const response = await axios.put(`${baseUrl}/${carId}`, editedCar)
            let newCarState = response.data
            // // console.log(newCarState);
            return newCarState
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: {
        //getAllCars
        [getAllCars.pending]: (state, action) => {
            state.isLoading = true
            state.networkErr = false
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.isLoading = false
            state.networkErr = false
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.isLoading = false
            state.networkErr = true
        },
        //likeOrUnlikeAcar
        [likeOrUnlikeAcar.fulfilled]: (state, action) => {
            state.cars = state.cars.map((element) => {
                return element.id === action.payload.id ? action.payload : element
            })
        }
    }
})


export const carReducer = carSlice.reducer
export const carActions = carSlice.actions