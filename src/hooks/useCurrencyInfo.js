import axios from "axios";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    let [data, setData] = useState({});
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

         fetch(url)
         .then((response)=> response.json())
         .then((res)=> setData(res[currency]))
         ;
        // console.log(res);
       
        
    }, [currency])

    return data
}

export default useCurrencyInfo;