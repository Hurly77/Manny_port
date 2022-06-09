import Button from '../../../common/button';
import { useRouter } from 'next/router';

export default function Home() {
  const { push } = useRouter();
  return (
    <div className="hex-pattern h-full flex flex-col gap-4">
      <div className="flex justify-start ml-56 mt-56 flex-col w-fit">
        <h1 className="text-4xl text-white mb-4">Manny&apos;s Portfolio</h1>
        <div>
          <Button variant="primary" size="sm" onClick={() => push('/about')}>
            About
          </Button>
          <Button variant="secondary" size="sm" onClick={() => push('/projects')}>
            Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
