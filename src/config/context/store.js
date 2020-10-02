import React, {createContext, useReducer} from 'react';

const initialState = {
};
const store = createContext(initialState);
const { Provider } = store;


const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
      switch(action.type) {
        case 'CHOOSE_LENGTH':
          const newState = { panjang : action.value }
          return newState;
        case 'GENERATOR_PASS':
            const newPass = {...state, pass : action.value }
            return newPass;
        default:
          throw new Error();
      };
    }, initialState);

    // console.log("ini nilai di store", state)
  
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
  };
  
  export { store, StateProvider }