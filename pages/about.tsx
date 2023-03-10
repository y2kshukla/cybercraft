import Heading from '@/components/heading';
import Head from 'next/head';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-background flex flex-col gap-16 mb-16 pt-16'>
        <Heading className="flex justify-center w-full gap-4">About <span className='text-main'>Us</span></Heading>
        <div className='flex gap-8 items-center'>
          <div className='w-1/2 text-xl flex flex-col gap-4'>
            <p>
              Welcome to Cyber Crafts, a digital service agency that specializes in creating stunning digital experiences for discerning individuals and businesses.
            </p> 
            <p>
              At Cyber Crafts, we believe that digital design is the ultimate expression of luxury, elegance, and sophistication. That's why we work with the finest designers, developers, and digital experts to create bespoke solutions that are as unique as our clients.
            </p>
          </div>
          <div className='w-1/2'>
            <Image src={`./about/about.svg`} alt='About us' width={500} height={300}/>
          </div>
        </div>
        <div className='flex gap-8 flex-row-reverse items-center'>
          <div className='w-1/2 text-xl flex flex-col gap-4'>
            <p>
              Our team consists of talented professionals who are experts in their respective fields, from design and development to marketing and strategy. We pride ourselves on our ability to combine creativity and technology to create exceptional digital experiences that are both beautiful and functional.
            </p>
            <p>
              At Cyber Crafts, we believe that creativity is about attention to detail, quality, and service. That’s why we take the time to understand our clients’ unique needs and goals, and we work tirelessly to deliver exceptional results that exceed their expectations.
            </p>
          </div>
          <div className='w-1/2'>
            <Image src={`./about/abouttwo.svg`} alt='About us' width={500} height={300}/>
          </div>
        </div>
        <div className='text-xl'>
          We have had the pleasure of working with several clients from different niches, jewelry,e-commerce, clothing brands and many more. At Cyber Crafts, we are committed to providing our clients with the highest level of service and support. We take pride in our ability to deliver exceptional results that are both beautiful and functional, and we are dedicated to building long-lasting relationships with our clients. Thank you for considering Cyber Crafts for your digital needs. We look forward to the opportunity to work with you and create a stunning digital experience that reflects your unique vision and style. Crafting digital solutions for a connected world !
        </div>
      </main>
    </>
  )
}
