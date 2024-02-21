<template>
    <div class="box-container">
        <div class="box-title">
            <h2>{{ title }}</h2>
            <span @click="showHandler" :class="{ hide: !isShow }">
                <down theme="outline" size="24" fill="var(--color-text)" />
                <!-- :fill="getTextColor('--color-text')" -->
            </span>
        </div>
        <!-- <div class="box-line"></div> -->
        <Transition>
            <section v-show="isShow" :class="{ hide: !isShow }">
                <ul>
                    <li v-for="item in data" :key="ItemVue.title">
                        <ItemVue :title="item.title" :logoUrl="item.logoUrl" :url="item.url"
                            :themeColor="item.themeColor" />
                    </li>
                </ul>
            </section>
        </Transition>
    </div>
</template>

<script setup lang="ts">
// hooks
// import { useTheme } from '@/hooks/useTheme';
import { Item } from '@/userConfig';
// icon
import { Down } from '@icon-park/vue-next';
// 组件
import ItemVue from '@/components/ItemVue.vue';
import { ref } from 'vue';
// const { isDark } = useTheme();

// props
defineProps<{
    /**盒子名称 */
    title: string
    /**盒子里的项 */
    data: Array<Item>
}>()

// type ctrProperty = `--${string}`
/**获取当前主题下的字体颜色 */
// const getTextColor = (property: ctrProperty) => {
//     isDark.value // 响应式
//     return window.getComputedStyle(document.documentElement).getPropertyValue(property);
// }

// TODO： 收起展开处理

/**是否展示 */
const isShow = ref(true);
const showHandler = () => {
    isShow.value = !isShow.value;
}
</script>

<style scoped lang="scss">
.box-container {
    padding: 10px 16px;
    max-width: 1200px;
    margin: auto;

    .box-title {
        width: fit-content; // 自适应宽度
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        h2 {
            font-weight: normal;
            // color: color-mix(in srgb, var(--color-text), #ccc 100%);
            color: var(--color-text);
            opacity: 0.8;
            position: relative;

            &::after {
                content: "";
                width: 100%;
                height: 3px;
                position: absolute;
                bottom: 0;
                left: 0;
                transform: translateY(200%);
                background-color: #228E6C;
            }
        }

        span {
            padding-top: 3px;
            margin-left: 5px;
            cursor: pointer; // 鼠标指针

            :deep(svg) {
                transition: transform 0.2s;
                // transform: rotate(-90deg);
            }

            &.hide {
                :deep(svg) {
                    transform: rotate(-90deg);
                }
            }
        }
    }
}

// 线
.box-line {
    width: 100%;
    height: 1px;
    // background: var(--color-bg);
    // background:contrast-color(#333, #fff, #000);
    background: var(--color-text);
    margin: 10px 0;
}

// TODO分组的项section
section {
    // transition: transform 0.2s;
    transform-origin: top;

    // display: none;
    // &.hide {
    //     transform: scaleY(0);
    // }

    ul {
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-evenly;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 16px;

        li {
            // margin: 10px 0;
            width: fit-content;
        }
    }
}
// 动画效果
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: scaleY(0);
}
</style>
    