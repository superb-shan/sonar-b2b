"use client"
import Content from "./Content";
import { DataContextProvider } from '../context/DataContext';

export default function  Partner() {
    
    return (
        
        <DataContextProvider>
            <Content />
        </DataContextProvider>

    );
}