let apiKey = "CD0Yg6IcgOhfF99znxZQFeeocuH1igEw";

const getGifs = async (queryString) => {
  let url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(queryString)}&limit=10&api_key=${apiKey}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};

export default getGifs;
