import Image from 'next/image';
import Button from './button';

type CardProps = {
  src: string;
  title: string;
  children: string;
  href: string;
};

export default function Card({ href, src, title, children }: CardProps) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:h-56 max-w-xl m-2">
      <figure className="relative w-full h-56 lg:h-full lg:w-56 bg-black">
        <Image src={src} alt="Movie" layout="fill" objectFit="cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{children}</p>
        <div className="card-actions justify-end">
          <a href={`http://localhost:5500/${href}`} target="_blank" rel="noreferrer">
            <Button variant="primary" size="sm">
              Visit
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
