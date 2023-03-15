import Heading from '@/components/heading';
import Head from 'next/head';
import Image from 'next/image';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { FiChevronDown } from 'react-icons/fi';

export default function Privacy() {
    const accordion = [
        {
            id: 1,
            heading: 'Cookies and similar technologies',
            content: `Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.`,
        },
        {
            id: 2,
            heading: 'Use of personal data',
            content: `Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.`,
        },
        {
            id: 3,
            heading: 'Sharing of your information',
            content: `Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.`,
        },
        {
            id: 4,
            heading: 'Storage and processing',
            content: `Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.`,
        },
        {
            id: 5,
            heading: 'Children’s privacy',
            content: `Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.`,
        },
        {
            id: 6,
            heading: 'Confidentiality and security of personal data',
            content: `Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.`,
        },
        {
            id: 7,
            heading: 'Other websites and services',
            content: `Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.`,
        },
        {
            id: 8,
            heading: 'Limitation to our privacy policy',
            content: `Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.`,
        },
        {
            id: 9,
            heading: 'How to contact us',
            content: `Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.`,
        },
    ];

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='text-background flex flex-col gap-16 mb-16 pt-16'>
                <Heading className="flex justify-center w-full gap-4">Privacy <span className='text-main'>policy</span></Heading>
                <div className='flex flex-col gap-4'>
                    <Heading className='border-main border-b-2' type='h2'>Date of Last Revision: 02/14/2023</Heading>
                    <p>Welcome to the Cyber crafts agency privacy policy (the Company, We or Us).Your privacy is important to us. This online privacy policy (Privacy Policy) explains how We collect, share, use, and protect information when you visit our website (Website) or use our online services (Services).As part of our commitment to privacy, We respect all rules and provisions stated in the new General Data Protection Rules (GDPR). This Privacy Policy should be read in conjunction with letter-Our Terms of Use (the Terms). All defined terms used in this Privacy Policy have the same meaning ascribed to them in the Terms, unless expressly otherwise provided for.We reserve the right to revise this Privacy Policy at any time. If We change the Privacy Policy, We’ll provide notice by posting the new Privacy Policy here and changing the date on the top.</p>
                </div>
                <div className='flex gap-8 max-sm:flex-col-reverse items-center'>
                    <div className='border-main border-2 rounded-xl p-4 flex flex-col gap-4 sm:w-1/2'>
                        <Heading type='h2'>
                            Types of <span className='text-main'>personal</span> data we <span className='text-main'>collect</span>
                        </Heading>
                        <p>When you visit the Website or use Our Services, we may collect personal information from or about you. In particular, We collect information you provide when you: This website collects, by itself or through third parties and Cookies. . We may collect your personal information that you left Us by visiting our website, or subscribing to our services, or attending an event, or any other medium linked to Us (all referred to as, Personal Data). The Personal Data may include, but is not limited to, the following: First name, last name, phone number, company name, profession, address, email address, and website.</p>
                    </div>
                    <div className='relative h-40 w-full sm:w-1/2'>
                        <Image src="./privacy/privacy.svg" alt="some text" fill/>
                    </div>
                </div>
                <div>
                    <Accordion className='flex flex-col gap-4' allowZeroExpanded={true}>
                        {accordion.map((item) => {
                            return (
                                <AccordionItem key={item.id}>
                                    <AccordionItemHeading className='bg-white border-main border-2'>
                                        <AccordionItemButton className='flex justify-between items-center px-4 py-2'>
                                            <div>
                                                { item.heading }
                                            </div>
                                            <FiChevronDown size={20}/>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className='px-4 py-2 bg-main bg-opacity-20'>
                                        <p>
                                            { item.content }
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </main>
        </>
    )
}
