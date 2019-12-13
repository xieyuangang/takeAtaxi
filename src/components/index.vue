<template>
  <div id="index">
    <div class="img">
      <div class="item" v-for="(item,index) in fileList" :key="index">
        <van-icon name="cross" size="25" @click="del(index)" />
        <img :src="item.url" />
      </div>
    </div>
    <van-uploader :after-read="afterRead" :before-read="beforeRead" multiple :max-count="2" />
  </div>
</template>
<script>
import Vue from "vue";
import { Uploader } from "vant";
import { Icon } from "vant";
import { Toast } from "vant";
import { getImgNew } from "@/api/yearActive/type"

export default {
  data() {
    return {
      name: "index",
      fileList: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }]
    };
  },
  methods: {
    dataURLtoFile (dataurl, filename) { // 将base64转换为file文件
      let arr = dataurl.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, {type: mime})
    },
    beforeRead(file) {
      let regex = /(.jpg|.jpeg|.png|.bmp)$/
      if (!regex.test(file.type)) {
        Toast('图片格式不支持上传')
        return false
      } else {
        return true
      }
    },
    afterRead(file) {
     // 大于10MB的图片都缩小像素上传
      if (file.file.size > 10485760) {
        let canvas = document.createElement('canvas') // 创建Canvas对象(画布)
        let context = canvas.getContext('2d')
        let img = new Image()
        img.src = file.content // 指定图片的DataURL(图片的base64编码数据)
        img.onload = () => {
          canvas.width = 1594 
          canvas.height = 1054
          context.drawImage(img, 0, 0, 1594, 1054)
          file.content = canvas.toDataURL(file.file.type, 0.92) // 0.92为默认压缩质量
            let s = {
                url: file.content
            };
            this.fileList.push(s);
          let files = this.dataURLtoFile(file.content, file.file.name)
          const data = new FormData()
          data.append('file', files)
          data.append('code', this.applyNo)
          data.append('type', 'chat')
          apiUpload(data).then(res => {
            this.imagePath.push(res.data.reqUrl)
            Toast('上传成功')
          })
        }
      } else { //小于10M直接上传
        const data = new FormData()
        data.append('file', file.file)
        data.append('code', this.applyNo)
        data.append('type', 'chat')



        // apiUpload(data).then(res => {
        //   this.imagePath.push(res.data.reqUrl)
        //   Toast('上传成功')
        // })


      }
    },
    del(index) {
      //删除
      this.fileList.splice(index, 1);
    }
  }
};
</script>
<style  scoped>
.van-icon {
  position: absolute;
  top: 0;
  right: 0;
}
.img:after {
  overflow: hidden;
  content: "";
  display: block;
  clear: both;
}
.item {
  float: left;
  width: 100px;
  height: 100px;
  margin: 5px;
  position: relative;
}
.item img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>