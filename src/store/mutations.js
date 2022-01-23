
import { RECEIVE_USER_INFO,
  RECEIVE_LOGIN_OUT,
  RECEIVE_GOODS,
  RECEIVE_CARTGOODS,
  RECEIVE_SHAGOODS,
  CARTGOODS_DELETE,

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
  },
 
  [RECEIVE_GOODS](state,{goodslist}){
    state.goods = goodslist
  },
  [RECEIVE_SHAGOODS](state,{miaoshagoods}){
    state.shagoods = miaoshagoods
  },
  [CARTGOODS_DELETE](state,{index}){
    state.cartgoods.splice(index,1)
  }
}
