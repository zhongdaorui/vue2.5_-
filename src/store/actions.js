import { RECEIVE_USER_INFO,
RECEIVE_LOGIN_OUT,
RECEIVE_GOODS,
RECEIVE_CARTGOODS,
RECEIVE_SHAGOODS,
CARTGOODS_DELETE,


} from "./mutation-type";

import {reqGoods,
  reqshaGoods} from '../api/index'
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
    console.log(result.data)
    if(result.code === 0){
      const miaoshagoods= result.data
      commit(RECEIVE_SHAGOODS,{miaoshagoods})
    }
   
  },
  deletecartshop({commit},index){
    commit(CARTGOODS_DELETE,{index})
  }

}