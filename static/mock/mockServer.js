import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口
Mock.mock('/goods', {code:0, data: data.goods})
Mock.mock('/shagoods', {code:0, data: data.SecKillGoods})