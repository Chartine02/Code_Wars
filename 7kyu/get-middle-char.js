function getMiddle(s) {
  let arr = s.split("");
  let length = arr.length;
  let middleChar = Math.floor(length / 2);
  return length % 2 === 0
    ? `${arr[middleChar - 1]}${arr[middleChar]}`
    : `${arr[middleChar]}`;
}
