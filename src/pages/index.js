import React from 'react';

const Homepage = () => {
  const books = [
    {
      id: "1",
      name: "Book 1",
      author: "Author 1",
      releasedYear: 2020,
      isActive: true,
    },
    {
      id: "2",
      name: "Book 2",
      author: "Author 1",
      releasedYear: 2020,
      isActive: true,
    },
    {
      id: "3",
      name: "Book 3",
      author: "Author 1",
      releasedYear: 2020,
      isActive: true,
    },
    {
      id: "4",
      name: "Book 4",
      author: "Author 1",
      releasedYear: 2020,
      isActive: true,
    },
    {
      id: "5",
      name: "Harry Potter",
      author: "Author 1",
      releasedYear: 2020,
      isActive: true,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Books List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Author</th>
            <th className="border border-gray-300 p-2">Released Year</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="border border-gray-300 p-2">{book.id}</td>
              <td className="border border-gray-300 p-2">{book.name}</td>
              <td className="border border-gray-300 p-2">{book.author}</td>
              <td className="border border-gray-300 p-2">{book.releasedYear}</td>
              <td className="border border-gray-300 p-2">
                {book.isActive ? (
                  <span className="text-green-600">Active</span>
                ) : (
                  <span className="text-red-600">Inactive</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;