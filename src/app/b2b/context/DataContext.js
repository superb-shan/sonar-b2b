import { createContext, useContext, useEffect, useState } from "react";
import dummmyData from "../components/partner/PartnerHome/dummyData";
const DataContext = createContext();

export function DataContextProvider(props) {

    const [data, setData] = useState();
    const [portfolioData, setPortfolioData] = useState();
    const [investorList, setInvestorList] = useState();
    const [deletePopup, setDeletePopup] = useState();
    const [investor, setInvestor] = useState()
    const [sip, setSip] = useState(false)
    const [addScheme, setAddScheme] = useState(false)
    const [viewPortfolioScheme, setViewPortfolioScheme] = useState(false)
    const [addSchemeList, setAddSchemeList] = useState([])
    const [notificationMessage, setNotificationMessage] = useState(false)

    useEffect(() => {
        let str = localStorage.getItem('data');

        if (str == null) {
            dummmyData();
        }

        const {data} = JSON.parse(localStorage.getItem('data'));
        setData( data )

        str = localStorage.getItem('portfolioData');
        
        if (str == null) {
            localStorage.setItem('portfolioData', JSON.stringify({portfolioData: [
                ['Aggressive', 'Domestic Investor', [
                    [ 'ICICI Prudential Nifty Next 50 Index Fund - Growth', 5, 3.58, 18.51, 18.51],
                    [ 'Axis Focused 25 Fund - Regular Plan - IDCW', 5, 0.53, 12.64, 7.22],
                    [ 'Edelweiss Emerging Markets opportunities Equity Offshore Fund - Regular Plan - Growth', 5, 6.17, -1.54, 2.51],
                ]],
                ['Fd Test', 'Domestic Investor', []],
                ['Port', 'Domestic Investor', []],
                ['Port2', 'Domestic Investor', []],
                ['Port5', 'Domestic Investor', []],
                ['Single', 'Domestic Investor', []],
            ]}));
        }
        
        const {portfolioData} = JSON.parse(localStorage.getItem('portfolioData'));
        setPortfolioData(portfolioData);
    }, [])

    function saveData(data) {
        setData(data);
        localStorage.setItem('data', JSON.stringify( {data} ));
    }

    function savePortfolioData (data) {
        setPortfolioData(data);
        // localStorage.setItem('portfolioData', JSON.stringify( {portfolioData} ));
    }


    return(
        <DataContext.Provider value={{data, saveData, investorList, setInvestorList, deletePopup, setDeletePopup, investor, setInvestor, sip, setSip, addScheme, setAddScheme, viewPortfolioScheme, setViewPortfolioScheme, portfolioData, savePortfolioData, addSchemeList, setAddSchemeList, notificationMessage, setNotificationMessage }}>
            {props.children}
        </DataContext.Provider>
    );
}

export const useDataContext = () => useContext(DataContext);