# HTML Load Image Package

## Overview

This package is to get the image files as dataURLs from `Event` or `DragEvent`. It's using blueimp-load-image package as a dependency.

## Install

```sh
yarn add html-image-load
```

## Definitions

```ts
getImage: (event: Event, options?: LoadImageOptions) => Promise<string>

getImages: (event: Event, options?: LoadImagesOptions) => Promise<string[]>

type LoadImageOptions = Exclude<BlueImpLoadImageOptions, 'orientation' | 'meta' | 'canvas'>

type LoadImagesOptions = BlueImpLoadImageOptions & { maxLoadImageCount: number }
```

## Usage

```ts
const image = getImage(event)
const images = getImages(event, { maxLoadImageCount: 5 })
```
