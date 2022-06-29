function getAngleBetween(p1, p2) {
  const calcAngle = (y, x) => {
    return (Math.atan2(y, x) * 180) / Math.PI;
  };
  const p1ToP2X = p2.x - p1.x;
  const p1ToP2Y = p1.y - p2.y;
  return calcAngle(p1ToP2Y, p1ToP2X);
}

export { getAngleBetween };
