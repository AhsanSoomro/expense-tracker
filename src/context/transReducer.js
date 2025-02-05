const TransactionReducer = (state, action)=>{
    switch (action.type) {
        case "ADD_TRANSACTION": 
            return [action.payload, ...state];
        case "DELETE_TRANSACTION": 
            return state.filter(Transaction => Transaction !== action.payload);
    default:
        return state;
    }
};

export default TransactionReducer;