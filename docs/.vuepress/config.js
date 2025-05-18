import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/cyber-defense-pro/',
  head: [
    ['link', { rel: 'icon', href: '/cyber-defense-pro/favicon.ico' }]
  ],
  theme: defaultTheme({
    logo: 'logo.png',
    contributors: false,
    sidebar: {
      '/': [
        {
          text: 'CyberDefense Pro',
          children: [
            { text: "About", link: '/' },
          ],
        },
        {
          text: '1.0 Introduction',
          collapsible: true,
          children: [
            '/1.0.md',
          ],
        },
        {
          text: '2.0 Vulnerability Response, Handling, and Management',
          collapsible: true,
          children: [
            '/2.1.md',
            '/2.2.md',
            '/2.3.md',
            '/2.4.md',
            '/2.5.md',
            '/2.6.md',
          ],
        },
        {
          text: '3.0 Threat Intelligence and Threat Hunting',
          collapsible: true,
          children: [
            '/3.1.md',
            '/3.2.md',
            '/3.3.md',
            '/3.4.md',
          ],
        },
        {
          text: '4.0 System and Network Architecture',
          collapsible: true,
          children: [
            '/4.1.md',
            '/4.2.md',
            '/4.3.md',
            '/4.4.md',
            '/4.5.md',
          ],
        },
        {
          text: '5.0 Vulnerability Assessments',
          collapsible: true,
          children: [
            '/5.1.md',
            '/5.2.md',
            '/5.3.md',
            '/5.4.md',
            '/5.5.md',
            '/5.6.md',
          ],
        },
        {
          text: '6.0 Network Security',
          collapsible: true,
          children: [
            '/6.1.md',
            '/6.2.md',
            '/6.3.md',
            '/6.4.md',
            '/6.5.md',
            '/6.6.md',
            '/6.7.md',
            '/6.8.md',
            '/6.9.md',
            '/6.10.md',
          ],
        },
        {
          text: '7.0 Host-Based Attacks',
          collapsible: true,
          children: [
            '/7.1.md',
            '/7.2.md',
            '/7.3.md',
            '/7.4.md',
            '/7.5.md',
            '/7.6.md',
            '/7.7.md',
          ],
        },

        {
          text: '8.0 Security Management',
          collapsible: true,
          children: [
            '/8.1.md',
            '/8.2.md',
            '/8.3.md',
          ],
        },
        {
          text: '9.0 Post-Attack',
          collapsible: true,
          children: [
            '/9.1.md',
            '/9.2.md',
            '/9.3.md',
          ],
        },
        {
          text: 'A.0 CompTIA CySA+ CS0-003 - Practice Exams',
          collapsible: true,
          children: [
            '/A1.md',
            '/A2.md',
            '/A3.md',
          ],
        },
        {
          text: 'B.0 TestOut CyberDefense Pro - Practice Exams',
          collapsible: true,
          children: [
            '/B1.md',
            '/B2.md',
          ],
        },
        {
          text: 'Glossary',
          collapsible: true,
          children: [
            '/G.md',
          ],
        },


      ]
    },
  }),
  lang: 'zh-CN',
  title: "Alice's Archive",
  description: "Alice's Archive",
})


