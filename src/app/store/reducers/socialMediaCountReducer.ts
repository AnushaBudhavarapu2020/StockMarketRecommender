const initialState: number = 0;

let socialMediaCountReducer: Reducer<number> = (state: number, action: Action) => {
    if(!state)
        state= initialState;
    if (action.type === 'SET'){
        state = action.payload;
    }
    return state;
}

export default socialMediaCountReducer;