'use client';

import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import Button from '../Button';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Modal from './Modal';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    if (!isValidEmail(data.email)) {
      toast.error('Please enter a valid email address.');
      setError('email', {
        type: 'manual',
        message: 'Please enter a valid email address.',
      });

      setIsLoading(false);
      return;
    }

    axios
      .post('/api/register', data)
      .then(() => {
        toast.success('Registered successfully. Please log in.');
        registerModal.onClose();
      })
      .catch((error) => {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error('Something went wrong. Please try again.');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggleModal = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  //onBlur
  const onEmailBlur = () => {
    const email = getValues('email');
    if (email && !isValidEmail(email)) {
      setError('email', {
        type: 'manual',
        message: 'Please enter a valid email address.',
      });
      return;
    }
    clearErrors('email');
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Airbnb' subtitle='Create an account!' />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        onBlur={onEmailBlur}
        required
      />
      <Input
        id='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='password'
      />
    </div>
  );

  const footerContent = (
    <div className='mt-3 flex flex-col gap-4'>
      <hr />
      <Button
        outline
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className='mt-4 text-center font-light text-neutral-500'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <div>Already have an account?</div>
          <div
            className='cursor-pointer text-neutral-800 hover:underline'
            onClick={toggleModal}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      primaryActionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}
