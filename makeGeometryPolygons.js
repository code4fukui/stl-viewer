import * as THREE from "https://cdn.skypack.dev/three@0.136.0";

export const makeGeometryPolygons = (polygons) => {
  const geometry = new THREE.BufferGeometry();

  const points = [];
  const ns = [];
  for (const p of polygons) {
    for (const point of p.points) {
      points.push(point.x);
      points.push(point.y);
      points.push(point.z);
    }
    for (let i = 0; i < p.points.length; i++) {
      ns.push(p.normal.x);
      ns.push(p.normal.y);
      ns.push(p.normal.z);
    }
  }
  // 頂点座標
  const vertices = new Float32Array(points);
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

  // 法線
  const normals = new Float32Array(ns);
  geometry.setAttribute("normal", new THREE.BufferAttribute(normals, 3));

  // 頂点リンク順
  const index = new Uint32Array(polygons.length * 3);
  for (let i = 0; i < index.length; i++) {
    index[i] = i;
  }
  geometry.setIndex(new THREE.BufferAttribute(index, 1));
  return geometry;
};
