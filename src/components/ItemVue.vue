<template>
    <!-- <div class="box-item df"> -->
        <a class="box-item" :href="url" target="_blank" :style="{'--theme-color':themeColor}">
            <p class="df">
                <img :src="logoUrl" 
                    @error="imgLoadError"
                    :alt="title" width="25" height="25"
                />
                <span>{{ title }}</span>
            </p>
        </a>
    <!-- </div> -->
</template>

<script setup lang="ts">
defineProps<{
    /**标题/关键字 */
    title: string
    /**logo的链接地址 */
    logoUrl: string
    /**跳转的地址 */
    url:string
    /**主题颜色 */
    themeColor: string
}>()

// TODO: 图片加载失败处理
const BASE_URL = import.meta.env.BASE_URL;
const imgLoadError = (e: Event) => {
    // 保存原始src
    const img = e.target as HTMLImageElement;
    const __src = img.getAttribute('src');
    if(__src?.startsWith('/logo')){ // 是以 "/logo" 开头的本地图片才切换。
        img.src = `https://pdy02.github.io${BASE_URL}${__src}`;
    }
}
</script>

<style scoped lang="scss">
.box-item {
    padding: 10px;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    --percent: 50%; // 百分比
    --color:color-mix(in srgb, var(--theme-color), var(--color-bg) var(--percent));
    background: var(--color);
    transition: all 0.3s;
    &:hover{
        --percent: 10%;
    }
    // box-shadow: 0 0 5px 0 var(--color);
    cursor: pointer;
    font-size: 20px;
    display: block;
    p{
        display: flex;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 100%;
        img{
            margin-right: 10px;
        }
        span{
            text-transform: capitalize; // 首字母大写
            text-wrap: nowrap;
        }
    }
}
</style>
    