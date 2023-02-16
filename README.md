To see the issue with code previews

1. `npm install`
2. `npm run storybook`
3. Open Button Docs page in the browser: http://localhost:6006/?path=/docs/example-button--docs
4. Click "Show code" on the primary story, see valid JSX.
5. Edit `src/stories/Button.mdx` and uncomment the `Meta` block to attach the MDX file to the Button component
6. Open Button Docs page in the browser: http://localhost:6006/?path=/docs/example-button--docs
7. Click "Show code", see the story object instead of valid JSX:

```
{
  args: {
    primary: true,
    label: 'Button'
  }
}
```

