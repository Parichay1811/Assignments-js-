// User Data for dynamic addition of users in user list...........................
const usersData = [
  {
    avatar:
      "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Arjun Mehra",
    time: "3 min ago",
    status: "Software Engineer",
  },
  {
    avatar:
      "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rahul Dey",
    time: "10 min ago",
    status: "Content Creator",
  },
  {
    avatar:
      "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Dr. Usha Iyer",
    time: "3 hours ago",
    status: "Cardiologist",
  },
  {
    avatar:
      "https://randomuser.me/api/portraits/men/68.jpg",
    name: "Prof. Ranjan Basu",
    time: "4 hours ago",
    status: "Writer",
  },
  {
    avatar:
      "https://randomuser.me/api/portraits/men/60.jpg",
    name: "Manish Patel",
    time: "8 hours ago",
    status: "Civil Engineer",
  },
  {
    avatar:
      "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Rohit Sharma",
    time: "22 hours ago",
    status: "Marketing Manager",
  },
  {
    avatar:
      "https://randomuser.me/api/portraits/men/27.jpg",
    name: "Siddharth Nair",
    time: "1 day ago",
    status: "UX Designer",
  },
  {
    avatar:
      "https://randomuser.me/api/portraits/women/40.jpg",
    name: "Neha Verma",
    time: "Dec 10",
    status: "Data Analyst",
  },
  {
    avatar:
      "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Karan Malhotra",
    time: "Dec 8",
    status: "Financial Advisor",
  },
  {
    avatar:
      "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Ananya Gupta",
    time: "Dec 6",
    status: "Teacher",
  },
  {
    avatar:
      "https://randomuser.me/api/portraits/men/20.jpg",
    name: "Vikram Singh",
    time: "Dec 4",
    status: "Business Consultant",
  },
  {
    avatar:
      "https://randomuser.me/api/portraits/men/37.jpg",
    name: "Aman Khurana",
    time: "Dec 2",
    status: "Project Manager",
  },
];

// JSON Data ...........................................
const JsonData = {
  chat1: [
    {
      from: { type: "user1" },
      msg: { message: "Hi, how can I help you?" },
    },
    {
      from: { type: "user2" },
      msg: {
        message:
          "Hi, I've been experiencing issues with my broadband connection. The speed seems much slower than promised. Could you assist me with this?",
      },
    },
    {
      from: { type: "user1" },
      msg: {
        message:
          "Sure! I'd be happy to help. Could you please confirm your email address?",
      },
    },
    {
      from: { type: "user2" },
      msg: { message: "arjun.mehra@example.com" },
    },
  ],
  chat2: [
    {
      from: { type: "user1" },
      msg: { message: "Hi, how can I help you?" },
    },
    {
      from: { type: "user2" },
      msg: {
        message:
          "Hello, my laptop has been freezing frequently while working. Could you help me resolve this issue?",
      },
    },
    {
      from: { type: "user1" },
      msg: {
        message:
          "Absolutely! Could you please share your registered email address for verification?",
      },
    },
    {
      from: { type: "user2" },
      msg: { message: "neha.verma@example.com" },
    },
  ],
};
