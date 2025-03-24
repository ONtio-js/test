'use client';
import React from 'react'
import Button from '../_components/Button';
import { useRouter } from 'next/navigation';

const ButtonComponent = () => {
    const router = useRouter();
  return (
    <div className="mt-10 flex justify-center">
      <Button
        title="Join the Movement"
        variant="primary"
        type="link"
        style=""
        onclick={() => router.push('/waitlist')}
      />
    </div>
  );
}

export default ButtonComponent