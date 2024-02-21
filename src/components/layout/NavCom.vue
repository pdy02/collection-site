<template>
    <div class="nav">
        <div class="nav-tools">
            <ul>
                <li>
                    <component @click="() => toggleTheme()" :is="isDark? Moon: SunOne" theme="outline" size="24"
                        fill="var(--color-text)"></component>
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme';
// icon
import { Moon, SunOne } from '@icon-park/vue-next';
const { isDark, toggleTheme } = useTheme()
</script>

<style scoped lang="scss">
.nav {
    width: 100%;
    height: var(--nav-height);
    --right: 16px;
    padding: 0 var(--right);
    background-color: var(--color-bg);
    position: relative;

    // 定位
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid var(--color-text);
    &-tools {
        height: 100%;
        position: absolute;
        right: var(--right);
        top: 0;

        ul {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;

            li {
                cursor: pointer;
            }
        }
    }
}
</style>
    