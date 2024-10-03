import React, { createContext } from "react";
import { useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {

  const [loading,setLoading]=useState(false)
  const [enabledFlags,setEnabledFlags]=useState({})


  async function fetchFeatureFlags(){
    try{
        //original service call
        setLoading(true)
      const response=await featureFlagDataServiceCall()
      setEnabledFlags(response)
      console.log(response)
      setLoading(false)
    }catch(error){
      console.log(error)
      setLoading(false)
      throw new Error(error)
     
    }
  }

  useEffect(()=>
    {
      fetchFeatureFlags();
    },[])
    return (
        <FeatureFlagsContext.Provider value={{loading,enabledFlags}}>
          {children}
        </FeatureFlagsContext.Provider>
      );
  
  
}
