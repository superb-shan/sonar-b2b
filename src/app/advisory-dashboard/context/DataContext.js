import { createContext, useContext, useEffect, useState } from "react";
const DataContext = createContext();

export function DataContextProvider(props) {
    const [navOpen, setNavOpen] = useState(true);
    const [showNote, setShowNote] = useState(false);
    const [showMonthlyDetails, setShowMonthlyDetails] = useState(false)
    const [deletePopup, setDeletePopup] = useState('')

    return(
        <DataContext.Provider value={{navOpen, setNavOpen, showNote, setShowNote, deletePopup, setDeletePopup, showMonthlyDetails, setShowMonthlyDetails}}>
            {props.children}
        </DataContext.Provider>
    );
}

export const useDataContext = () => useContext(DataContext);