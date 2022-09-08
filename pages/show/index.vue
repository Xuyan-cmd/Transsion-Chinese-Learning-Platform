<template>
	<view>
		<view class="head_img" style="margin: 0 auto;width: 80%;">
			<image src="../../static/banner2.jpg" mode="scaleToFill" style="width: 100%;margin: 20rpx auto;"></image>
		</view>
		<view class="content">
			<view class="title">
				{{items.title}}
			</view>
			<audio :src="items.src" controls style="margin-top: 30rpx;" poster="../../static/fengmian.jpg"></audio>
		</view>
		<view class="footer">
		<!-- 	<text>{{items.article}}</text>
			<view style="margin-top: 30rpx;">{{items.yingyu}}</view> -->
			
			<view v-for="(item,index) in chineseList" :key="index" style="margin-bottom: 50px;">
				<text>{{item}}</text>
				
				<view style="margin-top: 30rpx;">
					{{englishList[index]}}
				</view>
			</view>
			
			
			
			<view class="" style="font-size: 28rpx; font-weight: 700;margin-top: 30rpx;">
				译文
			</view>
			<text>{{items.fanyi}}</text>
			
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				items: undefined,
			   chineseList: [],
			   englishList: []
			}
		},
		mounted(){
		this.items = uni.getStorageSync('video')
		  console.log(this.items)
		  this.chineseList = this.items.article.split('。')
		  this.englishList = this.items.yingyu.split('.')
			
		},	
		onShow(){
			this.items = uni.getStorageSync('video')
			  console.log(this.items)
			},	
		
		
	}
</script>

<style scope lang="scss">
	.content{
		margin-left: 40rpx;
		.title{
			font-size: 32rpx;
			font-weight: 700;
		}
		
	}
	.footer{
		padding: 60rpx;
	}
</style>
