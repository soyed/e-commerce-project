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
      - For Netlify, create a ```/_redirects``` file and add ```.index.html``` this redirects all request to ```index.html```
      - Webpack:
        - ```publicPath: /``` => set the base url for all resources 
        - historyAPIFallBack => redirects ```404s``` to ```/index.html```



### Photo Credits
- 