import { RECEIVE_USER_INFO,
RECEIVE_LOGIN_OUT,
RECEIVE_GOODS,
RECEIVE_CARTGOODS,
RECEIVE_SHAGOODS,
CARTGOODS_DELETE,
RECEIVE_ADDRESS ,
ADD_ADDRESS ,
UPDATA_ADDRESS,
DELETE_ADDRESS,
SELECT_ALL_TODOS

} from "./mutation-type";

import {reqGoods,
  reqshaGoods,
  reqAddress} from '../api/index'
export default{
  getUserinfo({commit},userinfo){
    commit(RECEIVE_USER_INFO,{userinfo})
  },
  loginout({commit}){
    commit(RECEIVE_LOGIN_OUT)
  },
  updatecartgoods({commit},goods){
    commit(RECEIVE_CARTGOODS,{goods})
  },
  //获取商品
  async getgoods({commit}){
    const result =await reqGoods();
    if(result.code === 0){
      const goodslist = result.data
      commit(RECEIVE_GOODS,{goodslist})
    }
   
  },
  async getshagoods({commit}){
    const result =await reqshaGoods();
    if(result.code === 0){
      const miaoshagoods= result.data
      commit(RECEIVE_SHAGOODS,{miaoshagoods})
    }
   
  },
  deletecartshop({commit},index){
    commit(CARTGOODS_DELETE,{index})
  },
  //异步获取收货列表
 async getaddress({commit}){
  const result =await reqAddress();
  if(result.code === 0){
    const addressslist = result.data
    commit(RECEIVE_ADDRESS,{addressslist})
  }
  },
  //添加收货地址信息
  
  addAddress({commit},{...addresslist}){
    
    commit(ADD_ADDRESS,{...addresslist})
  },
  //更新收货地址信息
  updateAddress({commit},{index,...AddressList}){
    commit(UPDATA_ADDRESS,{index,...AddressList})
 
  },
  //删除收货地址信息
  deleteAddress({commit},index){
    commit(DELETE_ADDRESS,{index})
  },
  selectAll ({commit}, isCheck) {
    commit(SELECT_ALL_TODOS, {isCheck})
  },

}