async function getState(promise) {
  const state = await promise.status;
  if (state === "pending") {
    console.log("Promise is pending");
  } else if (state === "fulfilled") {
    console.log("Promise is fulfilled");
  } else if (state === "rejected") {
    console.log("Promise is rejected");
  }
}

getState(promise);
