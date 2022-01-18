<template>
<div>
  <nav-top title="超市"/>
  <div class="swiper">
    <img src="//m.360buyimg.com/babel/jfs/t1/160171/9/25685/82914/61d3c462Eea4c05a6/293fd30a80b2280b.jpg!q70.webp" alt="">
    <span class="iconfont icon-fangdajing"></span>
    <input type="text" value="一站式囤生活好物">
  </div>
  <img  src="//m.360buyimg.com/mobilecms/jfs/t1/196032/28/13100/15389/60ee4226Ee75cd8d2/76adde63b84594fa.png!q70.webp" alt="">
  <img src="//m.360buyimg.com/mobilecms/jfs/t1/138448/2/26953/295498/61d445e3E5de65fc4/bd4f61a6689440f4.gif!q70.webp" alt="">
  <div class="swiper_list">
    <ul>
      <li v-for="item in 10">
        <img src="//m.360buyimg.com/babel/jfs/t1/100497/39/6915/40960/5df83a38E63a4c981/8440898b6ffe9230.png!q70.webp" alt="">
        <span>时令生鲜</span>
      </li>
    </ul>
  </div>
  <div class="fenge"></div>
  <div class="qiang">
    <div class="title">
      <span>超市抢购</span>
      <span>拼手术抢惊喜</span>
    </div>
    <div class="timelist">
      <ul>
        <li v-for="item in 4">
          <span>18:00</span>
        </li>
      </ul>
    </div>
    <div class="content_list">
      <ul>
        <li v-for="item in 10">
          <img src="//m.360buyimg.com/n1/s333x333_jfs/t1/171345/28/25767/294403/61a0775eE79d2cdd5/21b0b2e2c5a5f32d.jpg.dpg!q70.webp" alt="">
          <span class="hao">好评率95%</span>
          <span>一袋惦记 脆脆虾椒盐味30g非油炸无防腐剂低温烘焙孕妇儿童高蛋白海鲜零食特色虾干休闲小吃营养辅食</span>
          <span>￥34.9</span>
          <div class="footer">
             <span id="quan">￥9.9</span>
             <div class="shop">
               <img src="data:image/png;base64,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" alt="">
             </div>
          </div>
         
        </li>
      </ul>
    </div>
    <div class="fenge"></div>
   
  </div>
   <div class="tui">
      <div class="title">
        <span>为你推荐</span>
        <span>逛一逛</span>
      </div>
      <div class="list_tabs">
        <ul>
          <li v-for="item in 20">超市精选</li>
        </ul>
      </div>
      <div class="img_for">
        <div class="top">
            <img src="//m.360buyimg.com/babel/jfs/t1/210903/8/14480/129508/61cebc99E807f0511/421a9b38e24fc75a.png!q70.webp" alt="">
            <ul>
              <li v-for="item in 2">
                <img src="//m.360buyimg.com/n1/s333x333_jfs/t1/171345/28/25767/294403/61a0775eE79d2cdd5/21b0b2e2c5a5f32d.jpg.dpg!q70.webp" alt="">   
                <p class="dai">一袋惦记 脆脆虾椒盐味30g<br/>非油炸无防腐剂低温烘焙孕妇儿童高蛋白海鲜零食特色虾干休闲小吃营养辅食</p>
                <div class="footer">
                  <span id="quan">￥449</span>
                  <div class="shop">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAACTFBMVEUAAAD/////a2v8YTf3USD3Uhf4VRz7TBj5UR33Thb9TBr+ThX4Tyb8Sxf3SxT1UBr7TR35TRr4Thj6Rhb6UBP6Rxb7Rhb7VhT9TBX8aQ/6Rxf6SBX7YA/6Rhb6Rhb6RxX7XhH7Shb6Rhb7TRX6RxX6ShT7Rxb9aA/6SBf8YRD9Uhb6TBT7TRb6TBT7VhL8aA/7WRH8Yw/8aA75Rhf6TRX5Rhb7YRH7TBT7ag78YBD7UxP8aA78YRH8aQ77YBH5Rhf7WhH7ZRH6WBL7Rhj7UhT8Rxb8RRX7VBP7YRD7WRL8ag/7Zg/7XBP7VhP7URT6RxX4SBX6UxT8SBf9ZRH7UxT6Rxf6Shf9Zw79VRP6RRb8Zw78RRf7Zw/6TBb5Rhb////6TRT6TxP6ShX6UhP7XxD6XBH6WRH7XhD6VhP6TBT6URP6VBL6VhL6SRX7Yg/7Zw76WxH7YRD6WBL6SBf7Yw/6ZQ77ZA/7Zg/7ZQ/6RxX7YRH8oIT8lnn8m3b8aA78pIT8p4P6djz6cjz6YDP++fj9vqr8mHf8nnT6bTz7XBL7WhL++/n+9/X+9fH+4tj90Lv9xbD8sZz8poz7iWb7elP6ZT36aTz6XTD6bC76aC7+7ej+6+T+59/918391cv9ybj8uKH9tZf8qoT7jXD7lGf6flz6a0L6ZTD5ZC/5VSn5Uyb6UCD6YBr+/v7908T9z8P8q5X8r4/7oon7m4D7lXL6e1n6dFH7g0z6cUr7fEL+7+r9283928z8onr8ilT7dkT5WC36byz5Vxz6XBC12sQTAAAAXnRSTlMAAQIEDgoIFBAXGwwGHxgTER0a6iirdiUi8+7m3NbQtWQ49OnBiIJ/YU0++/fw8O/r6ufh3dzVzMq+vbWzpZmSjIt7WlJQSPPt5OTY1ayqnpyamXdycG9qaWdZTkM18tz/oAAABOFJREFUSMd9lmdfE0EQxtfk0iAhBaSJCvbee++993ojSpMgFyMhsRulqEgRUbBXOvbe2xdz9jaXvdydzAvekP/vmX1mn5slCTWAlslkOrhz24gZwydMGD5j3tYdeWaTSf4H+V8xyrl/YLYonjh2+OjRQ/n5+UeO+CdtXGFlbD+YJT1VxKLg4UMULEXSXzJlmYWjBph5zHSEFPAokqWlR/wlJWVlRWtzYx0bcauGiLE6yVo9JCuW+MuCRUWBDWPx9BqSWTKKQYyMgaUIomIweDUQKFzCRDWcMJBjvFVqjp8pFhYWL7ArJOdc2KYeZOagJAMLZmUwknOZg9QYH4dsTpmseAXBgqmM5H1yPZ2rXBHB47M8MZKNgZ+Pm4Nz5K5SsLi44NTx8gVORsoc+qkHuTl0jleLmGJ5xVLZW0K5VcrPexNaZYJ0HHHFgvLyitBYJClotioHrIYH77WKaA5tNVh0lSqeQsXK9VYzgvSeKTL3AeCp0TiYImu1MhTZjcckJrMwXQFbq+ugQX1z8mVFBFExEKAgVQxNs5tNxOxMF3k9gue9akV2xrISrlhREYqERzvNxGxJVYFPAT6IYs+Z06zOy3VBrtrPimJYmiyYiXOlqKoOgLfUJMP6UXyKtRqS9jmJNfFuV0GTKL59bgg+YeOIRMLSfCuxZMsEN/Ye/u1ubb2E1dnV1dl5G6utra0W4JnSakjKEkiemFDXAXoM8/gY4DfOUR6HJJ07QBRPuTsthnn8Bndj5kRCYUkaTbYkgjcBThvlsa8OmpSbQ8GFZIQmTtegySiPHwFqFcVwWDo3h8zUxOIB3DXK4xOAaAzEaUjSOpIq6tzpNshjI9TH8lhZGUHFLDJMA94AeK/PY7AeGgvj5khoKwe5O2/0eYzi+JU8yuM4p2tVvAYP9XnE8X+M5xHNkbJ05ogv4I4+jw+hro/nERWn4Tg09QrgF1Xsbe1ouVFz/nF149d79QCNPI/0jHPIZlHvTrsoNl+DhKr6zPNIXV1I0rXgJYBmUbzDkbsNL5peR/GDzPNIr9w4UVv11J2WR9ff1Nxoudj1R54H+8rxPEpjiS1bC76EL/r9SMG/PI9ZKcQ91MCdDzdv3sK6TOsiVjTapm41JM13E/dyLdgORvUdXeV5zHUTjy9Vu29eGoGPA4U8j5O9HmK3jRK1ZPsZuWpqas7GqvZZH4LxPC612YngdvHV2P9+jOdxaqZNIILHsUvPdRvuRyWP2x0egVjsNt9gDdbzAO58UvL4s6GqOkgV43nM8drsycQiuB1aY5sB4L6SxwYAeKfej5Fch1uwEGsySi7WfQXgnpJHemlfq/fjIh8KWomTSiYl3oKOKoAzSqweAdRFVftxrpcKOomZSqZkJB7z0rtP8Tz6nzVfVO3HnLQUKojbCiU9Dl8evwb97sc143wOT7IF1xxucrnZPK7Zz37MGZeEjaKgieADVW42KS3hnPy9ytLBLsDctCS5UbrKB5iwWZl0cW9171Xm6iIX5Wij8qtDbtaDpHcMb9cgjzm5lPMIFmyUgmoyM33Q/96rU5ZlelUcggpptzl8XlfayGyj9+qkJWkur89hs8c4BBUSz+l2oKgrY+/QYYn7cfW8PYglpTjc9mTOqUjBg6KIujJXjhw4e9DE8eMnDp+9aeSKDBdiKOcRVNw/H+/ynRJ1flsAAAAASUVORK5CYII=" alt="">
                  </div>
                </div>   
              </li>
            </ul>
        </div>
        <div class="bottom">
            <ul>
              <li v-for="item in 20">
                <img src="//m.360buyimg.com/n1/s333x333_jfs/t1/171345/28/25767/294403/61a0775eE79d2cdd5/21b0b2e2c5a5f32d.jpg.dpg!q70.webp" alt="">   
                <p class="dai">一袋惦记 脆脆虾椒盐味30g<br/>非油炸无防腐剂低温烘焙孕妇儿童高蛋白海鲜零食特色虾干休闲小吃营养辅食</p>
                <div class="footer">
                  <span id="quan">￥449</span>
                  <div class="shop">
                    <img src="data:image/png;base64,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" alt="">
                  </div>
                </div>   
              </li>
            </ul>
         
        </div>
      
        
         
        </ul>
      </div>
    </div>
