import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { SignInFlow } from '../types';
import { useState } from 'react';

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export default function SignInCard({ setState }: SignUpCardProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <Card className='h-full w-full p-8'>
        <CardHeader className='px-0 pt-0 space-y-3'>
          <CardTitle>Sign up to continue</CardTitle>
          <CardDescription className=''>
            Use your email or another service to continue
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-5 px-0 pb-0'>
          <form className='space-y-2.5'>
            <Input
              disabled={false}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder='Email'
              type='email'
              required
            />
            <Input
              disabled={false}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder='Password'
              type='password'
              required
            />
            <Input
              disabled={false}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder='Confirm Password'
              type='password'
              required
            />
            <Button className='w-full' type='submit' size='lg' disabled={false}>
              Continue
            </Button>
          </form>
          <Separator />
          <div className='flex flex-col gap-y-2.5'>
            <Button
              type='button'
              variant='outline'
              onClick={() => {}}
              disabled={false}
              size='lg'
              className='w-full relative'
            >
              <FcGoogle className='size-5 absolute top-2.5 left-2.5' />
              Continue with Google
            </Button>
            <Button
              type='button'
              variant='outline'
              onClick={() => {}}
              disabled={false}
              size='lg'
              className='w-full relative'
            >
              <FaGithub className='size-4 absolute top-2.5 left-2.5' />
              Continue with Github
            </Button>
          </div>
          <p className='text-xs text-muted-foreground'>
            Already have an account?{' '}
            <span
              onClick={() => setState('signIn')}
              className='text-sky-700 hover:underline cursor-pointer'
            >
              Sign In
            </span>
          </p>
        </CardContent>
      </Card>
    </>
  );
}
