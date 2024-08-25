export const normalizePolygons = (polygons) => {
  const MAX = Number.MAX_SAFE_INTEGER;
  const MIN = Number.MIN_SAFE_INTEGER;
  let minx = MAX;
  let maxx = MIN;
  let miny = MAX;
  let maxy = MIN;
  let minz = MAX;
  let maxz = MIN;
  for (const p of polygons) {
    for (const point of p.points) {
      if (point.x < minx) minx = point.x;
      if (point.x > maxx) maxx = point.x;
      if (point.y < miny) miny = point.y;
      if (point.y > maxy) maxy = point.y;
      if (point.z < minz) minz = point.z;
      if (point.z > maxz) maxz = point.z;
    }
  }
  const lenx = maxx - minx;
  const leny = maxy - miny;
  const lenz = maxz - minz;
  const len = Math.max(lenx, leny, lenz);
  const cx = (maxx + minx) / 2;
  const cy = (maxy + miny) / 2;
  const cz = (maxz + minz) / 2;
  for (const p of polygons) {
    for (const point of p.points) {
      point.x = (point.x - cx) / len;
      point.y = (point.y - cy) / len;
      point.z = (point.z - cz) / len;
    }
  }
};
