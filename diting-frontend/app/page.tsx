import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { twMerge } from 'tailwind-merge';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className='container flex w-full flex-col items-center gap-12'>
      <section className='text-center py-28 max-w-3xl flex flex-col gap-3 items-center'>
        <h1 className='pt-24 text-5xl sm:text-6xl tracking-tighter font-semibold'>
          自动总结录音内容
        </h1>
        <div className='bg-gray-100 txt-xs sm:text-sm w-fit px-2.5 rounded-xl border-gray-300 border text-gray-600 hover:shadow-lg transition-shadow'>
          Powered by {''}
          <Link
            className='underline'
            href={'https://github.com/openai/whisper'}
            target='_'
          >
            whisper
          </Link>
          {''} + {''}
          <Link
            className='underline'
            href={'https://openai.com/gpt-4'}
            target='_'
          >
            GPT-4
          </Link>
        </div>
        <div className='flex gap-4 flex-wrap py-6'>
          <Link href='/tryit' className={twMerge(buttonVariants(), 'w-full sm:w-48')}>
            Try it out
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
