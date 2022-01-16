import { RECEIVE_USER_INFO } from "./mutation-type";

export default{
  getUserinfo({commit},userinfo){
    commit(RECEIVE_USER_INFO,{userinfo})
  }
}