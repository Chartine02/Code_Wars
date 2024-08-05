function bingo(ticket, win) {
  let miniWins = 0;
  ticket.map((game) => {
    return game[0].split("").some((char) => char.charCodeAt(0) === game[1])
      ? (miniWins += 1)
      : "";
  });

  return miniWins >= win ? "Winner!" : "Loser!";
}
