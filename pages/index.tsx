import Button from '@/components/button';
import ChosingCards from '@/components/chosingCards';
import Heading from '@/components/heading';
import Testimonials from '@/components/testimonials';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-background flex flex-col gap-16 mb-16'>
        {/* hero Section */}
        <div className='flex gap-8 content-center	items-center py-24'>
          <div className='w-1/2 flex flex-col gap-4'>
            <Heading>
              Cyber <span className='text-main'>Crafts</span> Agency
            </Heading>
            <Heading type='h2'>
              Crafting digital solutions for a connected world!!
            </Heading>
            <p>A premier digital agency dedicated to helping businesses succeed in the ever-evolving digital landscape. In today's world, a strong online presence is essential to any business's success, and we specialize in creating customized digital solutions to help our clients achieve their goals.</p>
            <div>
              <Button link='/'>More details</Button>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='bg-background h-40 w-full'></div>
          </div>
        </div>
        {/* about section */}
        <div className='flex flex-col gap-16'>
          <div className='flex gap-8 items-center'>
            <img className='rounded-2xl w-1/2' src='https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg'/>
            <div className='flex flex-col gap-4'>
              <Heading><span className='text-main'>Our</span> Team</Heading>
              <p>Our team of experts is passionate about delivering cutting-edge technology and creative solutions to help our clients grow their online presence and achieve their business objectives. From website design and development to digital marketing and branding, we have the skills and expertise to provide our clients with a comprehensive suite of digital services.</p>
            </div>
          </div>
          <div className='flex flex-row-reverse gap-8 items-center'>
            <img className='rounded-2xl w-1/2' src='https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg'/>
            <div className='flex flex-col gap-4'>
              <Heading><span className='text-main'>Our</span> Services</Heading>
              <Heading type='h2'>We offer the best services</Heading>
              <p>Unlock your business full potential. From custom websites to strategy, our team of experts will help your company thrive online.
                Let us craft your unique presence and drive results from A to Z.</p>
              <div>
                <Button link='/'>See more</Button>
              </div>
            </div>
          </div>
        </div>
        {/* why chose us */}
        <div className='flex flex-col gap-16'>
          <div className='flex justify-center'>
            <Heading><span className='text-main'>Why</span> chose <span className='text-main'>Us</span></Heading>
          </div>
          <div className='grid grid-cols-2 gap-8'>
            <ChosingCards heading='Skilled Professionals'>At Cyber Crafts Agency, we understand the importance of staying ahead of the curve in the digital landscape. That's why we bring a team of highly skilled and experienced professionals to the table, ensuring that your project is in the best hands.</ChosingCards>
            <ChosingCards heading='Latest Technology'>Our experts have a deep understanding of the latest industry trends and will work closely with you to create tailored solutions that meet your unique business needs and goals.</ChosingCards>
            <ChosingCards heading='Expertise and Experience'>From website design and development, to digital marketing, mobile app development, video production and more. We have the expertise and experience to help your business succeed in the digital world.</ChosingCards>
            <ChosingCards heading='Trusted'>Trust us to craft digital solutions that drive success and elevate your business to the next level.</ChosingCards>
          </div>
        </div>
        {/* testimonials */}
        <div className='flex flex-col gap-16'>
          <div className='flex justify-center'>
            <Heading>Testimonials</Heading>
          </div>
          <div className='grid grid-cols-2 gap-8'>
            <Testimonials text='I would highly recommend Cyber Crafts Agency to anyone looking for a top-notch digital agency that can help take their business to the next level.' writer='Mrs. Van Hartmann' role='Legacy Usability Manager'/>
            <Testimonials text='I was particularly impressed with their ability to deliver results within our budget and timeframe, without compromising on quality.' writer='Lana Bernier' role='Senior Paradigm Strategist'/>
            <Testimonials text={`I had the pleasure of working with Cyber Crafts Agency on a recent digital marketing campaign for my business, and I couldn't be happier with the results.`} writer='Mrs. Rose Clington' role='Usability Manager' />
            <Testimonials text='Their team of experts was incredibly professional, responsive, and knowledgeable, and they took the time to understand my unique needs and objectives' writer='John Doe' role='Senior Business Strategist'/>
          </div>
        </div>
      </main>
    </>
  )
}