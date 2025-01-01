// app/page.tsx

/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */
'use client';

import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Index() {
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const user = WebApp.initDataUnsafe?.user;
    if (user) {
      setUsername(user.username || user.first_name || 'ضيف');
    }
  }, []);

  const handleNavigate = () => {
    if (username) {
      router.push(`/home?username=${encodeURIComponent(username)}`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">مرحباً بك!</h1>
      {username ? (
        <>
          <p>مرحبًا، {username}!</p>
          <button
            onClick={handleNavigate}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            الذهاب إلى صفحة Home
          </button>
        </>
      ) : (
        <p>جاري تحميل بيانات المستخدم...</p>
      )}
    </div>
  );
}

