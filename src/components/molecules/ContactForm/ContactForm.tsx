'use client';

import { Form, Formik } from 'formik';
import { useTheme } from '@/hooks/useTheme';
import React, { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup';

import 'react-toastify/dist/ReactToastify.css';

import Button from '@/components/atoms/buttons/Button';

import { Input } from './Input';
import { Select } from './Select';
import { TextArea } from './TextArea';

const ContactForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const reCaptchaSiteKey = '6LcSyzAoAAAAAC7JTJ6gtOWW3cjTK_vKRm2WjEtC';
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const { theme } = useTheme();

  useEffect(() => {}, [isVerified]);

  const subjects = [
    { key: 'dev', value: '👩🏻‍💻 I need a website / app developed' },
    { key: 'work', value: '🤝 Let\'s work together on something' },
    { key: 'recruiter', value: '👔 I\'m a recruiter and want to hire you' },
    { key: 'feedback', value: '💡 I\'ve got feedback on this website' },
    { key: 'problem', value: '🤕 Reporting a problem' },
    { key: 'general', value: '🙋 General inquiry' },
    { key: 'other', value: '❓ Other' },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("Don't be a stranger :)"),
    email: Yup.string()
      .email('Something seems off with the address you entered 🤔 Please double-check and try again.')
      .required("Required - otherwise it's kinda hard for me to reply to you 🤷‍♀️"),
    subject: Yup.mixed()
      .oneOf(subjects.map((s) => s.value), 'Please select a subject')
      .required("Don't leave me hanging! I need a subject to know what's up 🧐"),
    message: Yup.string().required('"One does not simply submit a contact form without a message."'),
  });

  async function handleCaptchaSubmission(token: string | null) {
    const res = await fetch('/api/recaptcha', {
      body: JSON.stringify({ token }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { success, error } = await res.json();

    if (success) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  function showSuccess() {
    toast("Thanks for your message! 🤗 I will get back to you as soon as possible.", {
      type: 'success',
    });
  }

  function showError() {
    toast(
      () => (
        <>
          Whoops, something went wrong on our side! 😟 <br /> Please try again - if the issue persists, reach out directly at{' '}
          <a className='ms-1 underline' href='mailto:marta_panc@me.com'>
            marta_panc@me.com
          </a>
        </>
      ),
      {
        autoClose: 15000,
        type: 'error',
      },
    );
  }

  const handleSubmit = async (
    formValues: Record<string, string>,
    setSubmitting: (arg: boolean) => void,
    resetForm: () => void,
  ) => {
    if (isVerified) {
      const json = JSON.stringify(formValues, null, 2);

      const res = await fetch('/api/contacts/send', {
        body: json,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();

      if (error) {
        showError();
      } else {
        showSuccess();
        resetForm();
      }
    } else {
      showError();
    }

    setSubmitting(false);
    recaptchaRef.current?.reset();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        company: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values, setSubmitting, resetForm);
      }}
    >
      {({ isSubmitting, isValid }) => {
        return (
          <Form role='form' className='mt-4'>
            <Input
              id='name'
              label='Name'
              placeholder='Bilbo Baggins'
            />

            <Input
              id='company'
              label='Company'
              placeholder='CyberWizards Ltd.'
            />

            <Input
              id='email'
              label='Email Address'
              placeholder='hr@hogwarts.edu'
            />

            <Select
              id='subject'
              label='Subject'
              options={subjects}
            />

            <TextArea
              id='message'
              label='Message'
              placeholder="What's on your mind? The email's the limit! 🪄✨"
              rows={6}
            />

            <div className='mt-2 flex justify-end'>
              <ReCAPTCHA
                sitekey={reCaptchaSiteKey}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
              />
            </div>

            <div className='mt-2 flex justify-end'>
              <Button
                type='submit'
                disabled={!isValid || isSubmitting}
                className='group'
              >
                {isSubmitting ? 'Working on it...' : 'Send message'}
              </Button>
            </div>

            <ToastContainer
              position='bottom-left'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
