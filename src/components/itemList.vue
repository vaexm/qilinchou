<template>  <div class="container" id="container">
    <header class="header padding-lr">
      <input class="search color-99" placeholder="搜索关键字" /><div class="icon_position"><van-icon name='search' /></div>
    </header>
    <div class="sort row padding-lr">
      <div class="col padding-b icon-forward-active" @click='sortAll'>
        综合排序 <i class="icon_bottom_forward" style="visibility: hidden;"></i>
      </div>
      <div class="col padding-b text-center">
        项目类型 <i class="icon_bottom_forward"></i>
      </div>
      <div class="col padding-b text-right">
        项目状态 <i class="icon_bottom_forward"></i>
      </div>
    </div>
    <div class="list">
      <div class="row padding border-b border-tb-w" v-for='(val, index) in recommend' :key='index'>
        <div class="col-40">
          <img :src="val.cover" alt="" srcset="">
        </div>
        <div class="col-60 padding-l">
          <div class="ellipsis-1">{{val.title}}</div>
          <div class="ellipsis-1 sign">
            <span v-for='(tag, index) in val.tags' :key='index'>{{tag}}</span>
          </div>
          <div class="row">
            <div class="col">
              <div class="progress"><div class="progress-item progress-bg-0" :style="{width: val.progress + '%'}"></div></div>
            </div>
            <div class="text-right" style="width: 3.6em;">{{val.progress}}%</div>
          </div>
          <div class="row color-99 font-12">
            <div>剩余：<span class="font-16 color-00">{{val.time}}天</span></div>
            <div class="col text-right">已筹：<span class="font-16 color-00">￥{{val.money}}</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="layer layer-sort" :class='layerSort ? "layer-show": "" ' @click='layerSort = !layerSort'>
      <div class="bg-ff" v-if='layerSort' @click.stop>
        <div class="padding border-b row" :class='sortIndex == index ? "sort-active" : "" ' v-for='(val, index) in sortItem' :key='index'>
          <div class="col">汽车众筹</div> <i class="icon iconfont icon-icon_duihao-xian"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        layerSort: 0,
        sortIndex: 0,
        sortItem: [
          {title: '汽车众筹'},
          {title: '汽车众筹'},
          {title: '汽车众筹'},
        ],
        recommend: [
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人', cover: require('../assets/images/product_01.jpg'), progress: 0, tags: ['房产', '房产', '房产'], time: 7, money: 999999 },
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人', cover: require('../assets/images/product_01.jpg'), progress: 45, tags: ['房产', '房产', '房产'], time: 7, money: 9999 },
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人', cover: require('../assets/images/product_01.jpg'), progress: 45, tags: ['房产', '房产', '房产'], time: 7, money: 9999 },
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人', cover: require('../assets/images/product_01.jpg'), progress: 45, tags: ['房产', '房产', '房产'], time: 7, money: 9999 },
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人', cover: require('../assets/images/product_01.jpg'), progress: 45, tags: ['房产', '房产', '房产'], time: 7, money: 9999 },
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人', cover: require('../assets/images/product_01.jpg'), progress: 100, tags: ['房产', '房产', '房产'], time: 7, money: 9999 },
          { title: '创新结构，摇滚名人，摇滚名人，摇滚名人，摇滚名人', cover: require('../assets/images/product_01.jpg'), progress: 160, tags: ['房产', '房产', '房产'], time: 7, money: 9999 }
        ]
      }
    },
    methods: {
      sortAll: function(){
        this.layerSort = !this.layerSort;
      }
    }
  }
</script>
<style scoped>
  .container{padding-top: 78px;width: 100%;overflow: hidden;}
  .header, .sort{position: fixed;top: 0;left: 0;right: 0;height: 44px;z-index: 99999;background: #F8F8F8;}
  .header .search{border: 1px solid rgba(255, 255, 255, .9);line-height: 32px;border-radius: 44px;margin-top: 5px;background: rgba(255, 255, 255, 1);width: 100%;outline: none;padding-left: 26px;}
  .header .icon_position{position: absolute;top: 50%;left: 22px;transform: translateY(-50%);}
  .sort{color: #7B7B7B;top: 44px;height: auto;line-height: 20px;}
  .layer-sort{top: 78px;}
  .layer-sort .bg-ff{max-height: 300px;overflow: scroll;}
  .layer-sort .bg-ff i{display: none;}
  .layer-sort .sort-active{color: #F53F4D;}
  .layer-sort .sort-active i{display: block;}
  .list img{width: 100%;height: auto;}
  .list .col-40{flex: 0 0 40%;max-width: 40%;}
  .list .col-60{flex: 0 0 60%;max-width: 60%;}
  .progress{overflow: hidden;}
  .progress-item{min-width: 0;}
</style>
