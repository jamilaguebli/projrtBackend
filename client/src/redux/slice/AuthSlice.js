import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const user=JSON.parse(localStorage.getItem('user'));
const initialState={
    user:user?user:null,
    loading:false,
    success:false,
    Error:null,
    message:"",

}
export const register=createAsyncThunk('auth/register',
async(user,ThunkAPI)=>{
  
  try {
    const reponse= await  axios.post('http://localhost:8000/users/register',user)
    if(reponse.data){
        localStorage.setItem('user',JSON.stringify(reponse.data))
        
    }
    return reponse.data
  } catch (error) {
    return ThunkAPI.rejectWithValue(error.response.data)
    
  }
}
)
 export const login=createAsyncThunk('auth/login',
async(user,ThunkAPI)=>{
  
  try {
    const reponse= await  axios.post('http://localhost:8000/users/login',user)
    if(reponse.data){
        localStorage.setItem('user',JSON.stringify(reponse.data))
        
    }
    return reponse.data
  } catch (error) {
    return ThunkAPI.rejectWithValue(error.response.data)
    
  }
}

)
export const logout=createAsyncThunk('auth/logout',async(user,ThunkAPI)=>{

    localStorage.removeItem('user')
    return null

})
export const AuthSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:(state)=>{
            state.loading=false;
            state.success=false;
            state.Error=null;
            state.message="";
        }


    },
    extraReducers:(builder)=>{
        builder.addCase(register.pending,(state)=>{

            state.loading=true;

        }).addCase(register.fulfilled,(state,action)=>{
            state.loading=false;
            state.success=true;
            state.user=action.payload;
            state.message="User registered successfully"

        }
        ).addCase(register.rejected,(state,action)=>{

            state.Error=action.payload;
            state.loading=false;
            state.success=false;
            state.message="User registration failed"
        }
        ).addCase(login.pending,(state)=>{

            state.loading=true;

        }).addCase(login.fulfilled,(state,action)=>{
            state.loading=false;
            state.success=true;
            state.user=action.payload;
            state.message="User registered successfully"

        }
        ).addCase(login.rejected,(state,action)=>{

            state.Error=action.payload;
            state.loading=false;
            state.success=false;
            state.message="User registration failed"
        }
        ).addCase(logout.pending,(state)=>{
            state.loading=true;

        }
        ).addCase(logout.fulfilled,(state,action)=>{
            state.loading=false;
            state.success=true;
            state.user=null;
            state.message="User logged out successfully"

        }).addCase(logout.rejected,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
            state.success=false;
            state.message="User logout failed"
        })




    }
})
export const {reset}=AuthSlice.actions;
export default AuthSlice.reducer;