</div>
  

</template>



<script>
import NavTop from '../../pages/common/home.vue'
export default {
  components:{
    NavTop
  }
}
</script>


<style lang="stylus" scoped>
.swiper
  height 241px
  width 100%
  position relative
  padding-bottom 51.49%
  height 0
  overflow hidden
  img
    width 100%
  span
    top 15px
    left 27px
    position absolute
    font-size 20px
    color #c8c8c8 
    display inline-block
    z-index 2
  input
    font-size 18px
    color #c8c8c8 
    text-indent 3em
    position absolute
    left 15px
    top 5px
    width 414px
    line-height 41px
    border-radius 15px
    backgronud-color #fff
img
  width 100%
.swiper_list
  padding 12px 25px 10px
  background-color #fff
  ul
    display flex
    flex-wrap wrap
    li
      display flex
      flex-flow column
      margin 0 5px 9px 0 
      img
        width 72px
        height 72px
      span
        padding 7px 0 
        font-size 13px
    li:nth-child(5n)
      margin-right 0
.fenge
  height 8px
  width 100%
  background-color #f6f6f6
.qiang
  padding 10px 10px 10px
  background-color #fff
  .title
    display flex
    & span:nth-child(1)  
      font-size 23px
      font-weight 900px
      color black
      position relative
      margin-right 15px
      &:after
        position absolute
        content ''
        display block
        height 16px
        width 2px
        background-color #a8a8a8
        right -8px
        top 4px
    & span:nth-child(2)      
      font-size 13px
      color #c8c8c8
      margin-top 5px
  .timelist
    margin-top 15px
    margin-bottom 30px
    ul
      display flex
      li
        width 101px
        line-height  26px 
        text-align center
        margin-right 11px
        background-color #f6f6f6
        font-size 19px
        color #a8a8a8
        border-radius 10px
      & li:nth-child(4)
        margin-right 0 
      & li:nth-child(1) 
        background-color #ff9d7e
        color #fff
  .content_list
    width 100%
   
    ul
      display flex
      overflow-x: scroll;
      overflow-y: hidden;
      padding-bottom: 25px;
      
     
      li
        display flex
        flex-flow column
        width 160px
        padding 0 5px
        box-sizing border-box
        img
          width 143px
          height 121px
        .hao
          font-size 12px
          width 96px
          height 26px
          border-radius 9px 9px 9px 0
          line-height 26px
          text-align center
          background-color #f7e8e2
          margin-top -9px
          color red
        & span:nth-of-type(2)
          width 100%
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size 12px
          padding 7px 0 12px 0
        & span:nth-of-type(3)
          text-decoration:line-through
          color #c8c8c8
          font-size 12px
          margin-bottom 5px
        .footer
          display flex
          #quan
            font-size 30px
            margin-left -5px
            margin-right 13px
          .shop
            width 30px
            height 30px
            background-color #fa4e13
            border-radius 30px
            img
              width 100%
              height 100%
