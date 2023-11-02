"use client"
import { useEffect, useState } from 'react';
import { getUserData, getWalletData, getAllTransactions } from '@/api';

export function useApiData<T>(fetchFunction: () => Promise<T>) {
    console.log("Calling useApiData");
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFunction();
        setData(response);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, loading, error };
}
