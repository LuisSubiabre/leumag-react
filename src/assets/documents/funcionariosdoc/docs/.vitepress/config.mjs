import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Funcionarios Docs",
  description: "Documentación",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Categorías',
        items: [
          { text: 'Inicio', link: '/inicio' },
          { text: 'Profesores', link: '/profesores' },
          { text: 'Inspectores', link: '/inspectores' },
          { text: 'ACLES', link: '/proaclesfesores' },
          { text: 'Monitor ACLE', link: '/monitor' },
          { text: 'Ficha Estudiante', link: '/monitor' },
          { text: 'NEE', link: '/nee' },
          { text: 'Psicosocial', link: '/psicosocial' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
