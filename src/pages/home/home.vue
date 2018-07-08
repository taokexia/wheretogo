<template>
    <div class="home">
        <HomeHeader></HomeHeader>
        <HomeSwiper :list="swiperList" ref="HS"></HomeSwiper>
        <HomeIcons :list="iconList"></HomeIcons>
        <HomeRecommend :recommend='recommends'></HomeRecommend>
        <HomeWeekend :recommend='recommends'></HomeWeekend>
    </div>
</template>

<script>
    import HomeHeader from './components/header'
    import HomeSwiper from './components/swiper'
    import axios from 'axios'
    import HomeIcons from './components/icons'
    import HomeRecommend from './components/recommend'
    import HomeWeekend from './components/weekend'

    export default {
        name: 'home',
        data() {
            return {
                swiperList: [],
                iconList: [],
                recommends: []
            }
        },
        methods: {
            getHomeInfo() {
                // 获取本地json
                axios.get('/static/mock/index.json')
                .then(this.getHomeInfoSuss)             
            },
            getHomeInfoSuss (res) {
                // 获取轮播数据
                this.swiperList = res.data.swiperList
                // 获取导航数据
                this.iconList = res.data.iconList
                // 获取推荐数据
                this.recommends = res.data.recommend
            }
        },
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        mounted() {
            this.getHomeInfo()
        }
    }
</script>
