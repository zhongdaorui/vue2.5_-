
import { RECEIVE_USER_INFO } from "./mutation-type";


export default{
  [RECEIVE_USER_INFO](state,{userinfo}){
    state.userinfo = userinfo
   
  }
}
