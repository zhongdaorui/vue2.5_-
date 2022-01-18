
import { RECEIVE_USER_INFO,
  RECEIVE_LOGIN_OUT

} from "./mutation-type";



export default{
  [RECEIVE_USER_INFO](state,{userinfo}){
    state.userinfo = userinfo 
  },
  [RECEIVE_LOGIN_OUT](state){
    state.userinfo = {}
  }
}
