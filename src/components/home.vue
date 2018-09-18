<template>
  <div class="index-container">
    <div class="header">
      <van-nav-bar>
        <div class="search" slot='title'>
          <van-icon name='search' color='#666'/> 搜索关键字 
        </div>
      </van-nav-bar>
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(val, index) in swiperImages" :key="index">
        <img class="swiper-img" :src='val.image' @click='itemList'/>
      </van-swipe-item>
    </van-swipe>
    <div class="item-forward border-b notice">
      <img src="../assets/icon/icon_01.png" alt="" srcset="">
      <div class="new-sign font-12">最新</div>
      <div class='slide-notice'>
        <van-swipe :autoplay="3000" vertical :show-indicators='showIndicators'>
          <van-swipe-item v-for="(val, index) in swiperNotice" :key="index">
            <div class="ellipsis-1">{{val.title}}</div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    
    <div class="row text-center color-66 padding-lr bg-ff classify">
      <div class="col padding-tb" v-for='(val, index) in classify' @click="itemList" :key='index'>
        <img :src="val.cover" alt="" srcset="">
        <div>{{val.title}}</div>
      </div>
    </div>
    <div class="item-forward margin-t" @click='itemList'>
      <div>即将上线</div>
      <div class="search-list margin-l padding-l color-99">Coming Soon</div>
    </div>
    <div class="row scroll padding bg-ff">
      <div class="col-200 margin-r" v-for='(val, index) in comingSoon' @click='itemDetail' :key='index'>
        <img :src="val.cover" alt="" srcset="">
        <div class="ellipsis-1 margin-t-s">{{val.title}}</div>
        <div class="ellipsis-1 font-12 color-66">
          距离上线 <span class="font-16 color"> {{val.time.day}} </span> 天
          <span class="font-16 color"> {{val.time.hour}} </span> 时
          <span class="font-16 color"> {{val.time.minute}} </span> 分
        </div>
      </div>
    </div>
    <div class="item-forward margin-t bg-ff" @click='itemList'>
      <div>推荐项目</div>
      <div class="search-list margin-l padding-l color-99">最新上线</div>
    </div>
    <div class="padding recommend bg-ff" v-for='(val, findex) in recommend' @click='itemDetail' :key='findex'>
      <img :src="val.cover" alt="" srcset="">
      <div class="ellipsis-1 margin-t-s">{{val.title}}</div>
      <div class="ellipsis-1 font-12 color-66 sign">
        <span v-for='(tag, index) in val.tags' :key='index'>{{tag}}</span>
      </div>
      <div class="progress">
        <div class="progress-item" :class="'progress-bg-' + findex%3" :style="{width: val.progress > 100 ? '100%' : val.progress + '%'}">
          <div>{{val.progress}}%</div>
        </div>
      </div>
      <div class="row">
        <div class="col color-66">
          剩余时间：<span class="color-00 font-16">{{val.time}}天</span>
        </div>
        <div>
          已筹款：<span class="color-00 font-16">￥{{val.money}}</span>
        </div>
      </div>
    </div>
    <div class="item-forward margin-t bg-ff" @click='noticeList'>
      <div>媒体报道</div>
      <div class="search-list margin-l padding-l color-99">Media Coverage</div>
    </div>
    <div class="news-list bg-ff">
      <div class="row padding border-b" v-for='(val, index) in comingSoon' @click='noticeDetail' :key='index'>
        <div class="col-40">
          <img :src="val.cover" alt="" srcset="">
        </div>
        <div class="col-60 padding-l position-r">
          <div class="ellipsis-2">{{val.title}}</div>
          <div class="ellipsis-1  margin-t-s color-66 font-12">简单描述简单描述简单描述简单描述简单描述简单描述</div>
          <div class="font-12 color-99" style="position: absolute;bottom: 0;right: 0">2018-12-12</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        swiperImages: [
          { image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537175471582&di=b89dbbbd5d377723961ca3f247ef4cd2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21c8701a18b87d6355f66320c0828381f30fdfa.jpg'},
          { image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537175471582&di=b89dbbbd5d377723961ca3f247ef4cd2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21c8701a18b87d6355f66320c0828381f30fdfa.jpg'},
          { image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537175471582&di=b89dbbbd5d377723961ca3f247ef4cd2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21c8701a18b87d6355f66320c0828381f30fdfa.jpg'}
        ],
        swiperNotice: [
          {title: '公告公告公告公告公告公告公告公告公告公告公告'},
          {title: '公告'},
          {title: '公告'}
        ],
        showIndicators: false,
        
        classify: [
          { title: '公益众筹', cover: require('../assets/icon/icon_02.png'), url: '' },
          { title: '汽车众筹', cover: require('../assets/icon/icon_03.png'), url: '' },
          { title: '项目众筹', cover: require('../assets/icon/icon_04.png'), url: '' },
          { title: '影视众筹', cover: require('../assets/icon/icon_05.png'), url: '' },
          { title: '房产众筹', cover: require('../assets/icon/icon_06.png'), url: '' }
        ],
        comingSoon: [
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人，摇滚名人，摇滚名人，摇滚名人', time: { day: 2, hour: 12, minute: 7 }, cover: require('../assets/images/product_01.jpg') },
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人，摇滚名人，摇滚名人，摇滚名人', time: { day: 2, hour: 12, minute: 7 }, cover: require('../assets/images/product_01.jpg') },
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人，摇滚名人，摇滚名人，摇滚名人', time: { day: 2, hour: 12, minute: 7 }, cover: require('../assets/images/product_01.jpg') },
          { title: '创新结构，摇滚名人', time: { day: 2, hour: 12, minute: 7 }, cover: require('../assets/images/product_01.jpg') }
        ],
        recommend: [
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人', cover: require('../assets/images/product_01.jpg'), progress: 0, tags: ['房产', '房产', '房产'], time: 7, money: 9999 },
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人', cover: require('../assets/images/product_01.jpg'), progress: 45, tags: ['房产', '房产', '房产'], time: 7, money: 9999 },
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人', cover: require('../assets/images/product_01.jpg'), progress: 100, tags: ['房产', '房产', '房产'], time: 7, money: 9999 },
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人', cover: require('../assets/images/product_01.jpg'), progress: 160, tags: ['房产', '房产', '房产'], time: 7, money: 9999 }
        ]
      };
    },
    mounted: function(){

    },
    methods: {
      itemList(){
        this.$router.push('/itemList');
      },
      itemDetail(){
        this.$router.push('/itemDetail');
      },
      noticeList(){},
      noticeDetail(){}
    }
  }
