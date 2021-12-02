This is a [Next.js](https://nextjs.org/) typescript boilerplate created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This boilerplate uses the following dependencies

- [Emotion](https://emotion.sh)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Eslint](https://eslint.org)
- [Stylelint](https://stylelint.io)
- [Typescript](https://www.typescriptlang.org)
- [Plop](https://plopjs.com)

## How to use

You will use the create-next-app command with this repository url:

```bash
npx create-next-app -e https://github.com/jotamodesto/boilerplate-next
# or
yarn create next-app -e https://github.com/jotamodesto/boilerplate-next
```
Once the project is created you can delete the ".github" folder

## Create a component

The boilerplate has plop configured to genearate templates of components

Eg: using the command
```bash
npm run generate button
# or
yarn generate button
```
Will create the button component structure in the 'components' folder
```
Button
  index.tsx
  button.stories.tsx
  button.test.tsx
  styles.ts
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
