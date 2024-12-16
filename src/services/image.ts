import imageUrlBuilder from '@sanity/image-url';
import client from './SanityClient';

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
