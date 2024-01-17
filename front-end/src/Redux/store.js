import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as mobileR } from "./Mobiles/reducer";
import { reducer as elecR } from "./Electronics/reducer";
import { reducer as womenclothReducer } from "./Womencloth/reducer";
import { reducer as singleprod } from "./Singleproduct/reducer";
import { reducer as cartdata } from "./Cart/reducer";
const rootReducer = combineReducers({
  mobileR,
  elecR,
  womenclothReducer,
  singleprod,
  cartdata,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
