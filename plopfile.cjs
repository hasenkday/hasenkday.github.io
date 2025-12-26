module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a design system component',
    prompts: [
      {
        type: 'list',
        name: 'layer',
        message: 'Component layer',
        choices: ['atoms', 'molecules', 'organisms'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name (kebab-case)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{layer}}/{{kebabCase name}}/index.tsx',
        templateFile: 'plop-templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{layer}}/{{kebabCase name}}/{{kebabCase name}}.module.css',
        templateFile: 'plop-templates/component.module.css.hbs',
      },
    ],
  })
}
