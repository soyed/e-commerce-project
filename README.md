# new-react-project
Not sure what to call it yet... or what to do yet.😭


##### Problems Faced
- React Router failing 
  - Fix => https://ui.dev/react-router-cannot-get-url-refresh/
  - Two methods to fix 
  - Hash History - Hacky Fix
  - ```https://e-commerce.com/#/categories```
  - What does this do?
    - This send a request ```https://e-commerce.com/``` to the server side and loads the page while ```/categories``` react-router handles this route and display the appropriate content
  - The best solution would be:
    -  redirecting to ```/index.html``` for pages with access to the server
    - Serverless Fix
      - For Netlify, create a ```/_redirects``` file in your public folder and add ```/* /index.html 200``` this redirects all request to ```index.html```
        - Resources
          - https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
          - https://docs.netlify.com/routing/redirects/
      - Webpack:
        - ```publicPath: /``` => set the base url for all resources 
        - historyAPIFallBack => redirects ```404s``` to ```/index.html```
        - This fix would fix all /get <Content> not found error

- App Routing to match the Endpoints being consumed
  - The navigation on the webpage is not the same with the endpoint being sent to fetch from the server
    - Reasons
      - Endpoints are not names to match preferred route structure
      - Also, not the standard way to go as React-router-dom document states the webpage routes need to match the endpoint URL for the server.
  - Nested Routes in React
  - ```useRouteMatch``` is a react-router hook that is used for extract your route path or url.
    - ```path``` is used to build nested routes => ```/shop/categories/:categoryName/:productName```
    - ```url``` is used to build a nested link => ```/shop/categories/men-fashion/shoes```
    - Resource 
      - https://ui.dev/react-router-v5-nested-routes/

- React Redux
  - "cyclic import dependency" using CreateSelector from 'reselect'
    - CreateSelector is a custom hook built to memoize the content selected from reducers
      - A perfect explanation for this would be grabbing references from store
      - Areference select from store always renders the content of whatever component is using the selected properties
      - https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns
      - There is another way to that can handle memoizing with ```useSelector``` hook from ```react-redux```
        -  Another approach to memoize selected properties is using ```shallowEqual``` from ```react-redux``` which is used to check for changes in the selected properties using ```useSelector``` Hook 
- Redux-thunk and Middle Ware
- Enchancers
- MiddleWare / Async Operations in redux



- Webpack Optimization
- Dynamic imports - can be done using react.lazy load feature
- file splitting - can be problematic => not a recommend standard

- Redux Persist
- Important Concepts learnt
- 
- Redux-Persist stores the redux-store in web browser's local storage => your reducer's can be ke upon revisiting a webpage
  - persistStore => is a hook that store the state of your redux store
  - persistReducer =>  is a hook that store the state of reducers 
  - persistGate => is a hook that delays rendering of your react app while your redux-store states are being re-hydrated (i.e your persistedState is being retrieved and updated with your current redux-store)
  - Persisted State can be configured to match different use cases
    - You can Blacklist or Whitelist a reducer.
      -   A blacklisted reducer => does not get store in local storage
      -   A Whitelisted reducer => gets stored in local storage
  - My only concern is the redux-state being stored in your local storage 
    - Anyone can access information from these states
      - An ideal fix for this? to be researched 
  - 
  - Resource => https://github.com/rt2zz/redux-persist

- Hiding Sensitive information using dotenv
  - A custom built react app with webpack does not support ```process.env``` out of the box.
  - The package ```dotenv-webpack``` helps resolve this issue by simply adding the plugin for this package in webpack.config.js you can inject | export the content of .env into your project and ```process.env``` can now be recognized across all tsx?|jsx? files you have created.
  - Source => https://github.com/mrsteele/dotenv-webpack
  - ```.env``` not found in the specified path bug



### Photo Credits

- Photo by Philip Boakye from Pexels - https://www.pexels.com/photo/men-s-black-leather-jacket-1813947/
- Photo by Sound On from Pexels - https://www.pexels.com/photo/photo-of-woman-in-yellow-shirt-3760856/
- 
- main female page
- Photo by <a href="https://unsplash.com/@j_erhunse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeffery Erhunse</a> on <a href="https://unsplash.com/s/photos/black-girl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


- Bags with shoes => 
- Photo by <a href="https://unsplash.com/@malvestida?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Malvestida Magazine</a> on <a href="https://unsplash.com/s/photos/bags-and-shoes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
- Jewelery and Watches
- Photo by <a href="https://unsplash.com/@ruthson_zimmerman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ruthson Zimmerman</a> on <a href="https://unsplash.com/s/photos/jewelery-and-watch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

- category male


- category female



- 'BeautyHealthHair',
- Photo by Anna Tarazevich from Pexels => https://www.pexels.com/photo/woman-in-white-tank-top-holding-green-can-5308636/
- 'ToysKidsBabies', => https://www.pexels.com/photo/black-boy-with-toy-dinosaurs-on-light-background-7139728/ => Photo by Monstera from Pexels
- 
- 'ConsumerElectronics',
- 
-   'PhonesTelecommunications',
-   
-  'HomePetAppliance', => Photo by Sam Lion from Pexels => https://www.pexels.com/photo/calm-small-dogs-in-party-hats-5732429/
-  
- 'ComputerOfficeSecurity',
- 
-  'OutdoorFunSports',
-  
-  'HomeImprovementTools',
