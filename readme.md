# Project Setup with NextJs, Typescript, Eslint, Prettier
This is an example project setup NextJs, Typescript, Eslint, Prettier. NextJs made serverside rendering React framework so easy with much less boilerplate code.

## Setup
0. `brew install nvm`
1. `nvm install node`
2. `git init`
3. add .gitignore
4. `node -v > .nvmrc`
5. `npm init -y`

### [NextJs](https://github.com/zeit/next.js#how-to-use)

6. `npm i -P next react react-dom`
7. add a script to your package.json like this:
    ```
    {
      "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
      }
    }
    ```

### [Typescript](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript#nextjs--typescript)

8. `npm i -D typescript @types/react @types/react-dom @types/node @types/next`
9. `npm i -P @zeit/next-typescript fork-ts-checker-webpack-plugin`
10. create `tsconfig.json`
    ```
    {
      "compilerOptions": {
        "allowJs": true, /* Allow JavaScript files to be type checked. */
        "allowSyntheticDefaultImports": true,
        "alwaysStrict": true, /* Parse in strict mode. */
        "esModuleInterop": true, /* matches compilation setting */
        "isolatedModules": true, /* to match webpack loader */
        "jsx": "preserve", /* Preserves jsx outside of Next.js. */
        "lib": ["dom", "es2017"], /* List of library files to be included in the type checking. */
        "module": "esnext", /* Specifies the type of module to type check. */
        "moduleResolution": "node", /* Determine how modules get resolved. */
        "noEmit": true, /* Do not emit outputs. Makes sure tsc only does type checking. */
        "typeRoots": [
          "./node_modules/@types"
        ],

        /* Strict Type-Checking Options, optional, but recommended. */
        "noFallthroughCasesInSwitch": true, /* Report errors for fallthrough cases in switch statement. */
        "noUnusedLocals": true, /* Report errors on unused locals. */
        "noUnusedParameters": true, /* Report errors on unused parameters. */
        "resolveJsonModule": true,
        "removeComments": false,
        "skipLibCheck": true,
        "strict": true /* Enable all strict type-checking options. */,
        "target": "esnext" /* The type checking input. */
      },
      "exclude": ["node_modules", "next.config.js"],
      "include": ["**/*.ts", "**/*.tsx"]
    }
    ```
11. create `next.config.js`
    ```
    // next.config.js
    /* eslint-disable @typescript-eslint/no-var-requires */
    const withTypescript = require('@zeit/next-typescript');
    const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
    /* eslint-enable @typescript-eslint/no-var-requires */

    module.exports = withTypescript({
      webpack(config, options) {
        // Do not run type checking twice:
        if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

        return config;
      },
    });
    ```
12. create `babel.config.js`
    ```
    module.exports ={
      presets: [
        'next/babel',
        '@zeit/next-typescript/babel'
      ]
    };
    ```

### [Eslint and Prettier](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

13. `npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react`
14. `npm i -D eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react-hooks`
15. `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
16. create `.eslintrc.js`
    ```
    module.exports =  {
      parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
      extends:  [
        'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'airbnb',  //Uses airbnb recommended rules
        'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
        ecmaFeatures:  {
          jsx:  true,  // Allows for the parsing of JSX
        },
      },
      env: {
        browser: true,
        node: true
      },
      rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
          'vars': 'all',
          'args': 'after-used',
          'ignoreRestSiblings': false
        }],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-object-literal-type-assertion': ['error', {'allowAsParameter': true}],
        'jsx-a11y/anchor-is-valid': [ 'error', {
          'components': [ 'Link' ],
          'specialLink': [ 'hrefLeft', 'hrefRight' ],
          'aspects': [ 'invalidHref', 'preferButton' ]
        }],    
        'react/prop-types': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            'devDependencies': true
          }
        ],
        'comma-dangle': [
          'error',
          {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'never'
          }
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off'
      },
      plugins: [
        '@typescript-eslint/eslint-plugin',
        'react-hooks'
      ],
      settings:  {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
          }
        },
        react:  {
          version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
    }
    ```
17. create `.prettierrc.js`
    ```
    module.exports =  {
      semi:  true,
      trailingComma:  'es5',
      singleQuote:  true,
      printWidth:  100,
      tabWidth:  2,
    };
    ```

### [Create Pages](https://github.com/zeit/next.js/tree/canary/examples/with-typescript)
18. create `pages` folder
19. create `pages.tsx` under `pages/` (i.e. `pages/index.tsx` for `/` route)

### [Jest and Enzyme](https://medium.com/@miiny/unit-test-next-js-with-jest-and-enzyme-5b305a8e29fe)
20. `npm i -D jest babel-jest babel-core babel-preset-env babel-preset-react`
21. add scripts in `package.json`
    ```
    "scripts": {
      "test": "jest",
      "test:watch": "jest --watch",
      "test:coverage": "jest --coverage"
    },
    ```
22. `npm i -D enzyme enzyme-adapter-react-16 enzyme-to-json`
23. `npm i -D typescript @types/enzyme @types/enzyme-adapter-react-16 @types/jest`
24. create `jest.config.js`
    ```
    module.exports = {
      moduleFileExtensions: ['ts', 'tsx', 'js'],
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
      globals: {
        NODE_ENV: 'test',
      },
      snapshotSerializers: ['enzyme-to-json/serializer'],
      coveragePathIgnorePatterns: [
        '/node_modules/',
        'enzyme.js',
        '<rootDir>/configs/',
        'jest.config.js',
        '.json',
        '.snap',
      ],
      setupFiles: ['<rootDir>/enzyme.js'],
      coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/mocks.js',
        '\\.(css|less|scss)$': '<rootDir>/__mocks__/mocks.js',
      },
    };
    ```
25. create `enzyme.js`
    ```
    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';
    import { setConfig } from 'next/config';
    import config from './next.config';

    // Make sure you can use "publicRuntimeConfig" within tests.
    setConfig(config);
    Enzyme.configure({ adapter: new Adapter() });
    ```
26. change `env` in `.eslintrc.js`
    ```
    env: {
            browser: true,
            node: true,
            jest: true
          },
    ```

### [Styled-JSX](https://nextjs.org/blog/styling-next-with-styled-jsx)
27. `npm i -P styled-jsx`
28. `npm i -D @types/styled-jsx`
29. change `babel.config.js`
    ```
    module.exports = {
      presets: [
        [
          'next/babel',
          {
            'styled-jsx': {},
            'preset-env': {},
            'preset-react': {},
          },
        ],
        '@zeit/next-typescript/babel',
      ],
    };
    ```