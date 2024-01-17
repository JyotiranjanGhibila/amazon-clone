import { useState, useEffect } from 'react';
import axios from 'axios';

const useDeleteItem = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.delete(`http://localhost:8080/cart/delete/${id}`);

        // Checking if the response status is not in the 2xx range
        if (response.status < 200 || response.status >= 300) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { loading, error };
};

export default useDeleteItem;
