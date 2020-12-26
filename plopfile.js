module.exports = plop => {
  plop.setGenerator('component', {
      description: 'create a monorepo component',
      prompts: [
          {
              type: 'input',
              name: 'name',
              message: '组件名称',
              default: ''
          }
      ],
      actions: [
          {
              type: 'add',
              path: 'packages/{{name}}/__tests__/{{name}}.test.js',
              templateFile: 'plop-templates/__tests__/test.js'
          },
          {
              type: 'add',
              path: 'packages/{{name}}/src/{{name}}.vue',
              templateFile: 'plop-templates/src/component.vue'
          },
          {
              type: 'add',
              path: 'packages/{{name}}/stories/{{name}}.stories.js',
              templateFile: 'plop-templates/stories/stories.js'
          },
          {
              type: 'add',
              path: 'packages/{{name}}/index.js',
              templateFile: 'plop-templates/index.js'
          },
          {
              type: 'add',
              path: 'packages/{{name}}/LICENSE',
              templateFile: 'plop-templates/LICENSE'
          },
          {
              type: 'add',
              path: 'packages/{{name}}/package.json',
              templateFile: 'plop-templates/package.json'
          },
          {
              type: 'add',
              path: 'packages/{{name}}/README.md',
              templateFile: 'plop-templates/README.md'
          },
      ]
  })
};
