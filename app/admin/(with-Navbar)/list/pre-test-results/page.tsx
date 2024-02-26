'use client'

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface User {
  // Add properties based on your actual user data structure
  name?: string;
  email?: string;
  // ... other properties
}

export default function SearchBar() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const userId = searchParams.get('user_id');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!userId) {
          throw new Error('Missing user ID in search parameters');
        }

        const response = await fetch(`http://localhost:8000/users/${userId}`);

        if (!response.ok) {
          throw new Error(await response.text());
        }

        const data = await response.json();
        setUser(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!user) return <div>User not found</div>;

  return (
    <>
          <p>Name: {user.firstname} {user.lastname}</p>
          <p>Name: {user.age}</p>
    </>
  );
}
