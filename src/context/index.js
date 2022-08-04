import { createContext, useContext, useState } from "react";


export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {

    const [showDrawer, setShowDrawer] = useState(false);

    const value = {
        showDrawer,
        setShowDrawer,
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

