export interface InfoProps {
    id: number;
    price: number;
    business_type?: string;
    arrangement?: string;
    realstatetype_id?: number;
    realstate_type?: string;
    sqm_land?: number;
    parking_spots?: number;
    bedrooms?: number;
    bathrooms?: number;
    city?: string;
    sector?: string;
    latitude?: number;
    longitude?: number;
    status?: string;
    condition_status?: string;
    improvements: {
      realstate_id?: number;
      name?: string;
    }
    main_picture: {
      big?: string;
      small?: string;
    }
    project: {
      separation_price?: string;
    }
    minimum_price?: string;
    maximum_price?: string;
  
    info: {
      realstate_id?: number;
      language_id?: number;
      title?: string;
    };
}
  