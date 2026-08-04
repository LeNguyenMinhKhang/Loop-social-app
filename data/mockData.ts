export const mockUsers = [
  { id: '1', name: 'Alice Smith', username: 'alice_smith', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: '2', name: 'Bob Jones', username: 'bobjones', avatar: 'https://i.pravatar.cc/150?u=2' },
]

export const mockPosts = [
  {
    id: '1',
    content: 'Hello World! Just joined Loop.',
    author: mockUsers[0],
    createdAt: '2023-10-27T10:00:00Z',
    likes: 5,
    comments: 2
  },
  {
    id: '2',
    content: 'Learning Next.js is so much fun!',
    author: mockUsers[1],
    createdAt: '2023-10-28T12:30:00Z',
    likes: 12,
    comments: 4
  }
]
