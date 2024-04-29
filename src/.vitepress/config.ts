import { defineConfig } from '@jcamp/vitepress-blog-theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CineBuzZ BD',
  description: 'Free movies & tv series download site.',
  themeConfig: {
    blog: {
      title: 'Latest',
      description: '',
      defaultAuthor: 'Admin',
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
      },
    },
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },

      {
        text: 'Movies',
        items: [
          {
            text: 'Movies Home',
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: 'Categories',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: 'Archives',
            link: '/blog/archives',
            activeMatch: '/blog/archives',
          },
          // {
          //   text: 'RSS Feed',
          //   link: '/blog/feed.rss',
          // },
        ],
      },
    ],

    sidebar: [
      
        ],
      },
    ],

    socialLinks: [
    
      },
    ],
  },
})
