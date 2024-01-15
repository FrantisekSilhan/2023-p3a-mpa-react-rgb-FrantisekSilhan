import { PropsWithChildren, createContext, useState } from "react";

type colorType = { R: number, G: number, B: number };

type stateType = { 
    color: colorType
    changeColor: (color: colorType) => void
};

const initialState: stateType = { 
    color: {R: 0, G: 0, B: 0 }, 
    changeColor: (color: colorType) => { console.log(color)} 
};

export const Context = createContext(initialState);

export const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [color, setColor] = useState<colorType>({R: 0, G:0, B: 0});

    
    return (
        <Context.Provider value={{color, changeColor: setColor}}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;