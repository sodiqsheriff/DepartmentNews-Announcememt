import { createClient, ClientConfig } from '@sanity/client';

// Define the client configuration type
const config: ClientConfig = {
  projectId: 'tj07tzjs',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token: 'skoU3QObGeHM4n1lnCYZFyP6nG7rLECNkOHTITgfDdYV8743RQ9mwhaKGt51t8j40zrJPdNVVyJ0HwjSbghtY4MyO85zJ0seQqbYTW8ESqz0UwGX16XgUj8Zty05CpKVhTJCb6x0i40NZ6JGo4hxaYnLMX27lGNSBDRdCV6CHeCtnqjzYuNn',
  useCdn: true, // Set to false if you want to ensure fresh data
};

// Create and export the client
const client = createClient(config);

export default client;
