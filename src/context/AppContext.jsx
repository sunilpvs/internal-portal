import {createContext, useEffect, useState} from "react";
import {getUserDetails} from "../services/auth/userDetails";

export const AppContext = createContext();

const initialUserData = null;

export const AppContextProvider =({children}) => {

    const [userData, setUserData] = useState(initialUserData);
    const [isLoading, setIsLoading] = useState(true);


    
    useEffect(() => {
        const fetchUser = async () => {
            try{
                const response = await getUserDetails();
                setUserData(response.data.userData);
            }catch(error){
                console.warn("User Not Authenticated");
                setUserData(initialUserData);
            }finally{
                setIsLoading(false);
            }
        };
        fetchUser();
    }, []);


    const contextValue = {
        userData, setUserData, isLoading
    }

    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

