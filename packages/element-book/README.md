# element-book

An [`element-vir`](https://npmjs.com/element-vir) drop-in element for building, testing, and demonstrating a collection of elements (or a design system).

Currently in MVP form. Functional, but WIP.

# Installation

```bash
npm i element-book
```

# Terminology

-   **section**:

# Why not Storybook?

Because Storybook is un-composable, impossible to debug, and full of behind-the-scenes \*magic\* that you can't backtrack without deeply understand the inner workings of Storybook. With `element-book`, it's all just imports that you can directly follow with the TypeScript compiler.
