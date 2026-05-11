# stl-viewer

Three.jsで構築された、軽量で外部依存のないSTLファイルビューアーです。ブラウザ上で直接動作し、ドラッグ＆ドロップによるファイルの読み込みをサポートしています。

## デモ

**ライブデモ:** [https://code4fukui.github.io/stl-viewer/](https://code4fukui.github.io/stl-viewer/)

## 機能

-   **ドラッグ＆ドロップ:** ページにドラッグ＆ドロップして、任意のバイナリ `.stl` ファイルを読み込めます。
-   **自動正規化:** モデルは自動的にセンタリングされ、ビューポートに合わせてスケーリングされます。
-   **インタラクティブな操作:** `OrbitControls` を使用して、モデルのオービット（回転）、パン（平行移動）、ズームが可能です。
-   **動的な照明:** 環境光（Ambient Light）、平行光源（Directional Light）、ポイント光源（Point Light）でシーンを照らし、モデルの形状を明確に可視化します。
-   **スタンドアロン:** ビルド不要でブラウザ上で直接動作する、純粋なESモジュール実装です。

## 使い方

1.  このリポジトリをクローンします。
2.  WebGLをサポートするモダンブラウザで `index.html` を開きます。
3.  読み込み時にデフォルトの `box.stl` モデルが表示されます。
4.  任意のバイナリ `.stl` ファイルをウィンドウにドラッグ＆ドロップすると、そのモデルが表示されます。

## 動作原理

このビューアーは、以下のシンプルなレンダリングパイプラインで動作します。

1.  `.stl` ファイルを読み込みます（デフォルトのサンプル、またはドラッグ＆ドロップ経由）。
2.  [STL.js](https://github.com/code4fukui/STL/) を使用して、バイナリデータをポリゴン構造にデコードします。
3.  `normalizePolygons.js` スクリプトがモデルのバウンディングボックスを計算し、頂点のセンタリングとスケーリングを行います。
4.  `makeGeometryPolygons.js` が、正規化されたポリゴンデータを `THREE.BufferGeometry` オブジェクトに変換します。
5.  このジオメトリと `MeshPhongMaterial` を使用して `THREE.Mesh` を作成し、シーンに追加してレンダリングします。

すべての依存関係は、`index.html` 内でCDN経由のESモジュールとして読み込まれます。
```html
<script type="module">
  import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
  import { OrbitControls } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js";
  import { STL } from "https://code4fukui.github.io/STL/STL.js";
  // ... local modules
</script>
```

## サンプル

本リポジトリの `/samples` ディレクトリには、いくつかのサンプルモデルが含まれています。
-   `box.stl`
-   `brain.stl`
-   `heart-full-fill.stl`

より複雑なサンプルについては、[human_organs](https://github.com/code4fukui/human_organs) リポジトリを参照してください。

## コアライブラリ

-   [Three.js](https://threejs.org/) - コアとなるWebGLレンダリングライブラリ。
-   [STL.js](https://github.com/code4fukui/STL/) - バイナリSTLファイル用のシンプルなパーサー。

## ライセンス

MIT
