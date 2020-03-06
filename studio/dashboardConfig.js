export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e62900a80a50201ea9bbe87',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-72ivzvhx',
                  apiId: '6ed8989b-1638-484a-96d7-56267dab10ac'
                },
                {
                  buildHookId: '5e62900a768015018f58b3dc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d616g898',
                  apiId: '120d6802-91d3-4963-994c-b632af6dc8e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alanjhonnes/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d616g898.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
