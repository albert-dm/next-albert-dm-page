<!-- @format -->

## albert-dm Portifolio and Blog

This project is meant to be the place where I show my work and myself as a Professional and a Person.
It extends from the code to it'ts result. I'll try to show how I come up to solutions in my day-to-day and also use this project as a playground for experimentation. 

Any suggestion or PR will be always very welcome.

For now we are going with a Next.JS website, that shows my portifolio and has a blog, based on MDX files (one for each post).

This brings two different points of attention:
- Blog posts are added using a PR to the `master` branch with a new post MDX component
- We use static file generations and serve fully static website

Let's start

## Getting Started

First of all clone this repository and enter the project folder.

Install project dependencies:

```bash
yarn install
```

Now, run de development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Quality tests

To be sure your code is good to go, first you should test its quality. 

Make sure you pass linting:

```bash
yarn lint
```

And unit tests:

```bash
yarn test
```

## Generating production build

To generate static files, run the comand

```bash
yarn export
```

The files will be inside the generated `/out` folder

## Contributing

Make sure to check the quality of you code before pushing it :)

To safe commit you code and guarantee commit standarization, use the command

```bash
yarn commit
```

Create a PR. If it is pushed to master your contribution will be live

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
