<template>
  <div class="container padding-b">
    <div class="header position-r color-ff">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536821452593&di=2013da6ef09b7d02fb6ca5defba3ad01&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb7fd5266d016092473376c36df0735fae6cd3489.jpg" alt="" srcset="">
      <div class="avatar row padding row-center">
        <img src="../assets/icon/icon_avatar.png" alt="" srcset="">
        <div class="padding-l">
          <div class="font-16">昵称</div>
          <div class="row text-center font-12">
            <div class="padding-r">
              <div class="money">5,000</div>
              <div>账户余额</div>
            </div>
            <div class="padding-r">
              <div class="money">1,000,000</div>
              <div>代收本金</div>
            </div>
            <div class="padding-r">
              <div class="money">99,999</div>
              <div>预估收益</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-ff margin-t">
      <div class="padding border-b">管理</div>
      <div class="row text-center padding">
        <div class="col-25">
          <img src="../assets/icon/icon_08.png" alt="" srcset="">
          <p>我的发起</p>
        </div>
        <div class="col-25">
          <img src="../assets/icon/icon_08.png" alt="" srcset="">
          <p>我的公益</p>
        </div>
        <div class="col-25">
          <img src="../assets/icon/icon_08.png" alt="" srcset="">
          <p>我的众筹</p>
        </div>
        <div class="col-25">
          <img src="../assets/icon/icon_08.png" alt="" srcset="">
          <p>分享团队</p>
        </div>
      </div>
    </div>
      
    <div class="bg-ff margin-t">
      <div class="padding border-b">工具</div>
      <div class="row flex-wrap text-center padding-lr padding-t">
        <div class="col-33 padding-b">
          <img src="../assets/icon/icon_08.png" alt="" srcset="">
          <p>绑定手机</p>
        </div>
        <div class="col-33 padding-b">
          <img src="../assets/icon/icon_08.png" alt="" srcset="">
          <p>实名认证</p>
        </div>
        <div class="col-33 padding-b">
          <img src="../assets/icon/icon_08.png" alt="" srcset="">
          <p>风险测评</p>
        </div>
        <div class="col-33 padding-b">
          <img src="../assets/icon/icon_08.png" alt="" srcset="">
          <p>银行卡</p>
        </div>
        <div class="col-33 padding-b">
          <img src="../assets/icon/icon_08.png" alt="" srcset="">
          <p>平台信息</p>
        </div>
        <div class="col-33 padding-b">
          <img src="../assets/icon/icon_08.png" alt="" srcset="">
          <p>我的评论</p>
        </div>
      </div>
    </div>
    <div class="row bg-ff margin-t flex-wrap text-center padding-lr">
      <div class="col-50 padding-tb border-r">
        <img src="../assets/icon/icon_08.png" alt="" srcset="">
        <p>红包中心</p>
      </div>
      <div class="col-50 padding-tb">
        <img src="../assets/icon/icon_08.png" alt="" srcset="">
        <p>卡券中心</p>
      </div>
      <div class="col-33 padding-tb border-t border-tb-w">
        <img src="../assets/icon/icon_08.png" alt="" srcset="">
        <p>关于我们</p>
      </div>
      <div class="col-33 padding-tb border-t border-tb-w">
        <img src="../assets/icon/icon_08.png" alt="" srcset="">
        <p>平台服务</p>
      </div>
      <div class="col-33 padding-tb border-t border-tb-w">
        <img src="../assets/icon/icon_08.png" alt="" srcset="">
        <p>帮助中心</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    }
  }
</script>
<style scoped>
.header{width: 100%;height: 110px;overflow: hidden;}
.header >img{width: 100%;min-height: 110px;position: absolute;top: 0;left: 0;}
.avatar{height: 100%;}
.avatar >img{width: 60px;height: 60px;border-radius: 100%;border: 2px solid #fff;}
.row-center{justify-items: center;}
.col-25{flex: 0 0 25%;max-width: 25%;}
.col-25 img, .col-33 img, .col-50 img{width: .8rem;height: .8rem;margin: 0 auto 2px;}
.money{font-weight: 600;font-size: 18px;}
</style>

