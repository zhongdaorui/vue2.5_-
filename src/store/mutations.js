
import { RECEIVE_USER_INFO,
  RECEIVE_LOGIN_OUT,
  RECEIVE_GOODS,
  RECEIVE_CARTGOODS,
  RECEIVE_SHAGOODS,
  CARTGOODS_DELETE,
  RECEIVE_ADDRESS,
  ADD_ADDRESS,
  UPDATA_ADDRESS,
  DELETE_ADDRESS,
  SELECT_ALL_TODOS

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
  },
  [ RECEIVE_ADDRESS](state,{addressslist}){
    state.address = addressslist
  },
  
  
  [ADD_ADDRESS](state,{...addresslist}){
   
    state.address.push(addresslist)
  
 
  },
  [UPDATA_ADDRESS](state,{index,...AddressList}){
    
    state.address.splice(index,1,AddressList)
  },
  [DELETE_ADDRESS](state,{index}){
    state.address.splice(index,1)
  },
  [SELECT_ALL_TODOS] (state, {isCheck}) {
    state.cartgoods.forEach(todo => todo.complete = isCheck)
  },
}
