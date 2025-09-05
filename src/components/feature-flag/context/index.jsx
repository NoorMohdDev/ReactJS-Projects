import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data.js";

// eslint-disable-next-line react-refresh/only-export-components
export const FeatureFlagContext = createContext(null) 

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});
  
    async function fetchFeatureFlags() {
      try {
        setLoading(true);
        //original service call
        const response = await featureFlagsDataServiceCall();
        setEnabledFlags(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        throw new Error(error);
      }
    }
  
    useEffect(() => {
      fetchFeatureFlags();
    }, []);
  
    return (
      <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
        {children}
      </FeatureFlagContext.Provider>
    );
  }
