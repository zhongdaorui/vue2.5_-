
import { RECEIVE_USER_INFO,
  RECEIVE_LOGIN_OUT,
  RECEIVE_GOODS,
  RECEIVE_CARTGOODS

} from "./mutation-type";



export default{
  [RECEIVE_USER_INFO](state,{userinfo}){
    state.userinfo = userinfo 
  },
  [RECEIVE_LOGIN_OUT](state){
    state.userinfo = {}
  },
  [RECEIVE_CARTGOODS](state,{goods}){
  state.cartgoods.push(goods)
  }
}
