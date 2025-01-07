import { createClient, ClientConfig } from '@sanity/client';

// Define the client configuration type
const config: ClientConfig = {
  projectId: 'tj07tzjs',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: true, // Set to false if you want to ensure fresh data
};

// Create and export the client
const client = createClient(config);

export default client;
