export interface InfoProps {
  id: number;
  parent_id: number;
  slug: number;
  property_title?: string | null;
  is_favorite?: boolean | null;
  address?: string | null;
  price: string;
  alternate_price?: string | null;
  total_comission?: string | null;
  currency: {
    iso: string;
    symbol: string;
  };
  agent_list: {
    id: number;
    name: string;
    email: string;
    phone: string;
    picture: string;
    picture_url: string;
    pivot: {
      realstate_id: number;
      people_id: number;
      is_no_broker: number;
    };
  }[];
  business_type: string;
  arrangement: string;
  realstatetype_id: number;
  realstate_type: string;
  sqm_construction: string;
  sqm_land: string;
  parking_spots: number;
  bedrooms: number;
  bathrooms: number;
  city: string;
  city_id: number;
  sector: string;
  sector_id: number;
  latitude: number;
  longitude: number;
  maintenance_fee?: string | null;
  is_collection: number;
  status: string;
  status_id: number;
  visit_status?: string | null;
  floor_level: number;
  floors_total?: number | null;
  pumps?: string | null;
  condition_status: string;
  has_trust_entity: number;
  trust_name?: string | null;
  trust_entity_id?: number | null;
  trust_entity_name?: string | null;
  trust_entity_slug?: string | null;
  trust_entity_created?: string | null;
  improvements: {
    realstate_id: number;
    name: string;
    value: string;
  }[];
  videos: unknown[]; // Usando unknown en lugar de any
  main_picture: {
    big: string;
    small: string;
  };
  project: {
    id: number;
    delivers: string;
    separation_price: string;
    separation_currency: {
      iso: string;
      symbol: string;
    };
    sets_count: number;
    units_count: number;
    minimum_price: string;
    maximum_price: string;
  };
  agency?: unknown; 
  info: {
    realstate_id: number;
    language_id: number;
    title: string;
  }[];
  agents: {
    id: number;
    name: string;
    email: string;
    phone: string;
    picture: string;
    picture_url: string;
    pivot: {
      realstate_id: number;
      people_id: number;
      is_no_broker: number;
    };
  }[];
}
