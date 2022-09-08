<template>
	<view class="content">
		<view class="" style="text-align: center;">
			<image src="../../static/logo1.jpg" style="width: 120px;height: 120px;"></image>
			
		</view>
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" circular="true">
					<swiper-item>
						<view class="swiper-item uni-bg-red">
							<image src="../../static/banner1.png" mode="scaleToFill" style="width: 100%;"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">
							<image src="../../static/banner2.png" mode="scaleToFill" style="width: 100%;"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">
							<image src="../../static/banner3.png" mode="scaleToFill" style="width: 100%;"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="ipt">
			<uni-search-bar @confirm="search" :focus="false" v-model="searchValue" 
				@input="handleSearch(searchValue)"   bgColor='#EAEAED'>
			</uni-search-bar>

			<!-- 			<u-input placeholder="请输入搜索内容" border class="ipt-content" v-model="text">

				<image src="../../static/home-active.png" mode="" style="width: 40rpx;height: 40rpx;" slot="prefix">
				</image>

			</u-input> -->
			<!-- 			<view style="width: 30rpx; display: inline-block;">
				<button @click="handleSearch()" type="primary" plain="true">搜索</button>
			</view> -->

		</view>

		<!-- 音频列表 -->
		<view style="padding-top: 50rpx;">
			<custom-tabs type="c1" :value="value" @change="changeIndex" :tabCenter='true'>
				<custom-tab-pane label="《道德经》Tao Te Ching" name="c1_1">
					<view class="content_list">
						<u-cell-group>
							<u-cell-item :title="item.title" v-for="(item,index) in fillterList" :key="item.id"
								@click="detailsClick(item)">
								<image src="../../static/fengmian.jpg" mode="" slot="icon"
									style="width: 60rpx;height: 60rpx;margin-right: 50rpx;border-radius: 50%;"></image>
							</u-cell-item>
						</u-cell-group>
					</view>
				</custom-tab-pane>
				<custom-tab-pane label='《论语》The Analects' name="c1_2">
					《论语》的内容放到这里
				</custom-tab-pane>
				<custom-tab-pane label="《大学》The University" name="c1_3">《大学》的内容放到这里</custom-tab-pane>
				<custom-tab-pane label="《中庸》Moderate" name="c1_4">《中庸》的内容放到这里</custom-tab-pane>
			</custom-tabs>
		</view>




	</view>
</template>

