# stl-viewer

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight, zero-dependency STL file viewer built with Three.js. It runs directly in the browser and supports drag-and-drop file loading.

## Demo

**Live Demo:** [https://code4fukui.github.io/stl-viewer/](https://code4fukui.github.io/stl-viewer/)

## Features

-   **Drag-and-Drop:** Load any binary `.stl` file by dragging it onto the page.
-   **Automatic Normalization:** Models are automatically centered and scaled to fit the viewport.
-   **Interactive Controls:** Orbit, pan, and zoom the model using `OrbitControls`.
-   **Dynamic Lighting:** The scene is lit with ambient, directional, and point lights for clear visualization of the model's geometry.
-   **Standalone:** Pure ES module implementation that runs directly in the browser with no build step.

## Usage

1.  Clone this repository.
2.  Open `index.html` in a modern web browser that supports WebGL.
3.  The default `box.stl` model will be displayed on load.
4.  Drag and drop your own binary `.stl` file onto the window to view it.

## How It Works

The viewer follows a simple rendering pipeline:

1.  An `.stl` file is loaded (either the default sample or via drag-and-drop).
2.  The binary data is decoded into a polygon structure using [STL.js](https://github.com/code4fukui/STL/).
3.  The script `normalizePolygons.js` calculates the model's bounding box, then centers and scales its vertices.
4.  `makeGeometryPolygons.js` converts the normalized polygon data into a `THREE.BufferGeometry` object.
5.  A `THREE.Mesh` is created with the geometry and a `MeshPhongMaterial`, then added to the scene for rendering.

All dependencies are loaded via CDN as ES modules in `index.html`:
```html
<script type="module">
  import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
  import { OrbitControls } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js";
  import { STL } from "https://code4fukui.github.io/STL/STL.js";
  // ... local modules
</script>
```

## Samples

This repository includes several sample models in the `/samples` directory:
-   `box.stl`
-   `brain.stl`
-   `heart-full-fill.stl`

For more complex samples, see the [human_organs](https://github.com/code4fukui/human_organs) repository.

## Core Libraries

-   [Three.js](https://threejs.org/) - The core WebGL rendering library.
-   [STL.js](https://github.com/code4fukui/STL/) - A simple parser for binary STL files.

## License

MIT