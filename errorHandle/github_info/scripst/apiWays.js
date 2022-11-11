const link = `https://api.github.com/users/`;

const getData = async (username) => {
  const res = await fetch(`${link}${username}`);
  if (res.ok) {
    return await res.json();
  }
};

const getRepoData = async (url) => {
  const res = await fetch(url);
  if (res.ok) {
    return await res.json();
  }
};

export { getData, getRepoData };
