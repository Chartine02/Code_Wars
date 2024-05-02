function flickSwitch(arr) {
  let flickFlag = true;
  return arr.map((item) =>
    item === "flick" ? (flickFlag = !flickFlag) : flickFlag
  );
}
