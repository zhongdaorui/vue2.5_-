import ajax from "./ajax";

// 获取商品信息
export const reqGoods = () => ajax('/goods')
//获取秒杀商品信息
export const reqshaGoods = () => ajax('/shagoods')