// app/page.tsx

/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */
'use client'

import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'
import CheckFootprint from '@/components/CheckFootprint'
import NavigationBar from '@/components/NavigationBar'
import TabContainer from '@/components/TabContainer'
import { TabProvider } from '@/contexts/TabContext'

// Define the interface for user data
interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)

  // Set the user data on mount
  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
  }, [])

  return (
    <TabProvider>
      <main className="min-h-screen bg-black text-white p-4">
        <CheckFootprint />
        <TabContainer />
        <NavigationBar />
        
        {/* User Data Section */}
        {userData ? (
          <div className="mt-8">
            <h1 className="text-2xl font-bold mb-4">User Data</h1>
            <ul>
              <li>ID: {userData.id}</li>
              <li>First Name: {userData.first_name}</li>
              <li>Last Name: {userData.last_name || 'N/A'}</li>
              <li>Username: {userData.username || 'N/A'}</li>
              <li>Language Code: {userData.language_code}</li>
              <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
            </ul>
          </div>
        ) : (
          <div className="mt-8">Loading...</div>
        )}
      </main>
    </TabProvider>
  )
}
