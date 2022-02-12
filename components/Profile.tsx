import React from 'react';
import Link from 'next/link';

const Profile = () => {
  return (
    <div>
        <div className="text-2xl font-bold text-indigo-500">Hello world</div>
        <div>Data Engineer with over 2 years experience in data science, blockchain and full stack web development</div>
        <div className="mt-6">
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
