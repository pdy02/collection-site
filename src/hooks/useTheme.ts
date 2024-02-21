import { computed, ref, watchEffect } from "vue"
// TODO: 定义常量/类型
/**本地存储主题变量的KEY */
const __KEY__ = 'Collection-Theme' as const;
/**主题变量类型 */
type ThemeType = 'light' | 'dark';
/**主题变量数组 */
const tmp: ThemeType[] = ['light', 'dark'] as const;


// TODO: 定义响应式变量/方法

/**当前主题 */
const theme = ref<ThemeType>(getLocalTheme());
/**当前是否是暗黑模式，false亮色/true暗黑 */
const computedTheme = computed(() => {
  return theme.value === 'light' ? false : true;
});

// TODO: 监听主题变化
/**主题数据变化 */
watchEffect(() => {
  document.documentElement.dataset.theme = theme.value;
  console.log('设置出错', theme.value);
  
  setLocalTheme(theme.value)
})



/**MutationObserver 配置对象 */
const observerConfig = { attributes: true, attributeFilter: ['data-theme'], attributeOldValue:true };
/**html对象的data-theme自定义属性变化 */
const observer = new MutationObserver((mutationList) => {
  const target = mutationList[0].target as HTMLElement
  const __theme = target.dataset.theme as ThemeType;
  if( mutationList[0].oldValue === __theme) return; // 避免重复触发
  if (tmp.includes(__theme)) {
    toggleTheme(__theme);
  } else {
    // 如果不是预期的主题，就设置为默认主题
    target.dataset.theme = theme.value;
  }
})
observer.observe(document.documentElement, observerConfig);


/**切换主题 */
function toggleTheme(set_theme?: ThemeType) {
  theme.value = set_theme || tmp[+!computedTheme.value];
}

/**主题设置hook */
export function useTheme() {
  return {
    theme,
    isDark: computedTheme,
    toggleTheme
  }
}



// TODO: 工具函数定义

/**获取本地存储的主题 */
function getLocalTheme(): ThemeType {
  return localStorage.getItem(__KEY__) === 'light' ? 'light' : 'dark';
}

/**设置本地存储的主题 */
function setLocalTheme(theme: ThemeType = 'light') {
  localStorage.setItem(__KEY__, theme);
}
