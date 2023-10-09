import axios from "axios";

const BACKEND_URL = "http://127.0.0.1:8000/get-temp";


async function getTemp(){
    const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const temperature = await res.json();
    
    return temperature;
}

export const fetchTemperature = async () => {
    const data = await getTemp();
    return data;
}