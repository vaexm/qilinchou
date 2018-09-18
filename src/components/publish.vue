<template>
  <div class="container padding-t" id="container">
    <div class='bg-ff font-16'>
      <div class="row padding border-b ipt">
        <div class="title">标题</div>
        <input class="text-right" type="text" placeholder="请输入标题" v-model="valueTitle">
      </div>
      <div class="row padding border-b ipt">
        <div class="title">地址</div>
        <div class="color-66 text-right col" @click='areaListShow = !areaListShow'>
          {{valueArea ? valueArea : '请选择省份及城市'}}
        </div>
      </div>
      <div class="row padding border-b ipt">
        <div class="title">详细地址</div>
        <input class="text-right" type="text" placeholder="请输入详细地址" v-model="valueAddress">
      </div>
      <div class="row padding ipt">
        <div class="title">筹款金额</div>
        <input class="text-right" type="text" placeholder="请输入筹款金额" v-model="valueMoney">
      </div>
    </div>
    <div class="bg-ff margin-t padding-tb">
      <div class="padding-lr ipt">
        项目描述
      </div>
      <div class="padding-lr">
        <textarea class="textarea padding" name="" id="" placeholder="请输入详细描述" v-model="valueDesc"></textarea>
      </div>
    </div>
    <div class="row padding up-box">
      <div class="up-box-img position-r" v-if='upImage'>
        <img :src="upImage" alt="">
        <div class="cancel-btn" @click='upImage = null'>
          <van-icon name='clear' color='#f00' size='20px'/>
        </div>
      </div>
      <div>
        <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
          <div class='up-img color-66'>
            <van-icon name='photograph' />
            <p>上传封面图片</p>
            <p>(750*438)</p>
          </div>
        </van-uploader>
      </div>
    </div>
    <div class="footer-btn text-center color-ff font-18" @click="submitPublish">发布</div>
    <van-popup v-model="areaListShow" position='bottom'>
      <van-area :area-list="areaList" :columns-num="3" @confirm='getArea' @cancel='areaListShow = !areaListShow'/>
    </van-popup>
  </div>
</template>
<script>

  export default{
    data(){
      return {
        valueTitle: '',
        valueAddress: '',
        valueMoney: '',
        valueDesc: '',
        upImage: null,
        areaListShow: false,
        areaList: require('@/assets/data/area.js'),
        valueArea: null
      }
    },
    methods: {
      onRead(e){
        console.log(e, '超过大小限制')
        if(e && e.content){
          this.upImage = e.content;
        }
        else this.$toast('封面只能选取一张, 您已超出范围！')
      },
      getArea: function (e){
        this.valueArea = e[0].name + ' ' +  e[1].name + ' ' + e[2].name;
        this.areaListShow = !this.areaListShow;
      },
      submitPublish: function(){
        if(this.valueTitle){
          if(this.valueArea){
            if(this.valueAddress){
              if(this.valueMoney){
                if(this.valueDesc){
                  if(this.upImage){
                    this.$toast.success('提交成功');
                  }
                  else this.$toast('请上传封面图');
                }
                else this.$toast('请对项目进行描述');
              }
              else this.$toast('请输入筹款金额');
            }
            else this.$toast('请输入详细地址');
          }
          else this.$toast('请选择省份及城市');
        }
        else this.$toast('请输入标题');
      }
    }
  }
</script>
<style scoped>
  html, body{background: #f6f6f6;}
  .container{padding-bottom: 64px;}
  .ipt{line-height: 36px;}
  .ipt .title{flex: 0 0 25%;max-width: 25%;min-width: 5em;}
  .ipt input{flex: 0 0 75%;max-width: 75%;outline: none;border: none;}
  .textarea{background: #f6f6f6;border-radius: 4px;line-height: 18px;outline: none;border: none;display: block;width: 100%;height: 3.6rem;resize: none;}
  .footer-btn{background: #F52F3E;position: fixed;left: 0;right: 0;bottom: 0;z-index: 999;line-height: 44px;}
  .up-img{width: 100px;height: 100px;text-align: center;background: #E0E0E0;border-radius: 4px;font-size: 12px;line-height: 14px;}
  .up-img i{font-size: 40px;line-height: 66px;color: #f6f6f6;}
  .up-box{padding-top: 20px;}
  .up-box-img{margin-right: 20px;}
  .up-box-img img{width: 100px;height: 100px;border-radius: 4px;}
  .cancel-btn{width: 26px;height: 26px;line-height: 26px;text-align: center;border-radius: 100%;transform: rotate(22.5deg);position: absolute;top: -13px;right: -13px;z-index: 2;}
</style>
