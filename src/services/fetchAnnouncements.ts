import config from "./SanityClient"; // Sanity client configuration

// Define the type for the announcement response
interface Announcement {
  title: string;
  content: string;
  date: string;
}

// Function to fetch all announcements
export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  const query = `*[_type == "announcement"] | order(date desc) {
    title, 
    content, 
    date
  }`;

  try {
    const response: Announcement[] = await config.fetch(query);
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching announcements:", error.message);
    } else {
      console.error("Unknown error fetching announcements:", error);
    }
    throw new Error("Failed to fetch announcements");
  }
};

// Function to fetch announcements by date range
export const fetchAnnouncementsByDate = async (startDate: string, endDate: string): Promise<Announcement[]> => {
  if (!startDate || !endDate) {
    throw new Error("Both startDate and endDate parameters are required");
  }

  const query = `*[_type == "announcement" && date >= $startDate && date <= $endDate] | order(date desc) {
    title, 
    content, 
    date
  }`;

  try {
    const response: Announcement[] = await config.fetch(query, { startDate, endDate });
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching announcements by date range:", error.message);
    } else {
      console.error("Unknown error fetching announcements by date range:", error);
    }
    throw new Error("Failed to fetch announcements by date range");
  }
};
