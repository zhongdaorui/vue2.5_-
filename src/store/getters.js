import validateSchema from "webpack/lib/validateSchema"




export default{
  totalSize(state){
    return state.cartgoods.length
  },
  completeSize(state){
  return state.cartgoods.reduce((preTotal, todo) => preTotal + (todo.complete?1:0),0)
  },
  isAllSelect(state,getters){
    return getters.completeSize===getters.totalSize && getters.completeSize>0
    console.log(state)
  },
  //总计的价格
    
   
      // //拿到数组中每个object中的count和price
      // state.cartgoods.forEach(element => {
      //   for(var item in element){
      //     var gprice = 0
      //     var count = 0
      //     var allprice = 0
      //     //向下取整
      //     gprice =Math.floor(element.price)
      //     count = element.count
      //     allprice = gprice*count
      //     //真正的总价格
      //     var sum = 0
      //     // console.log(allprice)
      //     // for(var i=1;i <= state.cartgoods.length;i++){
      //     //   sum += allprice 
      //     // }
        
      //   }
      //   for(var i=1;i <= state.cartgoods.length;i++){
      //    sum += allprice 
      //   }
      // console.log(sum)
      // return sum
     
      // });
    //   //  return  sum
    //   state.cartgoods.forEach(element =>{
    //     // totalPrice += val.number*val.price
    //     var totalPrice = 0
    //     const price = Math.floor(element.price)
    //     totalPrice += element.count*price
    //   })
    //   return  totalPrice
    // } 
}