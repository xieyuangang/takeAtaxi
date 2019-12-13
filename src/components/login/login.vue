<template>
  <div id="login">
    <div class="all">
       <div class="logo text-center"> <img :src="imgurl" alt=""></div>
    </div>
    <div class="from">
        <div>
           
            <van-cell-group >
                 <van-field v-model="value" placeholder="请输入用户账号" left-icon="contact" right-icon="close"   @click-right-icon="$toast('question')"/>
                 <van-field v-model="value" placeholder="请输入密码" left-icon="bag-o" right-icon="eye-o"   @click-right-icon="mima"/>   <!-- closed-eye -->            </van-cell-group>
                
        </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { Field } from 'vant';

export default {
  data() {
    return {
      name: "login",
      randomUrl: this.$types.randomNumber,//随机数
      imgurl: this.$types.allImg,//公共图片
    };
  },
  methods: {
      mima(){
          Toast('123')
      }
  },
  created(){
      console.log(this.imgurl);
      
  }
};
</script>
<style  scoped>
.all{
    width: 100%;
    padding-top: 1rem;
    box-sizing: border-box;
}
.logo>img{
    margin:0 auto;
    width: 2.6rem;
    height:2.6rem;
    margin-bottom:.39rem;
}
.from{
    width: 6rem;
    height: 2.12rem;
    margin:0 auto .38rem;
    box-sizing: border-box;
    border:1px solid #dedede;
    border-radius: .1rem;
}
.from>div{
    width: 99%;
    margin:0 auto;
    height: 1.06rem;
    box-sizing: border-box;
    line-height: 1.06rem;
}
.from div .van-cell{
    line-height: .5rem;
    padding:.27rem .35rem;
}
</style>