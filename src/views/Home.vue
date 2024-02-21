<template>
    <div>
        <HeadView />
        <Suspense>
            <DataContainer />

            <template #fallback>
                加载中ing...
            </template>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
// 组件
import HeadView from '@/components/HeadView.vue';
// import GroupVue from '@/components/GroupVue.vue';
import DataContainer from '@/components/DataContainer.vue';


// console.log(data.value);
// watch(() => data.value, () => {
//     console.log(data.value);
// })


</script>

<style scoped lang="scss"></style>
    