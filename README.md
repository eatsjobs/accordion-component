# \<accordion-component>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

Storybook demo [https://eatsjobs.github.io/accordion-component/](https://eatsjobs.github.io/accordion-component/)

## Installation
```bash
npm i @eatsjobs/accordion-component
```

## Usage
```html
<style>
 html {
  --border-color: hsl(0, 0%, 82%);
  --border-width: 2px;
  --border-style: solid;
  --border-radius: 7px;
  --container-width: 20em;
  --border-color-focus: hsl(216, 94%, 73%);
  --item-background-hover: hsl(216, 94%, 94%);
  --button-text-color: hsl(0, 0%, 13%);
}
</style>
<script type="module">
  import 'accordion-component/accordion.js';
</script>

<accordion-group>
  <accordion-item title="My header title" id="0">
    A
  </accordion-item>
  <accordion-item accordion-item title="My header title 1" id="1">
    B
  </accordion-item>
  <accordion-item accordion-item title="My header title 2" id="2">
    C
  </accordion-item>
</accordion-group>
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```

## Testing with Web Test Runner
To run the suite of Web Test Runner tests, run
```bash
npm run test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```

## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
