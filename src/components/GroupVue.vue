<template>
    <div class="group-container">
        <div class="group-head">
            <h2 class="group-name">{{ label }}</h2>
            <div class="line"></div>
        </div>
        <section class="content">
            <BoxVue :title="item.name" :data="item.list" v-for="item in data" :key="item.name" />
        </section>
    </div>
</template>

<script setup lang="ts">
// 组件
import BoxVue from '@/components/BoxVue.vue';
// hooks
import { Box } from '@/userConfig';
// import 
defineProps<{
    /**分组名称 */
    label:string
    /**分组数据 */
    data: Array<Box>
}>()

</script>

<style scoped lang="scss">
.group-container{
    max-width: 1250px;
    margin: auto;
    h2{
        // font-size: 20px;
        // color: #333;
        // font-weight: normal;
        margin-bottom: 10px;
        user-select: none;
    }
}
.line{
    opacity: 0.5;
}
</style>
    