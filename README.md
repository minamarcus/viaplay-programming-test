## Viaplay Programming Test

built using `react` and `redux`

#### By Mina Marcus

## To Run Project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Design Notes

The app calls an api via `redux` and returns an array of objects (products). 
The products are then passed as an array to a component which displays their 
images. `display: grid` was so the parent container can be aligned in the center
while the children (images) are aligned to the left. The app is designed to be
responsive.
