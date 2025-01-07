import React from "react";

interface Student {
  name: string;
  avatarUrl: string;
}

interface Supervisor {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

const AboutUs: React.FC = () => {
  const supervisor: Supervisor = {
    name: "Dr. Lawal",
    title: "Project Supervisor",
    bio: "Dr. Lawal is a Senior Lecturer in the Computer Science Department with over 10 years of experience in software development and project management.",
    avatarUrl: "https://randomuser.me/api/portraits/men/11.jpg", // Add actual URL to the supervisor's avatar
  };

  const students: Student[] = [
    { name: "Sodiq", avatarUrl: "/sweedy.jpg" },
    { name: "Esther", avatarUrl: "/esther.jpg" },
    { name: "Wasiu", avatarUrl: "/wasiu.jpg" },
    { name: "Victoria", avatarUrl: "/ictoria.jpg" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        {/* Supervisor Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col items-center sm:flex-row">
          <img
            src={supervisor.avatarUrl}
            alt={supervisor.name}
            className="w-32 h-32 rounded-full mb-4 sm:mb-0 sm:mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold text-blue-600">{supervisor.name}</h2>
            <p className="text-xl text-gray-700">{supervisor.title}</p>
            <p className="mt-4 text-gray-600">{supervisor.bio}</p>
          </div>
        </div>

        {/* Students Section */}
        <h2 className="text-3xl font-semibold text-center mb-6">Our Project Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={student.avatarUrl}
                alt={student.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600">{student.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
