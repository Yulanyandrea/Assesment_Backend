import { describe } from "node:test";

describe('login API', () => {
  test('should return a successful response', async () => {
    const response = await fetch(' http://localhost:3000/auth/local/login', {
      method: 'POST',
      body: JSON.stringify({
        "email": "andra_852@hotmail.com",
        "password": "xxxxxx"
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toHaveProperty('token');
  });
});

describe('get user API', () => {
  test('should return a successful response', async () => {
    const response = await fetch('http://localhost:3000/api/users')
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data.length).toBeGreaterThan(0);
  });
  });

describe('get all favourite list', () => {
  test('should return a list of favourite',async () => {
    const token = 'xxxxx'
    const response = await fetch('http://localhost:3000/api/favList',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThan(0);

  })
})
