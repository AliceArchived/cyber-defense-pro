import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/repository_name/',
  head: [
    ['link', { rel: 'icon', href: '/repository_name/favicon.ico' }]
  ],
  theme: defaultTheme({
    logo: 'logo.png',
    contributors: false,
    // navbar: [
    //   {
    //     text: 'abc',
    //     link: 'relative path',
    //   },
    // ],
    sidebar: {
      '/': [
        {
          text: 'Main Pages',
          children: [
            { text: "Basic", link: '/' },
          ],
        },
        // {
        //   text: 'Title',
        //   collapsible: true,
        //   children: [
        //     'md file',
        //   ],
        // },

      ]
    },
  }),
  lang: 'zh-CN',
  title: "Alice's Archive",
  description: "Alice's Archive",
})


