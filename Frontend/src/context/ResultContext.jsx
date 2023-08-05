import React, { createContext, useState } from 'react';

export const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
    const [result, setResult] = useState([]);
    const [result2, setResult2] = useState([]);
    const [result3, setResult3] = useState([]);
    const [result4, setResult4] = useState([]);
    const [result5, setResult5] = useState([]);
    const [result6, setResult6] = useState([]);
    const [result7, setResult7] = useState([]);
    const [result8, setResult8] = useState([]);
    const [result9, setResult9] = useState([]);
    const [result10, setResult10] = useState([]);
    const [result11, setResult11] = useState([]);
    // Define more result states as needed

    const [tempResult, setTempResult] = useState([]);
    const [tempResult2, setTempResult2] = useState([]);
    const [tempResult3, setTempResult3] = useState([]);
    const [tempResult4, setTempResult4] = useState([]);
    const [tempResult5, setTempResult5] = useState([]);
    const [tempResult6, setTempResult6] = useState([]);
    const [tempResult7, setTempResult7] = useState([]);
    const [tempResult8, setTempResult8] = useState([]);
    const [tempResult9, setTempResult9] = useState([]);
    const [tempResult10, setTempResult10] = useState([]);
    const [tempResult11, setTempResult11] = useState([]);

    // Define more tempResult states as needed

    return (
        <ResultsContext.Provider
            value={{
                result,
                setResult,
                result2,
                setResult2,
                result3,
                setResult3,
                result4,
                setResult4,
                result5,
                setResult5,
                result6,
                setResult6,
                result7,
                setResult7,
                result8,
                setResult8,
                result9,
                setResult9,
                result10,
                setResult10,
                result11,
                setResult11,
                // Add more result states and setters as needed
                tempResult,
                setTempResult,
                tempResult2,
                setTempResult2,
                tempResult3,
                setTempResult3,
                tempResult4,
                setTempResult4,
                tempResult5,
                setTempResult5,
                tempResult6,
                setTempResult6,
                tempResult7,
                setTempResult7,
                tempResult8,
                setTempResult8,
                tempResult9,
                setTempResult9,
                tempResult10,
                setTempResult10,
                tempResult11,
                setTempResult11,
                
                // Add more tempResult states and setters as needed
            }}
        >
            {children}
        </ResultsContext.Provider>
    );
};
