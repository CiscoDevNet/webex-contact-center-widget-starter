# Learning Sample Widget 
The learning sample widget demonstrates how to subscribe to various agent and contact event and utilize them in your custom code.

Steps to deploy
* git clone https://github.com/sameyada/LearningWidgetSample.git
* npm i
* npm run build
* cd dist
* Here you will find your production build main.js file which you can host at any remote location which is accessible by the WxCC desktop

#### Add this section to the desktop layout json in nav-bar section

 ```
 "comp1": 
 {
               "comp": "learning-sample",
              "script": "https://widget-kad.s3.amazonaws.com/TestCode/bundle.js"
            }
 ```           
       
![Sample Image](https://github.com/sameyada/LearningWidgetSample/blob/main/images/img1.png)
