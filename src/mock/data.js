// 用mockjs模拟生成数据
var Mock = require('mockjs');

module.exports = () => {
  // 使用 Mock
  var data = Mock.mock({
    'course|10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1000,
        course_name: '@title(5,10)',
        autor: '@cname',
        college: '@ctitle(6)',
        'category_Id|1-6': 1
      }
    ],
    'course_category|6': [
      {
        "id|+1": 1,
        "pid": -1,
        cName: '@ctitle(4)'
      }
    ],
    'GoodsDetails|10':[{
      'goods_id|+1':'100',
      'goods_name':'@name',
      'manufacturer|1':["小华","超超","月月"],
      'category_id|1':[1,2,3,4,5,6,7,8,9],
      'activity|1':["A","B","c","D"],
      'activity_color':'@color',
      'goods_image':Random.image('200x100', '#FF6600')
    }]
  });
  // 返回的data会作为json-server的数据
  return data;
};
