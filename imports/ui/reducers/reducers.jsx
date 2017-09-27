import { combineReducers } from 'redux'
import {
  ADD_ITEM_TO_RETURN_LIST
} from '../actions/actions.jsx'
import {store} from '../../startup/client/index.js'

const initialState = {
  itemsToReturn: []
}

function returnItemsPage(state = initialState, action) {
  const sellersName = action.itemInfo && action.itemInfo.sellersName;
  const itemName = action.itemInfo && action.itemInfo.itemName;
  const quantityToReturn = action.itemInfo && action.itemInfo.quantityToReturn;
  switch (action.type) {
    case ADD_ITEM_TO_RETURN_LIST:
      return {
        ...state,

        itemsToReturn: [
          ...state.itemsToReturn,
          {
            sellersName: sellersName,
            itemName: itemName,
            quantityToReturn: quantityToReturn
          }
        ]
      }
    default:
      return state
  }
}
const returnItemsApp = combineReducers({
  returnItemsPage
})

export default returnItemsApp
