export type List = ListItem[]
export interface ListItem {
  /**
   * 一个大分类名称：比如【前端】
   */
  name: string
  /**
   * 大分类之下的分组
   */
  boxs:Box[]
}


export interface Box {
  /**
   * 分组名称：比如【前端】分类-【框架】分组
   */
  name: string;
  /**
   * 分组的各项网站
   */
  list: Item[];
}

export interface Item {
  /**
   * 网站标题
   */
  title: string
  /**
   * 网站url地址
   */
  url: string
  /**
   * 网站logo地址
   */
  logoUrl: string
  /**
   * 网站主题色
   */
  themeColor: string
}


const userConfig = 
{
  list: [
    // 分组
    {
      name: '前端',
      boxs: [
        {
          name: '构建工具',
          list: [
            {
              title: 'vite',
              url: 'https://vitejs.dev/',
              // logoUrl: 'https://vitejs.dev/logo.svg',
              logoUrl: '/public/logo/vite.svg',
              themeColor: '#646cff'
            }, {
              title: 'webpack',
              url: 'https://webpack.js.org/',
              logoUrl: 'https://www.webpackjs.com/icon-square-small.85ba630cf0c5f29ae3e3.svg',
              themeColor: '#1c78c0'
            }
          ]
        }, {
          name: '框架/库',
          list: [
            {
              title: 'react',
              url: 'https://react.docschina.org/',
              logoUrl: '/public/logo/react.svg',
              themeColor: '#61dafb'
            }, {
              title: 'vue',
              url: 'https://cn.vuejs.org/',
              logoUrl: 'https://cn.vuejs.org/images/logo.png',
              themeColor: '#42b983'
            }
          ]
        }, {
          name: 'UI库',
          list: [
            {
              title: 'ant-design',
              url: 'https://ant-design.antgroup.com/index-cn',
              logoUrl: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
              themeColor: '#0170fe'
            }, {
              title: 'element-ui',
              url: 'https://element-plus.org/zh-CN/#/zh-CN',
              logoUrl: '/public/logo/element-ui.svg',
              themeColor: '#409eff'
            }, {
              title: 'vant',
              url: 'https://vant-contrib.gitee.io/vant/#/zh-CN/',
              logoUrl: 'https://img.yzcdn.cn/vant/logo.png',
              themeColor: '#07c160'
            }
          ]
        }, {
          name: 'Ai工具',
          list: [
            {
              title: 'kimi',
              url: 'https://kimi.moonshot.cn/',
              logoUrl: 'https://kimi.moonshot.cn/favicon.ico',
              themeColor: '#000000'

            }
          ]
        }
      ]
    }
  ]
}
// 收藏列表文件
export default userConfig;
export type UserConfig = typeof userConfig;
