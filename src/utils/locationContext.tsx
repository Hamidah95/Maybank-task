import { createContext, useContext } from "react";

interface Location{
    latitude:number;
    longitude:number;
}

interface LocationContext{
    locationData:Location;
}

const LocationContext = createContext<LocationContext>({} as LocationContext);

export const LocationProvider = LocationContext.Provider;

export const useLocation = () => useContext(LocationContext);