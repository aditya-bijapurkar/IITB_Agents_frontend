import React, { useState } from 'react'
import {Box, Typography, Paper, IconButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import {fetchTemperature} from "../../utils/fetcher";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
    const [location, setLocation] = useState("");
    const [minTemp, setMintemp] = useState(0);
    const [maxTemp, setMaxtemp] = useState(0);

    const [temp, setTemp] = useState(0);
    
    const getTemperatureData = async () => {
        setTemp(null);
        
        const res = await fetchTemperature();
        const res_temp=res.temperature;
        
        console.log("backend response: ", res_temp);

        setTemp(res_temp);

    }

    const notifyCorrect = () => toast.success("You are under correct temperature",{
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });
    const notifyLow = () => toast.info(`Current temperature is too low: ${temp}°C`,{
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyHigh = () => toast.warn(`Current temperature is too high: ${temp}°C`,{
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });

    const onhandleSubmit = (e)=> {
        e.preventDefault();

        getTemperatureData();

        if(minTemp<=temp && maxTemp>=temp)
            notifyCorrect();
        else if(minTemp>temp){
            notifyLow();
        }
        else if(maxTemp<temp)
            notifyHigh();
    }

  return (
    <>
    <Box
        style={{
            display: "flex",
            justifyContent: "space-between",
            height: "60vh",
            flexDirection: "column",
            paddingTop: "50px",
        }}
    >
        <Typography
            variant="h4"
            fontWeight={900}
            color="white"
            mb={3}
            display="flex"
            justifyContent="center"
        >
            Enter Details
        </Typography>
        <Paper
            component="form"
            onSubmit={onhandleSubmit}
            sx={{
                boxShadow: "none",
                border: "1px solid #e3e3e3",
                pl: 2,
                backgroundColor: "black",
                border: "none"
            }}
        >
            <Box
                style={{
                    display: "flex",
                    height: "30vh",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <span className='input-span'>
                    <label for="location" style={{color: "white", padding: "5px", fontSize: "25px"}}>Enter Location: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</label>
                    <input type="text" className='input-box' placeholder='Enter Location' id='location' name='location'
                         onChange={(e)=> setLocation(e.target.value)}/>
                </span>
                <span className='input-span'>
                    <label for="min-temp" style={{color: "white", padding: "5px", fontSize: "25px"}}>Minimum Temperature:</label>
                    <input type="number" className='input-box' id='min-temp' name='min-temp'
                         onChange={(e)=> setMintemp(e.target.value)}/>
                </span>
                <span className='input-span'>
                    <label for="max-temp" style={{color: "white", padding: "5px", fontSize: "25px"}}>Maximum Temperature:</label>
                    <input type="number" className='input-box' id='max-temp' name='max-temp'
                         onChange={(e)=> setMaxtemp(e.target.value)}/>
                </span>
            </Box>
            <br />
            <IconButton
                type="submit"
                sx={{ p: "10px", color: "white" }}
                aria-label="search"
            >
                <Typography><pre>Submit </pre></Typography>  
                <SendIcon />
            </IconButton>
        </Paper>
    </Box>
    <ToastContainer/>
    </>
  )
}

export default HomePage
