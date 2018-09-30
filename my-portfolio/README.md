# Scott Roberts' Portfolio

## Developer

### Creation

I used Vue-CLI v3.0.1 installation tools to create a static, front-end single page web application.
Visit [Vue CLI 3](https://cli.vuejs.org/) for more information.

Make sure to install the Vue CLI 3 appropriately. It is different from Vue CLI 2. [Reference](https://cli.vuejs.org/guide/installation.html)

Once added, you can create a project

```shell
vue create [PROJECT-NAME]
```

#### Current Preset

Manual Choice for Project.

```shell
Vue CLI v3.0.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, PWA, Router, CSS Pre-processors, Linter, Unit
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): SCSS/SASS
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Mocha
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? Yes
? Save preset as: Static_SPA
```

Saved in .vuerc.

```json
"Static_SPA": {
    "useConfigFiles": true,
    "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-pwa": {},
    "@vue/cli-plugin-eslint": {
        "config": "prettier",
        "lintOn": [
        "save"
        ]
    },
    "@vue/cli-plugin-unit-mocha": {}
    },
    "router": true,
    "routerHistoryMode": false,
    "cssPreprocessor": "sass"
}
```

#### Additional Plugins

Vuetify.js for created components and styling. [Vuetify](https://vuetifyjs.com/)

Addition to Project

```shell
vue add Vuetify
```

Be sure to add v-app element above any vuetify components. Some will not render properly without it. In App.vue

```html
<template>
  <!-- Entry point for main application -->
  <div id="app">
    <v-app>
      <!-- Displays a "view" from the view folder -->
      <router-view />
    </v-app>
  </div>
</template>
```

### NPM Scripts

Install all node dependencies.

```shell
npm install
```

Compile and start hot-reload for development

```shell
npm run serve
```

Lint and fix files

```shell
npm run lint
```

Run unit tests

```shell
npm run test:unit
```

Compile and minify for production

```shell
npm run build
```

Deploy project to Github - see deploy.sh in #/src for more details

```shell
npm run deploy
```

### Formatting

This project uses VS Code formatting settings with Vetur extension pack to format all code files.

- HTML: js-beautify-html
- JS: prettier
- LESS/SCSS: prettier

  Visit [Vetur Docs](https://vuejs.github.io/vetur/) for more information.
  Visit [Prettier](https://prettier.io/) for more information.
