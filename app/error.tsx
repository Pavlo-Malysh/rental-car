'use client';

import Link from "next/link";

interface ErrorProps {
  error: Error;
};

const Error = ({ error }: ErrorProps) => {
  return (
    <>

      <p>Could not fetch the list of cars. {error.message}</p>
      <Link href="/">Go back home</Link>
    </>

  )
}

export default Error;