import type { Project, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Ho Quoc Bao',
  role: 'Software Developer',
  tagline: 'Building digital experiences that matter.',
  bio: 'I am a software developer with a passion for creating meaningful technology products. I am always looking for creative and efficient solutions to complex problems.\n',
  philosophy: '"Code is not just a tool but also an art. Each line of code is a opportunity to make something beautiful, effective and sustainable."',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'baohoo10205@gmail.com',
  githubUrl: 'https://github.com/qbael',
  resumeUrl: 'src/assets/QuocBao_s_Resume.pdf',
  facebookUrl: 'https://www.facebook.com/baohoo10205',
  avatarUrl: 'src/assets/avatar.jpeg',
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Medical Appointment Scheduling System',
    description: 'A full-stack application for booking medical appointments, with real-time availability and multi-provider support.',
    longDescription: 'Built in microservices architecture for high scalability, flexible, and maintainable codebase. Integrated Spring Cloud API Gateway for routing.' +
        'This system supports personal and small clinics can easily manage their appointments, patients, and doctors. It also provides a user-friendly interface for patients to book and manage their appointments.',
    tags: ['Next.js', 'TailwindCSS', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/qbael/Medify',
    status: 'completed',
    year: '2025',
    highlight: 'Can be deployed on-premises or cloud, with multi-tenancy support',
  },
  {
    id: 2,
    title: 'Phone Store Management System',
    description: 'A comprehensive system for managing inventory, sales, and customer relationships in a phone store.',
    longDescription: 'Built with monolithic architecture for simplicity and rapid development. The system includes features such as inventory management, sales tracking, customer relationship management, and reporting. It is designed to be user-friendly and efficient, helping phone store owners streamline their operations and improve customer satisfaction.',
    tags: ['React', 'Tailwind', 'PHP', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/qbael/PhoneStore',
    status: 'completed',
    year: '2025',
    highlight: 'Have almost all features needed for a phone store, from inventory to sales and CRM',
  },
  {
    id: 3,
    title: 'School Bus Tracking System',
    description: 'A real-time bus tracking system for schools, providing live location updates and route information to parents and school administrators.',
    longDescription: 'Built with monolithic architecture for simplicity and rapid development. The system includes features such as real-time bus location tracking, route management, and notifications for parents and school administrators. It is designed to enhance the safety and convenience of school transportation, providing peace of mind to parents and improving communication between schools and families.',
    tags: ['Next.js', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'WebSocket'],
    githubUrl: 'https://github.com/qbael/School-Bus-Management-System',
    status: 'completed',
    year: '2025',
    highlight: 'Real-time bus tracking with WebSocket, improving safety and communication for school transportation',
  },
  {
    id: 4,
    title: 'Sport Store Management System',
    description: 'A comprehensive system for managing inventory, sales, and customer relationships in a sport store.',
    longDescription: 'Built with monolithic architecture for simplicity and rapid development. The system includes features such as inventory management, sales tracking, customer relationship management, and reporting. It is designed to be user-friendly and efficient, helping sport store owners streamline their operations and improve customer satisfaction.',
    tags: ['React', 'Tailwind', 'Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/qbael/SportStore',
    status: 'completed',
    year: '2024',
    highlight: 'Have almost all features needed for a sport store, from inventory to sales and CRM',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    key: 'frontend',
    color: '#00ff88',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    label: 'Backend',
    key: 'backend',
    color: '#00d4ff',
    skills: ['Node.js', 'Express', 'REST API', 'WebSocket', 'Prisma ORM', 'Spring Boot', 'JWT', 'Kafka', 'Microservices'],
  },
  {
    label: 'DevOps & Cloud',
    key: 'devops',
    color: '#a855f7',
    skills: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Linux'],
  },
  {
    label: 'Tools & Databases',
    key: 'tools',
    color: '#ff006e',
    skills: ['PostgreSQL', 'MySQL', 'Git', 'Postman', 'VS Code', 'IntelliJ IDEA'],
  },
];
