const initialState = [];

const storeTheInfo = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN": {
            return action.payload
        };
        default: return state;
    }
}

export default storeTheInfo;