</script>
<style scoped>
.index-container{padding: 46px 0 50px;}
.header{position: fixed;top: 0;left: 0;right: 0;z-index: 999;}
.search { position: absolute; left: 15px; right: 15px; border: 1px solid #eee; text-align: center; border-radius: 44px; height: 36px; line-height: 36px; color: #666; font-size: 14px; margin-top: 5px; }
.swiper-img { width: 100%; height: auto;}
.slide-notice{height: 20px;width: 80%;line-height: 20px;overflow: hidden;}
.slide-notice .van-swipe-item{height: 20px !important;text-align: left;}
.notice img{width: 36px;height: 20px;}
.new-sign{color: #f00;border: 1px solid #f00;border-radius: 2px;padding: 0 6px;margin: 0 10px;white-space: nowrap;}
.classify img{width: auto;height: 3.2em;margin: 6px auto;}
.item-forward .search-list{position: relative;}
.item-forward .search-list::before{content: '';position: absolute;width: 1px;height: 14px;top: 50%;left: 0;background: #999;transform: translateY(-50%);}
.scroll{width: 100%;overflow: scroll;}
.scroll .col-200{flex: 0 0 200px;max-width: 200px;}
.scroll .col-200 img, .recommend img{width: 100%;}
.news-list img{width: 100%;height: auto;}
.news-list .col-40{flex: 0 0 40%;max-width: 40%;}
.news-list .col-60{flex: 0 0 60%;max-width: 60%;}
.margin-t-s{margin-top: 6px;}
</style>
