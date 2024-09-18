import { useEffect, useState } from "react";

const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: false,
  showTreeView: true,
};

function featureFlagDataServiceCall() {
  const [loading,setLoading]=useState(false)
  const [enabledFlags,setEnabledFlags]=useState(null)


  async function fetchFeatureFlags(){
    try{
      const response=await featureFlagDataServiceCall
    }catch(error){
      console.log(error)
      throw new Error(error)
    }
  }

  useEffect(()=>
    {
      fetchFeatureFlags():
    },[])

  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occured! Please try again");
  });
}
export default featureFlagDataServiceCall;
