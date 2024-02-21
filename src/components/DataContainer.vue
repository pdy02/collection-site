<template>
    <div>
        <template v-if="!isLoading" v-for="group in data!.list" :key="group.name">
            <GroupVue :label="group.name" :data="group.boxs" />
        </template>
    </div>
</template>

<script setup lang="ts">
import GroupVue from '@/components/GroupVue.vue';
import type { List } from '@/userConfig'
import { ref } from 'vue';
// hooks
// import { useFetch } from '@/hooks/useFetch';
// const { data } = useFetch<{ list: List }>('/public/data/list.json')

// TODO: 请求数据
/**
 * 响应数据
 */
let data = ref<{list:List}>();
/**
 * 是否正在加载...
 */
let isLoading = ref(true);
// const URL = '/data/list.json' as const;
const URL = 'https://collection-site.oss-cn-guangzhou.aliyuncs.com/list.json' as const;
data.value = await fetch(URL).then(res => res.json())
// reset end loading
isLoading.value = false;



</script>

<style scoped lang="scss"></style>
    