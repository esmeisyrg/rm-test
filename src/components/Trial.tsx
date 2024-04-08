import { useEffect, useState } from 'react';
import { getRealEstates } from '../hooks/apiRequest.tsx';

interface InfoProps {
    id: number;
    price: string;
    main_picture: {
        small?: string;
    };
    bedrooms?: number;
    minimum_price?: string;
}

function Trial() {
    const [data, setData] = useState<InfoProps[] | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const apiResponse = await getRealEstates();
                console.log(apiResponse); 
                const apiData = apiResponse.data; 
                setData(apiData);
            } catch (error) {
                console.error('Error fetching real estates', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {data &&
                data.map((item) => (
                    <div key={item.id}>
                        <h2>Property ID: {item.id}</h2>
                        <p>Price: {item.price}</p>
                        <p>Bedrooms: {item.bedrooms}</p>
                        {item.main_picture.small && (
                            <img src={item.main_picture.small} alt="Property" />
                        )}
                        <p>Minimum Price: {item.minimum_price}</p>
                    </div>
                ))}
        </div>
    );
}

export default Trial;
