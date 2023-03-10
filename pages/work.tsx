import Heading from '@/components/heading';
import WorkCard from '@/components/workCard';
import Head from 'next/head';

export default function Work() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-background flex flex-col gap-16 mb-16 pt-16'>
        <Heading className="flex justify-center w-full gap-4">Our <span className='text-main'>Work</span></Heading>
        <div className='grid sm:grid-cols-2 gap-8'>
            <WorkCard Heading={<>App <span className='text-main'>Design</span></>} Img={`./work/app.svg`} Link='/'/>
            <WorkCard Heading={<>Pitch <span className='text-main'>Deck</span> Design</>} Img='./work/pitch.svg' Link='/'/>
            <WorkCard Heading={<>Web <span className='text-main'>Applicaion</span></>} Img='./work/webdev.svg' Link='/'/>
            <WorkCard Heading={<>Website <span className='text-main'>Design</span></>} Img='./work/design.svg' Link='/'/>
            <WorkCard Heading={<>Packaging <span className='text-main'>Design</span></>} Img='./work/packaging.svg' Link='/'/>
            <WorkCard Heading={<>Social <span className='text-main'>Media</span> Management</>} Img='./work/social.svg' Link='/'/>
        </div>
      </main>
    </>
  )
}
