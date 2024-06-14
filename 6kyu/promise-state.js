async function getState(promise) {
  const pendingPromise = new Promise((resolve) =>
    setTimeout(() => resolve("pending"), 0)
  );
  return Promise.race([
    promise.then(
      () => "fulfilled",
      () => "rejected"
    ),
    pendingPromise,
  ]);
}