<script>
	import LyTree from '@/components/ly-tree/ly-tree.vue'

	export default {
		components: {
			LyTree
		},
		data() {
			return {
				value: 0,
				searchValue: '',
				fillterList:[],
				List: [{
					title: '道德经第一章中英讲解（Chapter 1 of the Tao Te Ching explained in English and Chinese）',
					id: 1,
					src: require('../../static/video/1.mp3'),
					article: '道可道，非常道；名可名，非常名。无名，天地之始，有名，万物之母。故常无欲，以观其妙，常有欲，以观其徼。此两者，同出而异名，同谓之玄，玄之又玄，众妙之门',
					yingyu: 'The Tao that is utterableIs not the eternal TaoThe name that is namableIs not the eternal Name.The Nothingness is the name of the beginningof beaven and earth;The Being (substance) is the nameof the mother of all things.Hencc one should gain an insightinto the beginning of the TaoThey are both so profoundas to be a key to the door of myriad secrets.',
					fanyi: '“道”如果可以用言语来表述，那它就是常“道”(“道”是可以用言语来表述的，它并非一般的“道”)；“名”如果可以用文辞去命名，那它就是常“名”(“名”也是可以说明的，它并非普通的“名”)。“无”可以用来表述天地浑沌未开之际的状况；而“有”，则是宇宙万物产生之本原的命名。因此，要常从“无”中去观察领悟“道”的奥妙；要常从“有”中去观察体会“道”的端倪。无与有这两者，来源相同而名称相异，都可以称之为玄妙、深远。它不是一般的玄妙、深奥，而是玄妙又玄妙、深远又深远，是宇宙天地万物之奥妙的总门(从“有名”的奥妙到达无形的奥妙，“道”是洞悉一切奥妙变化的门径)。'
				}, {
					title: '道德经第二章 杨宇森（Chapter 2 of the Tao Te Ching）',
					id: 2,
					src: require('../../static/video/2.mp3'),
					article: '道可道，非常道；名可名，非常名。无名，天地之始，有名，万物之母。故常无欲，以观其妙，常有欲，以观其徼。此两者，同出而异名，同谓之玄，玄之又玄，众妙之门',
					yingyu: 'The Tao that is utterableIs not the eternal TaoThe name that is namableIs not the eternal Name.The Nothingness is the name of the beginningof beaven and earth;The Being (substance) is the nameof the mother of all things.Hencc one should gain an insightinto the beginning of the TaoThey are both so profoundas to be a key to the door of myriad secrets.',
					fanyi: '“道”如果可以用言语来表述，那它就是常“道”(“道”是可以用言语来表述的，它并非一般的“道”)；“名”如果可以用文辞去命名，那它就是常“名”(“名”也是可以说明的，它并非普通的“名”)。“无”可以用来表述天地浑沌未开之际的状况；而“有”，则是宇宙万物产生之本原的命名。因此，要常从“无”中去观察领悟“道”的奥妙；要常从“有”中去观察体会“道”的端倪。无与有这两者，来源相同而名称相异，都可以称之为玄妙、深远。它不是一般的玄妙、深奥，而是玄妙又玄妙、深远又深远，是宇宙天地万物之奥妙的总门(从“有名”的奥妙到达无形的奥妙，“道”是洞悉一切奥妙变化的门径)。'
				}, {
					title: '道德经第三章 诵读 向笠中文 杨宇森英文（Chapter 3 of the Tao Te Ching）',
					id: 3,
					src: require('../../static/video/3.mp3'),
					article: '道可道，非常道；名可名，非常名。无名，天地之始，有名，万物之母。故常无欲，以观其妙，常有欲，以观其徼。此两者，同出而异名，同谓之玄，玄之又玄，众妙之门',
					yingyu: 'The Tao that is utterableIs not the eternal TaoThe name that is namableIs not the eternal Name.The Nothingness is the name of the beginningof beaven and earth;The Being (substance) is the nameof the mother of all things.Hencc one should gain an insightinto the beginning of the TaoThey are both so profoundas to be a key to the door of myriad secrets.',
					fanyi: '“道”如果可以用言语来表述，那它就是常“道”(“道”是可以用言语来表述的，它并非一般的“道”)；“名”如果可以用文辞去命名，那它就是常“名”(“名”也是可以说明的，它并非普通的“名”)。“无”可以用来表述天地浑沌未开之际的状况；而“有”，则是宇宙万物产生之本原的命名。因此，要常从“无”中去观察领悟“道”的奥妙；要常从“有”中去观察体会“道”的端倪。无与有这两者，来源相同而名称相异，都可以称之为玄妙、深远。它不是一般的玄妙、深奥，而是玄妙又玄妙、深远又深远，是宇宙天地万物之奥妙的总门(从“有名”的奥妙到达无形的奥妙，“道”是洞悉一切奥妙变化的门径)。'
				}, {
					title: '道德经第四章 诵读 向笠中文 杨宇森英文（Chapter 4 of the Tao Te Ching）',
					id: 4,
					src: require('../../static/video/4.mp3'),
					article: '道可道，非常道；名可名，非常名。无名，天地之始，有名，万物之母。故常无欲，以观其妙，常有欲，以观其徼。此两者，同出而异名，同谓之玄，玄之又玄，众妙之门',
					yingyu: 'The Tao that is utterableIs not the eternal TaoThe name that is namableIs not the eternal Name.The Nothingness is the name of the beginningof beaven and earth;The Being (substance) is the nameof the mother of all things.Hencc one should gain an insightinto the beginning of the TaoThey are both so profoundas to be a key to the door of myriad secrets.',
					fanyi: '“道”如果可以用言语来表述，那它就是常“道”(“道”是可以用言语来表述的，它并非一般的“道”)；“名”如果可以用文辞去命名，那它就是常“名”(“名”也是可以说明的，它并非普通的“名”)。“无”可以用来表述天地浑沌未开之际的状况；而“有”，则是宇宙万物产生之本原的命名。因此，要常从“无”中去观察领悟“道”的奥妙；要常从“有”中去观察体会“道”的端倪。无与有这两者，来源相同而名称相异，都可以称之为玄妙、深远。它不是一般的玄妙、深奥，而是玄妙又玄妙、深远又深远，是宇宙天地万物之奥妙的总门(从“有名”的奥妙到达无形的奥妙，“道”是洞悉一切奥妙变化的门径)。'
				}, {
					title: '道德经第五章 诵读 向笠中文 杨宇森英文（Chapter 5 of the Tao Te Ching）',
					id: 5,
					src: require('../../static/video/5.mp3'),
					article: '道可道，非常道；名可名，非常名。无名，天地之始，有名，万物之母。故常无欲，以观其妙，常有欲，以观其徼。此两者，同出而异名，同谓之玄，玄之又玄，众妙之门',
					yingyu: 'The Tao that is utterableIs not the eternal TaoThe name that is namableIs not the eternal Name.The Nothingness is the name of the beginningof beaven and earth;The Being (substance) is the nameof the mother of all things.Hencc one should gain an insightinto the beginning of the TaoThey are both so profoundas to be a key to the door of myriad secrets.',
					fanyi: '“道”如果可以用言语来表述，那它就是常“道”(“道”是可以用言语来表述的，它并非一般的“道”)；“名”如果可以用文辞去命名，那它就是常“名”(“名”也是可以说明的，它并非普通的“名”)。“无”可以用来表述天地浑沌未开之际的状况；而“有”，则是宇宙万物产生之本原的命名。因此，要常从“无”中去观察领悟“道”的奥妙；要常从“有”中去观察体会“道”的端倪。无与有这两者，来源相同而名称相异，都可以称之为玄妙、深远。它不是一般的玄妙、深奥，而是玄妙又玄妙、深远又深远，是宇宙天地万物之奥妙的总门(从“有名”的奥妙到达无形的奥妙，“道”是洞悉一切奥妙变化的门径)。'
				}, {
					title: '道德经第六章 诵读 向笠中文 杨宇森英文（Chapter 6 of the Tao Te Ching）',
					id: 6,
					src: require('../../static/video/6.mp3'),
					article: '道可道，非常道；名可名，非常名。无名，天地之始，有名，万物之母。故常无欲，以观其妙，常有欲，以观其徼。此两者，同出而异名，同谓之玄，玄之又玄，众妙之门',
					yingyu: 'The Tao that is utterableIs not the eternal TaoThe name that is namableIs not the eternal Name.The Nothingness is the name of the beginningof beaven and earth;The Being (substance) is the nameof the mother of all things.Hencc one should gain an insightinto the beginning of the TaoThey are both so profoundas to be a key to the door of myriad secrets.',
					fanyi: '“道”如果可以用言语来表述，那它就是常“道”(“道”是可以用言语来表述的，它并非一般的“道”)；“名”如果可以用文辞去命名，那它就是常“名”(“名”也是可以说明的，它并非普通的“名”)。“无”可以用来表述天地浑沌未开之际的状况；而“有”，则是宇宙万物产生之本原的命名。因此，要常从“无”中去观察领悟“道”的奥妙；要常从“有”中去观察体会“道”的端倪。无与有这两者，来源相同而名称相异，都可以称之为玄妙、深远。它不是一般的玄妙、深奥，而是玄妙又玄妙、深远又深远，是宇宙天地万物之奥妙的总门(从“有名”的奥妙到达无形的奥妙，“道”是洞悉一切奥妙变化的门径)。'
				}, {
					title: '道德经第七章 诵读向笠中文 杨宇森英文（Chapter 7 of the Tao Te Ching）',
					id: 7,
					src: require('../../static/video/7.mp3'),
					article: '道可道，非常道；名可名，非常名。无名，天地之始，有名，万物之母。故常无欲，以观其妙，常有欲，以观其徼。此两者，同出而异名，同谓之玄，玄之又玄，众妙之门',
					yingyu: 'The Tao that is utterableIs not the eternal TaoThe name that is namableIs not the eternal Name.The Nothingness is the name of the beginningof beaven and earth;The Being (substance) is the nameof the mother of all things.Hencc one should gain an insightinto the beginning of the TaoThey are both so profoundas to be a key to the door of myriad secrets.',
					fanyi: '“道”如果可以用言语来表述，那它就是常“道”(“道”是可以用言语来表述的，它并非一般的“道”)；“名”如果可以用文辞去命名，那它就是常“名”(“名”也是可以说明的，它并非普通的“名”)。“无”可以用来表述天地浑沌未开之际的状况；而“有”，则是宇宙万物产生之本原的命名。因此，要常从“无”中去观察领悟“道”的奥妙；要常从“有”中去观察体会“道”的端倪。无与有这两者，来源相同而名称相异，都可以称之为玄妙、深远。它不是一般的玄妙、深奥，而是玄妙又玄妙、深远又深远，是宇宙天地万物之奥妙的总门(从“有名”的奥妙到达无形的奥妙，“道”是洞悉一切奥妙变化的门径)。'
				}, {
					title: '道德经第八章 诵读 向笠中文 杨宇森英文（Chapter 8 of the Tao Te Ching）',
					id: 8,
					src: require('../../static/video/8.mp3'),
					article: '道可道，非常道；名可名，非常名。无名，天地之始，有名，万物之母。故常无欲，以观其妙，常有欲，以观其徼。此两者，同出而异名，同谓之玄，玄之又玄，众妙之门',
					yingyu: 'The Tao that is utterableIs not the eternal TaoThe name that is namableIs not the eternal Name.The Nothingness is the name of the beginningof beaven and earth;The Being (substance) is the nameof the mother of all things.Hencc one should gain an insightinto the beginning of the TaoThey are both so profoundas to be a key to the door of myriad secrets.',
					fanyi: '“道”如果可以用言语来表述，那它就是常“道”(“道”是可以用言语来表述的，它并非一般的“道”)；“名”如果可以用文辞去命名，那它就是常“名”(“名”也是可以说明的，它并非普通的“名”)。“无”可以用来表述天地浑沌未开之际的状况；而“有”，则是宇宙万物产生之本原的命名。因此，要常从“无”中去观察领悟“道”的奥妙；要常从“有”中去观察体会“道”的端倪。无与有这两者，来源相同而名称相异，都可以称之为玄妙、深远。它不是一般的玄妙、深奥，而是玄妙又玄妙、深远又深远，是宇宙天地万物之奥妙的总门(从“有名”的奥妙到达无形的奥妙，“道”是洞悉一切奥妙变化的门径)。'
				}],
				aftersearch_List: [],
				fillterList:[],

			}
		},
		onLoad() {},
		mounted() {
			for(let i=0;i<this.List.length;i++){
				this.fillterList.push(this.List[i])
			};
			// this.filterList = this.List;
			console.log('this.fillterList')
			console.log(this.fillterList)
		},
		
		methods: {
			handleSearch(queryString) {
				this.aftersearch_List = [];
				for (let i = 0; i < this.List.length; i++) {
					if (this.List[i].title.indexOf(queryString) !== -1) {
						this.aftersearch_List.push(this.List[i]);
					}
				}

				console.log(this.aftersearch_List)
				this.fillterList=this.aftersearch_List
			},
			detailsClick(item) {
				uni.setStorageSync('video', item)
				uni.switchTab({
					url: '/pages/show/index'
				})
			},

		}
	}
</script>

<style scoped lang="scss">
	.swiper {
		height: 450rpx;
	}

	.content_list {
		// margin-top: 50rpx;
	}

	.ipt {
		margin-top: 80rpx;
		padding: 0 40rpx;
	}

	.ipt-content ::v-deep .u-input {
		padding-left: 80rpx !important;
	}

	.ipt-content {
		position: relative;
	}

	.ipt-content::before {
		content: url('../../static/ss.png');
		display: block;
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		top: 8rpx;
		left: 10rpx;

	}
</style>
