import { RECEIVE_USER_INFO,RECEIVE_LOGIN_OUT } from "./mutation-type";

export default{
  getUserinfo({commit},userinfo){
    commit(RECEIVE_USER_INFO,{userinfo})
  },
  loginout({commit}){
    commit(RECEIVE_LOGIN_OUT)
  }
}