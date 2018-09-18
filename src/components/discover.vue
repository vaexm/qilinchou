<template>
<div class="container" id='container'>
    <div class="banner">
        <img src="../assets/images/banner_07.jpg" alt="">
    </div>
    <div class="row text-center classify padding bg-ff">
        <div class="col" v-for='(val, index) in classify' @click='openLink(val.url, val.title)' :key='index'>
            <img :src="val.cover" alt="" srcset="">
            <div>{{val.title}}</div>
        </div>
    </div>
    <div class="padding">
        <div class="introduce padding bg-ff">
            <div class="row border-b border-tb-w">
                <div class="col border-r">
                    <div class="row item row-center">
                        <img class="margin-l" src="../assets/icon/icon_11.png" alt="" srcset="">
                        <div class="col padding-l">
                            <div class="font-18" style="font-weight: 600;">5,987</div>
                            <div class="color-99">成立天数(天)</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row item row-center">
                        <img class="margin-l" src="../assets/icon/icon_12.png" alt="" srcset="">
                        <div class="col padding-l">
                            <div class="font-18" style="font-weight: 600;">5,987</div>
                            <div class="color-99">众筹用户(人)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row border-b border-tb-w">
                <div class="col border-r">
                    <div class="row item row-center">
                        <img class="margin-l" src="../assets/icon/icon_13.png" alt="" srcset="">
                        <div class="col padding-l">
                            <div class="font-18" style="font-weight: 600;">5,987</div>
                            <div class="color-99">助力公益(个)</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row item row-center">
                        <img class="margin-l" src="../assets/icon/icon_14.png" alt="" srcset="">
                        <div class="col padding-l">
                            <div class="font-18" style="font-weight: 600;">5,987</div>
                            <div class="color-99">投资互助(个)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col border-r">
                    <div class="row item row-center">
                        <img class="margin-l" src="../assets/icon/icon_15.png" alt="" srcset="">
                        <div class="col padding-l">
                            <div class="font-18" style="font-weight: 600;">5,987</div>
                            <div class="color-99">爱心公益(元)</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row item row-center">
                        <img class="margin-l" src="../assets/icon/icon_16.png" alt="" srcset="">
                        <div class="col padding-l">
                            <div class="font-18" style="font-weight: 600;">5,987</div>
                            <div class="color-99">投资金额(元)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
  export default{
    data(){
      return {
        classify: [
          {cover: require('../assets/icon/icon_08.png'), title: '推荐项目', url: '/itemList'},
          {cover: require('../assets/icon/icon_09.png'), title: '发起项目', url: '/publish'},
          {cover: require('../assets/icon/icon_10.png'), title: '风险提示', url: ''}
        ]
      }
    },
    methods: {
      openLink(url, title){
        this.$router.push(url);
      }
    }
  }
</script>
<style scoped>
.banner img{width: 100%;height: auto;}
.classify img{width: 1.2rem;height: 1.2rem;margin: 0 auto 6px;}
.introduce{border-radius: 2px;margin-top: .36rem;}
.introduce .item{height: 2.3rem;}
.introduce .item img{width: .8rem;height: .8rem;}
.row-center{justify-items: center;}
</style>
