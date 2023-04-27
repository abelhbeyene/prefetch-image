## How to run

`yarn && yarn start` OR `npm i && npm run start`

## What I am trying to do
There is a hidden image that I only want to be visible when a user hovers over a box. 
The image is lazy loaded using the `lazy` attribute. I want the image to be pre fetched so when a user hovers over it there is no wait time.

Using only lazy doesn't work because the image is hidden using display none so the browser doesn't know when to start fetching it.
To resolve this I am using `<link rel="prefetch" />` so the image is prefetched without taking too much priority and idle time.

I don't want to use preload as its not that critical.

## The issue
Link prefetch fetches the image but the browser doesn't use it. I.E. there is another network request when the box is hovered and the status code is only 200 instead of saying 200 prefetch cache