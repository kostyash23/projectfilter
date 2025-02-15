import { useEffect, useState } from "react";

interface UseFetchData<T> {
    data: T[];
    loading: boolean;
    error: null | Error;
}
const useFetchData = <T,>(url: string): UseFetchData<T> => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true); 
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data.items);
                setLoading(false);
            })
            .catch((error: Error) => {
                setError(error);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };

};

export default useFetchData; 