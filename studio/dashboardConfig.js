export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebfca1f1234055b2b02d3f6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j5g8w6j2',
                  apiId: 'c6965731-e4ca-49b0-aa18-54d89b0108f2'
                },
                {
                  buildHookId: '5ebfca1f1234057d0502cffe',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5wx4vtfj',
                  apiId: '54ccf8cc-2a9b-4fd7-8e43-437a4487a91b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MrHappy8D/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5wx4vtfj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
