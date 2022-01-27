// 
export default{
  totalSize(state){
    return state.cartgoods.length
  },
  completeSize(state){
  return state.cartgoods.reduce((preTotal, todo) => preTotal + (todo.complete?1:0),0)
    
    
  },
  isAllSelect(state,getters){
    return getters.completeSize===getters.totalSize && getters.completeSize>0
  } 
}