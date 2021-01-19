import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import adminReducer from "./adminReducer";
import guestReducer from "./guestReducer";
import userReducer from "./userReducer";

export default combineReducers({
  cart: cartReducer,
  admin: adminReducer,
  guest: guestReducer,
  user: userReducer,
});
