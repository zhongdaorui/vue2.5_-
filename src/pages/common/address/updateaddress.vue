<template>
  <div class="collect_message">
    <div class="common name">
      <span>收货人</span>
      <input type="text" placeholder="姓名" v-model="name" />
    </div>
    <div class="phone_number common">
      <span>联系方式</span>
      <span>+86</span>
      <span class="iconfont icon-jinrujiantou"></span>
      <input type="text" placeholder="手机号码" v-model="massageway" />
    </div>
    <div class="where common">
      <span>所在地区</span>
      <span v-for="(item, index) in nowarea" :key="index" class="city">{{
        item
      }}</span>
      <span class="iconfont icon-jiantouzuo" @click="showarealist"></span>
    </div>
    <div class="detailwhere common">
      <span>详细地址</span>
      <input
        type="text"
        placeholder="详细地址需填写楼栋楼层或房间号信息"
        v-model="detailarea"
      />
    </div>
    <div class="biaoqian">
      <em>地址标签</em>
      <span>公司</span>
      <span>家</span>
      <span>学校</span>
      <div>
        自定义
        <i></i>
      </div>
    </div>
    <div class="defaultdizhi">
      <span>设置默认地址</span>
      <div>
        <van-switch
          v-model="checked"
          active-color="red"
          inactive-color="#ccc"
        />
      </div>
      <div class="footer_button">
        <span @click="updateAddress">确认</span>
        <span @click="deletead">删除收货地址</span>
      </div>
    </div>
    <van-overlay :show="show" class="contain" @click="showarealist">
      <div class="wrapper" @click.stop>
        <van-area title="标题" :area-list="areaList" @confirm="queding" />
      </div>
    </van-overlay>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { Switch, Area, Overlay, AddressList } from "vant";
import { areaList } from "@vant/area-data";
export default {
  data() {
    return {
      checked: true,
      areaList,
      list: [],
      show: false,
      listaddress: {},
      massageway: 0, //联系方式
      name: "", //姓名
      nowarea: [], //省市区
      detailarea: "", //详细地址
      index: 0,

    };
  },

  methods: {
    //选择城市
    queding(value) {
      const result = [];
      value.map((item) => {
        let curKey = Object.keys(item);
        result.push(item[curKey[1]]);
      });
      this.list = result;
      this.show = !this.show;
    },
    showarealist() {
      // this.showarea =!this.showarea
      this.show = !this.show;
    },
    updateAddress() {
      const { name, massageway, detailarea, nowarea, index } = this;
      const Addresslist = { name, massageway, nowarea, detailarea};
      console.log(Addresslist)
      this.$store.dispatch("updateAddress", { index, ...Addresslist});
      this.$router.go(-1);
    },
    deletead() {
      const { index } = this;
      this.$store.dispatch("deleteAddress", { index });
      this.$router.go(-1);
    },
  },

  components: {
    [Switch.name]: Switch,
    [Area.name]: Area,
    [Overlay.name]: Overlay,
  },
  mounted(){
        this.listaddress = this.address[this.index]
        if (this.listaddress) {
        this.massageway = this.listaddress.massageway;
        this.name = this.listaddress.name;
        this.nowarea = this.listaddress.nowarea;
        this.detailarea = this.listaddress.detailarea;
      }
  },
  computed: {
    ...mapState(["address"]),
  },
  watch: {
    $route(value) {
      const index = value.query.index;
    
      this.index = index;
      this.listaddress = this.address[index]
   
    
      if (this.listaddress) {
      this.massageway = this.listaddress.massageway;
      this.name = this.listaddress.name;
      this.nowarea = this.listaddress.nowarea;
      this.detailarea = this.listaddress.detailarea;
    
    }
    },
    list() {
      if (this.list) {
      
        this.nowarea = this.list;
      }
    },
  },
};
</script>


<style lang="stylus" scoped>
@import '~common/mixins.styl';

.collect_message {
  background-color: $bc;
  height: 778px;

  .common {
    background-color: #fff;
    border-bottom: 1px solindex $bc;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    box-sizing: border-box;

    & span:first-child {
      font-size: 17px;
      color: $ziti;
    }
  }

  .name {
    >input {
      font-size: 13px;
      margin-left: 29px;
    }
  }

  .phone_number {
    & span:nth-child(2) {
      font-size: 16px;
      margin-left: 6px;
    }

    & span:nth-child(3) {
      font-size: 22px;
      font-weight: 700;
      color: $ziti;
      position: relative;
      left: -5px;
      top: 4px;
    }

    >input {
      color: black;
      font-size: 13px;
      position: relative;
      top: 2px;
    }
  }

  .where {
    position: relative;

    & span:first-child {
      margin-right: 16px;
    }

    .city {
      font-size: 16px;
      margin-right: 6px;
      font-size: $ziti;
    }

    .icon-jiantouzuo {
      position: absolute;
      top: 2px;
      right: 15px;
      font-size: 24px;
      color: $ziti;
    }
  }

  .detailwhere {
    height: 82px;
    position: relative;

    >input {
      position: relative;
      top: 2px;
      windexth: 310px;
      font-size: 17px;
    }

    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      background: url('./img/shanchu.png') no-repeat left top / 22px 22px;
      windexth: 22px;
      height: 22px;
      right: 8px;
      top: 12px;
    }
  }

  .biaoqian {
    background-color: #fff;
    height: 98px;
    padding: 14px 10px;
    box-sizing: border-box;
    border-bottom: 1px solindex $bc;

    >em {
      font-size: 17px;
      color: $ziti;
      margin-right: 11px;
      position: relative;
      top: -5px;
    }

    >span {
      font-size: 15px;
      margin-right: 11px;
      color: $ziti;
      padding: 8px 15px;
      background-color: #fff;
      border: 1px solindex $ziti;
      border-radius: 20px;
    }

    >div {
      margin-top: 13px;
      font-size: 14px;
      color: $ziti;
      padding: 8px 15px;
      background-color: #fff;
      border: 1px solindex $ziti;
      border-radius: 20px;
      windexth: 113px;
      box-sizing: border-box;
      position: relative;
      margin-left: 73px;
      font-size: 15px;

      >i {
        position: absolute;
        top: 6px;
        left: 66px;
        margin-left: 4px;
        windexth: 20px;
        height: 20px;
        background: url('./img/shanchu.png') no-repeat left top / 20px 20px;
        transform: rotate(45deg);
      }
    }
  }

  .defaultdizhi {
    background-color: #fff;
    padding: 9px 15px;
    box-sizing: border-box;
    position: relative;

    & span:first-child {
      font-size: 18px;
      color: $ziti;
    }

    & div:first-of-type {
      position: absolute;
      top: 4px;
      right: 15px;
    }

    .footer_button {
      margin-top: 16px;
      background-color: #fff;

      & span:nth-child(1) {
        background-color: red;
        height: 48px;
        line-height: 48px;
        font-size: 19px;
        color: #fff;
        border-radius: 25px;
        display: block;
        text-align: center;
      }

      & span:nth-child(2) {
        background-color: #fff;
        height: 48px;
        line-height: 48px;
        font-size: 19px;
        color: black;
        border-radius: 25px;
        display: block;
        text-align: center;
        border: 2px solindex $bc;
        margin-top: 11px;
        box-shadow: 0px 0px 2px $ziti;
      }
    }
  }

  .contain {
    overflow: hindexden;

    .wrapper {
      position: fixed;
      top: 159px;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      z-index: 2;
      border-radius: 9px 9px 0 0;
    }
  }
}
</style>