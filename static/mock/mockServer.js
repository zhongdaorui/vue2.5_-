import Mock from 'mockjs'
import data from './data.json'
//从实例中拿到Random方法
var Random = Mock.Random;

// 返回goods的接口
Mock.mock('/goods', {code:0, data: data.goods})
Mock.mock('/shagoods', {code:0, data: data.SecKillGoods})
Mock.mock('/delivery', {code:0, data: data.addresslist})
//分类的数据
var category = Mock.mock('/category', {
    'aside|24':[{
      'title':'@cname',
      'list|60':[{
        'title':'@last',
        'imgPath':Random.image('2000x2000','#5169b4','#FFF','png',''),
      }]
    }]
});