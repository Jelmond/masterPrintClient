import { useState, useEffect } from 'react';

interface UseStrapiOptions {
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
}

export const useStrapi = <T>({ path, method = 'GET', body }: UseStrapiOptions) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://mppshop.by';
        let url = `${baseUrl}${path}`;
        if (url.includes('?')) {
          url += '&populate=*';
        } else {
          url += '?populate=*';
        }
        
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          ...(body && { body: JSON.stringify(body) }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path, method, body]);

  return { data, error, loading };
}; 