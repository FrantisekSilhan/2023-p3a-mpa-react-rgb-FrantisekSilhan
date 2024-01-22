import { PropsWithChildren, createContext, useReducer } from "react";
import { actionType, colorChannel } from "./ReducerEnums";

type colorType = { R: number, G: number, B: number };

type stateType = { 
    color: colorType
};

type ColorsAction = {
    type: actionType.CHANGE_COLOR;
    value: number;
    part: colorChannel;
} | {
    type: actionType.REPLACE_COLOR;
    value: colorType;
} | {
    type: actionType.RESET_COLOR;
    part: colorChannel;
};

const colorsReducer = (state: stateType, action: ColorsAction) => {
    const newState = {...state};
    switch(action.type) {
        case actionType.CHANGE_COLOR:
            newState.color[action.part] = action.value;
            return newState;
        case actionType.REPLACE_COLOR:
            return newState;
        case actionType.RESET_COLOR:
            return {color: {R: 0, G: 0, B: 0}};
        default:
            return newState;
    }
};

const initialState: stateType = { 
    color: {R: 0, G: 0, B: 0 },
};

export const Context = createContext<[stateType, React.Dispatch<ColorsAction>]>([initialState, () => {}]);

export const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const reduce = useReducer(colorsReducer, initialState)
    
    return (
        <Context.Provider value={reduce}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;