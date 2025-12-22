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
        path: 'src/components/{{layer}}/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{layer}}/{{name}}/{{name}}.module.css',
        templateFile: 'plop-templates/component.module.css.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{layer}}/{{name}}/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
    ],
  })
}
