import { sum } from '@certilingu/sample-lib';

export default function Home() {
  const result = sum(1, 2);

  return (
    <main className="">
      <div>{result} </div>
    </main>
  );
}
