import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="avatar lg:ml-56 mt-20 flex flex-col items-center lg:justify-start lg:items-start justify-center">
        <div className=" relative w-56 rounded-full">
          <Image
            src="https://api.lorem.space/image/face?hash=92310"
            alt="manny"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <section className="flex flex-col items-center justify-center">
        <article>
          <h2 className="text-3xl mb-2">Hi I&apos;m Emmanuel Orduno</h2>
          <p className="text-lg max-w-2xl">
            When introducing yourself, you aim to convey an exhaustive, confident and purposeful
            story about who you are — not only what you’ve done, but also why you did it, what
            intimate belief system is driving your actions, what your strengths and weaknesses are,
            where you plan to go and how you’re working towards getting there. Plus, you’d like to
            impress your teammates and be memorable.
          </p>
        </article>
      </section>
    </div>
  );
}
