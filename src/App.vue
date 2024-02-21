<template>
  <div class="app">
    <NavCom></NavCom>
    <Home />
  </div>
</template>

<script setup lang="ts">
import Home from '@/views/Home.vue'
import NavCom from '@/components/layout/NavCom.vue'
import { useTheme } from '@/hooks/useTheme';
// -------
useTheme();
</script>

<style scoped lang="scss">
.app{
  padding-top: var(--nav-height);
}
</style>