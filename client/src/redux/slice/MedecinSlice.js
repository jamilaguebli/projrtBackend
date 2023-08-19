import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    medecin:[],
    loading:false,
    success:false,
    Error:null,
    message:"",
    upadted:false
}
export const getMedecin=createAsyncThunk('medecin/getMedecin',async(data,ThunkAPI)=>{
    
    try {
        
    const response= await axios.get('http://localhost:8000/medecins/getMedecin') 
    return  response.data  
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response.data)
    
        
    }


})

export const RechercheMedecin=createAsyncThunk('medecin/RechercheMedecin',async(data,ThunkAPI)=>{
    try {
        const response = await axios.post('http://localhost:8000/medecins/RechercheMedecin',data )
         
        console.log(response)
        return response.data;
      } catch (error) {
        return ThunkAPI.rejectWithValue(error.response.data)
      }

})

export const addMedecin=createAsyncThunk('medecin/addMedecin',async(data,ThunkAPI)=>{
    
    try {
        
    const response= await axios.post('http://localhost:8000/medecins/addMedecin',data) 
    return  response.data  
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response.data)
    
        
    }


})

export const MedecinSlice=createSlice({
    name:"medecin",
    initialState,
    reducers:{
        reset:(state)=>{
            state.loading=false;
            state.success=false;
            state.Error=null;
            state.message="";
            state.updated=false;
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(getMedecin.fulfilled,(state,action)=>{
            state.medecin=action.payload
        }).addCase(RechercheMedecin.fulfilled,(state,action)=>{
            state.medecin=action.payload
    }).addCase(addMedecin.pending,(state)=>{

        state.loading=true;
        state.updated=true

    }).addCase(addMedecin.fulfilled,(state,action)=>{
        state.loading=false;
        state.success=true;
       
        state.message="medecin registered successfully"

    }
    ).addCase(addMedecin.rejected,(state,action)=>{

        state.Error=action.payload;
        state.loading=false;
        state.success=false;
        state.message="medecin registration failed"
    }
    )
}
})
export const {reset}=MedecinSlice.actions;


export default MedecinSlice.reducer;