.tui
  height 1000px
  padding 5px 8px
  .title
    display flex
    & span:nth-child(1)  
      font-size 23px
      font-weight 900px
      color black
      position relative
      margin-right 15px
      &:after
        position absolute
        content ''
        display block
        height 16px
        width 2px
        background-color #a8a8a8
        right -8px
        top 4px
    & span:nth-child(2)      
      font-size 13px
      color #c8c8c8
      margin-top 5px
  .list_tabs
    margin-top 20px
    font-size 18px
    ul
      display flex
      overflow-x: scroll;
      overflow-y: hidden;
      padding-bottom: 9px;
      display: -webkit-box;
      li
        margin-right 21px  
        width 85px
        height 38px 
  .img_for
    .top
      display flex
      img
        width 140px
        height 246px
        margin-right 27px
      ul
        display flex  
        li
          margin-top -20px
          img
            width 130px
            height 154px
          .dai
            font-size 12px
            white-space nowrap
            overflow hidden 
            text-overflow ellipsis
            width 130px
            margin 25px 0 21px
          .footer
            display flex
            position relative
            .quan
              font-size 18px
              margin-right 57px
            .shop
              width 25px
              height 25px
              background-color #fa4e13
              border-radius 25px
              display flex
              position absolute
              top -4px
              right  40px
              img
                width 100%
                height 100%
    .bottom
     
      ul
        display flex
        flex-wrap wrap
        li
          list-sytle:none !import
          margin-right 15px
          img
            width 130px
            height 154px
          .dai
            font-size 12px
            white-space nowrap
            overflow hidden 
            text-overflow ellipsis
            width 130px 
            margin 25px 0 21px
          .footer
            display flex
            position relative
            .quan
              font-size 18px
              margin-right 57px
            .shop
              width 25px
              height 25px
              background-color #fa4e13
              border-radius 25px
              display flex
              position absolute
              top -4px
              right  0
              img
                width 100%
                height 100%
        li:nth-child(3n)      
          margin-right 0
</style>