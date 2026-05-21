import * as React from 'react';

import Heading from '@/components/atoms/headings/Heading';
import ContactForm from '@/components/molecules/ContactForm/ContactForm';

export default function ContactsPage() {
  return (
    <section>
      <div className='layout relative flex flex-col py-12'>
        <Heading title='Contact me' />

        <div className='bg-slate-200 dark:bg-slate-800 rounded-md p-4 md:px-8 lg:px-10 w-full lg:w-4/5'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
