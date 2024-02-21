import { ref, Ref } from "vue" 

/**
 * fetch请求
 * @param url : 一个url地址字符串，或者一个url字符串的ref响应式
 */
export const useFetch = <T>(url: string | Ref<string>) => {
  /**请求响应数据 */
  let data = ref<T>()
  /**响应错误信息 */
  let error = ref()
  /**是否正在加载中ing */
  let isLoading = ref(true)
  // 把url变成响应式数据
  const __url = ref(url)

  __url.value && fetch(__url.value).then(res => res.json())
  .then(res => {
    data.value = res
  })
  .catch(err => {
    error.value = err
  })
  .finally(() => {
    isLoading.value = false
  })
  return {
    data,
    error,
    isLoading
  }
}