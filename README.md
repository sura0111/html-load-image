# HTML Load Image Package

## Overview

This package is to get the image files as dataURLs from `Event` or `DragEvent`. It's using blueimp-load-image package as a dependency.

## Install

```sh
yarn add html-load-image
```

## Definitions

```ts
type getImage = (event: Event, options?: LoadImageOptions) => Promise<string>

type getImages = (event: Event, options?: LoadImagesOptions) => Promise<string[]>

type LoadImageOptions = Exclude<BlueImpLoadImageOptions, 'orientation' | 'meta' | 'canvas'>

type LoadImagesOptions = LoadImageOptions & { maxLoadImageCount: number }
```

## Usage

```ts
const image = await getImage(event)
const images = await getImages(event, { maxLoadImageCount: 5 })
```
