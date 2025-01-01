// icons/Home.tsx

/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */
'use client';
import { IconProps } from "../utils/types";
import { useSearchParams } from 'next/navigation';


const Home: React.FC = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get('username') || 'ضيف';

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">مرحباً، {username}!</h1>
      <p>هذه هي صفحة Home الخاصة بك.</p>
    </div>
  );
};

export default Home;
