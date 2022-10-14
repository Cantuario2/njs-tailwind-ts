import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold underline first-letter:text-cyan-700 hover:text-teal-600 hover:text-ellipsis hover:first-letter:text-amber-700">
      Next.js With Tailwind and Typescript
    </h1>
  );
}

export default HomePage;