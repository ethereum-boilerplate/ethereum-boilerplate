const getFoldersInDirectory = require('./tools/scripts/getFoldersInDirectory');

module.exports = function (plop) {
  const appsPaths = getFoldersInDirectory('apps').map(
    (folder) => `apps/${folder}`
  );
  plop.setGenerator('create-new-component', {
    description: 'new component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '🧙 : What is the component name?',
        pattern: 'properCase',
      },
      {
        type: 'list',
        name: 'dir',
        message: '🧙 : Where to create the component?',
        choices: ['libs/ui', ...appsPaths],
      },
      {
        type: 'input',
        name: 'subDirectory',
        message: '🧙 : What subdirectory is the component in? (optional)',
      },
      {
        type: 'list',
        name: 'isBlank',
        message:
          "🧙 : Do you want examples in the generated component's files?",
        choices: [
          'Yes, I want examples inside',
          "No, I'm PRO, leave the files with min code needed for start",
        ],
      },
      // {
      //   type: 'input',
      //   name: 'props',
      //   message:
      //     '🤖: Provide list of props and their type (optional). Example: value?: string, isDisabled: boolean, onClick: (value: string) => void',
      // },
      // {
      //   when: (response) => {
      //     console.log(response);
      //     return response.props;
      //   },
      //   name: 'propsTypes',
      //   message: 'propsTypes',
      // },
    ],
    actions: (data) => {
      data.name = plop.getHelper('properCase')(data.name);
      data.subDirectory = plop.getHelper('properCase')(data.subDirectory);
      const isBlank = data.isBlank !== 'Yes, I want examples inside';
      const basePath = `tools/plop-templates/create-new-component/${
        isBlank ? 'with-no-code-examples' : 'with-code-examples'
      }/`;
      return [
        {
          type: 'addMany',
          destination:
            '{{ dir }}/src/components/{{ getSubDirectoryPath subDirectory }}{{ name }}',
          base: basePath,
          templateFiles: `${basePath}/**`,
        },
      ];
    },
  });
  plop.setHelper('getInterface', (name) => `${name}Props`);
  plop.setHelper('getSubDirectoryPath', (subDirectory) => `${subDirectory}/`);
};
