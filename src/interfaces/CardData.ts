export interface CardData {
  card_faces?: CardFaces[];
  all_parts?: AllParts[];
  createdAt: Date;
  id: string;
  imageStatus: boolean;
  image_uris?: ImageUris;
  name: string;
  set: string;
  scryfall_uri: string;
}

interface ImageUris {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
}

interface CardFaces {
  image_uris: ImageUris;
  name: string;
  type_line: string;
  object: string;
  mana_cost: string;
  oracle_text: string;
  power: string;
  toughness: string;
  flavor_text: string;
  artist: string;
  artist_id: string;
}

interface AllParts {
  component: string;
  id: string;
  name: string;
  type_line: string;
  uri: string;
}
