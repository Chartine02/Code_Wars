function lucyCheck(ticket) {
  if (!ticket || /\D/.test(ticket)) throw Error;

  let arr1 = ticket.slice(0, ticket.length / 2);
  let arr2 = ticket.slice(
    ticket.length % 2 === 0 ? ticket.length / 2 : ticket.length / 2 + 1
  );

  const sum1 = arr1.split("").reduce((acc, val) => acc + Number(val), 0);
  const sum2 = arr2.split("").reduce((acc, val) => acc + Number(val), 0);

  return sum1 === sum2;
}

console.log(lucyCheck("a"));
