async function sayJoke(apiUrl, jokeId) {
  const link = await fetch(apiUrl);
  const data = await link.json();
  const joke = data.joke.find((j) => j.jokeId === joke);

  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
}

sayJoke("http://great.jokes/christmas", 101)
  .then((jokeApi) => {
    console.log("Setup:", jokeApi.saySetup());
    console.log("Punchline:", jokeApi.sayPunchLine());
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });
