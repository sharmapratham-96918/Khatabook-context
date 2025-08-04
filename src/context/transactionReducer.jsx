export const  TransactionReducer = (state, action) => {
    if (action.type === "SAVE_TRANSACTION") {
        return {
            ...state,
            transactions: [action.payload, ...state.transactions],

        };
    } else if(action.type === "REMOVE_TRANSACTION"){
        return{
             ...state,
             transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
        }
    } else if (action.type === "EDIT_TRANSACTION"){
        return {
            ...state,
            edit:{ transactions: action.payload,isEdit: true
            }
        }
    } else if (action.type === "UPDATE_TRANSACTION"){
        return{
            ...state,
            transactions: state.transactions.map ((item ) => item.id === action.payload.id ? action.payload : item),
            edit : {transactions: {}, isEdit: false}
        }
    }
}