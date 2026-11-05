 import React from 'react';
import UserCard from './components/UserCard';

const App = () => {
  // 5 user datasets, each containing 5 details
  const users = [
    {
      id: 1,
      name: "Yanamala Sudha",
      city: "Nellore",
      age: 21,
      email: "sudha@example.com",
      phone: "+91 9876543210"
    },
    {
      id: 2,
      name: "Alex Morgan",
      city: "Bangalore",
      age: 24,
      email: "alex.m@example.com",
      phone: "+91 9876543211"
    },
    {
      id: 3,
      name: "Priya Sharma",
      city: "Hyderabad",
      age: 23,
      email: "priya.s@example.com",
      phone: "+91 9876543212"
    },
    {
      id: 4,
      name: "David Miller",
      city: "Chennai",
      age: 26,
      email: "david.m@example.com",
      phone: "+91 9876543213"
    },
    {
      id: 5,
      name: "Ananya Roy",
      city: "Mumbai",
      age: 22,
      email: "ananya.r@example.com",
      phone: "+91 9876543214"
    }
  ];

  return (
    <div className="app-container">
      <h1>User Profiles</h1>
      <div className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            city={user.city}
            age={user.age}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
