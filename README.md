**DAUGVis Steering UI**  
**Desription**: User Steering UI for DAUGVis  
**Contributers**: NW Lee

How to use
=============
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`

Before running the app, you have to install all packages and libraries.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


Structure
=============
preview
-------------
    
We use react-redux for organizing all status for this system. This structure allows the app to manage whole state in one place. All the data and functions used in the app can be found in the following path:

*"src/store/modules/data.js"*

data
-------------
    
We use 3 states, sampleData, contentData, and styleData. Each is as follows:
1. **sampleData** : It means whole data that is spread out. We can find it in the following path: *"src/components/ImageGrid/ImageGrid.js"*
2. **contentData** : This is part of sampleData that the user steered to contentData. When this state is updated, it reflects to the SideDrawer component. We can find this component in the following path: *"src/components/SideDrawer/SideDrawer.js"*
3. **styleData** : This is part of sampleData that the user steered to styleData. When this state is updated, it reflects to the SideDrawer component. We can find this component in the following path: *"src/components/SideDrawer/SideDrawer.js"*

function
-------------
    
We use **putContent**, **delContent** for organizing contentData state, and **putStyle**, **delStyle** for organizing styleData state. These are used for putting or deleting the selected data from sampleData into contentData, styleData. For using functions, functions are passed through the **container** to each component. We can find containers in the following path:

*'src/containers/'*

(reset function)
