const link = `https://api.github.com/users/`;

const getData = async (username) => {
  return await fetch(`${link}${username}`).then((data) => data.json());
};

const getRepoData = async (url) => {
  return await fetch(url).then((data) => data.json());
};

export { getData, getRepoData };
