<template>
	<view class="">
		<view class="head">
			 <view class="user-info">
			        <view class="info">
			          <image src="../../static/logo.png"  style="width: 80rpx;height: 80rpx;"/>
			          <view class="user-desc">
			            <text>昵称：百川</text>
			            <text>个性签名：风花雪月不肯等人，要献便献吻</text>
			            <text class="name">地区：北京 朝阳</text>
			          </view>
			        </view>
			      </view>
		</view>
	</view>
</template>

<script>
</script>

<style scope lang="scss">
	// .head{
	// 	background-color: #F8BBD0;
	// 	height: 300rpx;
	// 	 border-bottom-left-radius: 50rpx;
		
	// 	  border-bottom-right-radius: 50rpx;
	// }
	 .user-info {
	    width: 94%;
	    margin: 10px;
	    height: 115px;
	    box-shadow: 0 2px 5px #269090;
	    border-radius: 6px;
		 	background-color: #fff;
			color: #269090 !important;
	    .info {
	      position: relative;
	      display: flex;
	      width: 100%;
	      height: 100%;
	      padding: 25px 20px;
	 
	      image {
	      
	        border-radius: 50%;
	        margin-top: 4px;
	      }
	      .user-desc {
	        display: flex;
	        flex-direction: column;
	        margin-left: 10px;
	        line-height: 20px;
	        font-size: 14px;
	        color: #269090;
	        text {
	          color: #269090;
	          font-size: 14px;
	          padding: 2px 0;
	        }
	      }
	      .account-setting {
	        position: absolute;
	        top: 10px;
	        right: 20px;
	        font-size: 13px;
	        color: #269090;
	        .van-icon-setting-o {
	          font-size: 16px;
	          vertical-align: -3px;
	          margin-right: 4px;
	        }
	      }
	    }
	  }
</style>
