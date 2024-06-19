function antiOptimizeAsync(task) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      task = () => {
        resolve();
      };
    }, 11000);
  });
}
