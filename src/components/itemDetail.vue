<template>
  <div class="container" id="container">
    <div > 
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(val, index) in swiperImages" :key="index">
          <img class="swiper-img" :src='val.image' />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="bg-ff padding">
      <div class="row">
        <div class="col ellipsis-2">美丽的你美丽的你美丽的你美丽的你美丽的你美丽的你美丽的你美丽的你美丽的你美丽的你</div>
        <div class="color padding-l">认购中</div>
      </div>
      <div class="progress">
        <div class="progress-item progress-bg-0" style="width: 50%;"><div>50%</div></div>
      </div>
      <div class="row text-center">
        <div class="col">
          <div class="font-18">32天</div>
          <div class="font-14 color-66">剩余时间</div>
        </div>
        <div class="col">
          <div class="font-18">9999元</div>
          <div class="font-14 color-66">已筹金额</div>
        </div>
        <div class="col">
          <div class="font-18">9999999元</div>
          <div class="font-14 color-66">目标金额</div>
        </div>
      </div>
    </div>
    <div class="bg-ff margin-t">
      <div class="row color-66 text-center item-situation">
        <div class="padding" :class='itemActive == index ? "item-active" : "" ' v-for='(val, index) in titleDetail' @click='itemActive = index' :key='index'>{{val.title}}</div>
      </div>
      <div class="padding detail border-t boder-tb-w">
        我是{{titleDetail[itemActive].title}}
      </div>
    </div>
    <footer class="footer bg-ff text-center">
      <div class="row color-66 font-12">
        <div class="footer-cell border-r">
          <img src="../assets/icon/icon_home2.png" alt="" srcset="">
          <div>首页</div>
        </div>
        <!-- <div class="footer-cell border-r">
          <img src="../assets/icon/icon_fx.png" alt="" srcset="">
          <div>分享</div>
        </div> -->
        <a href="tel: 14756696612" class="footer-cell">
          <img src="../assets/icon/icon_kf.png" alt="" srcset="">
          <div>客服</div>
        </a>
        <div class="col bg color-ff text-center font-18" style="line-height: 50px;" @click='nowJoin = !nowJoin'>
          立即参与
        </div>
      </div>
    </footer>
    <van-popup v-model="nowJoin" position='bottom'>
      <div class="padding">
        <div class="font-16">支持金额</div>
        <input class="input-money margin-tb" v-model="valueMoney" type="number" placeholder="请输入金额" />
        <div class="row">
          <div class="col">预计收益(元)</div>
          <div class="layer-money font-18">5000</div>
        </div>
        <div class="fon-12 color-66 row">
          <div>注: 收益回报已实际为准，</div>
          <div style="color: #F52F3E;">
            相见规则 <van-icon name='arrow' color='#F52F3E' />
          </div>
        </div>
        <div class="now-submit bg color-ff text-center margin-tb font-18" @click='nowSupport'>立即支持</div>
        <div class="text-center">
          <input type="checkbox" v-model='protocolStatus' name="" id="" />
          本人已认真阅读并同意 <span class="color">《风险认证书》</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        protocolStatus: false,
        nowJoin: true,
        valueMoney: null,
        swiperImages: [
          { image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537175471582&di=b89dbbbd5d377723961ca3f247ef4cd2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21c8701a18b87d6355f66320c0828381f30fdfa.jpg'},
          { image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537175471582&di=b89dbbbd5d377723961ca3f247ef4cd2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21c8701a18b87d6355f66320c0828381f30fdfa.jpg'},
          { image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537175471582&di=b89dbbbd5d377723961ca3f247ef4cd2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21c8701a18b87d6355f66320c0828381f30fdfa.jpg'}
        ],
        itemActive: 0,
        titleDetail: [
          {title: '项目信息'},
          {title: '项目特色'},
          {title: '参与情况'}
        ]
      }
    },
    methods: {
      nowSupport: function(){
        console.log(this.valueMoney)
      }
    }
  }
</script>
<style scoped>
  .swiper-img { width: 100%; height: auto;}
  .detail{overflow: hidden;}
  .detail *{max-width: 100% !important;}
  .item-situation{width: 100%;overflow-x: scroll;-ms-overflow-style: none;}
  .item-situation::-webkit-scrollbar{display: none;}
  .item-situation .item-active{position: relative;color: #000;font-weight: 600;}
  .item-situation .col-30{flex: 0 0 30%;max-width: 30%;}
  .item-situation .item-active::before{content: '';position: absolute;bottom: 0;width: 2em;height: 2px;background: #F52F3E;left: 50%;transform: translateX(-50%);}
  .footer{position: fixed;bottom: 0;left: 0;right: 0;z-index: 110;}
  .footer-cell{width: 2.5rem;}
  .footer-cell img{width: .6rem;height: .6rem;margin: 6px auto 0;}
  .input-money{font-size: 16px;line-height: 36px;border: none;border-bottom: 1px solid #eee;padding: 0 6px;outline: none;display: block;width: 100%;}
  .layer-money{color: #FD9A31;font-weight: 600;}
  .now-submit{line-height: 44px;border-radius: 2px;}
</style>
