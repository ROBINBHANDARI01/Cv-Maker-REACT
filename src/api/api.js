const BASE_URL = 'https://cv-maker-react.onrender.com';

const getToken = () => localStorage.getItem('token');

const headers = () =>({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
});

//-- Auth --

export const registerUser = async (name, email, password) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  return res.json();
};

export const loginUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

// ── Resume ──
export const saveResume = async (resumePayload) => {
  const res = await fetch(`${BASE_URL}/resume/save`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(resumePayload),
  });
  return res.json();
};

export const loadResume = async () => {
  const res = await fetch(`${BASE_URL}/resume`, {
    headers: headers(),
  });
  return res.json();
};