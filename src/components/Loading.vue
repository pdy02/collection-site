<template>
    <div class="load-box">
        <div class="load-box-content">
            <span>加载中...</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.load-box{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    // flex居中
    display: flex;
    justify-content: center;
    align-items: center;
    &-content{
        text-align: center;
        user-select: none; // 禁止用户选择文本
    }
}
</style>
    