import React, { createContext } from "react";
import { useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {

  const [loading,setLoading]=useState(false)
  const [enabledFlags,setEnabledFlags]=useState(null)


  async function fetchFeatureFlags(){
    try{
        //original service call
      const response=await featureFlagDataServiceCall()
      setEnabledFlags(response)
      console.log(response)
    }catch(error){
      console.log(error)
      throw new Error(error)
    }
  }

  useEffect(()=>
    {
      fetchFeatureFlags();
    },[])
    return (
        <FeatureFlagsContext.Provider value={{enabledFlags}}>
          {children}
        </FeatureFlagsContext.Provider>
      );
  
  
}
