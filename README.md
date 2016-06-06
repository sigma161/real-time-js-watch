# real-time-js-watch
real time js watch for using in webpages
# Basic usage
1. Include the angular.js CDN on your document's `heade`.

  ```
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
  ```
2. Add following `angular.js` modules to document's body tag.

  ```
    <body ng-app="myApp" ng-controller="myCtrl"></body>
  ```
3. put `angular.js` `{{ expression }}` anywhere you want.

  ```
    <body ng-app="myApp" ng-controller="myCtrl">
    <P>
    {{hours}}:{{minutes}}:{{seconds}}
    </P>
    </body>
  ```
# Options
  - you can use separated or complete form of time. for separated form use '{{hours}}, {{minutes}}, {{seconds}}' and for complete form use `{{time}}` . 
  - you can add blink to any element of your document. 
      for adding blink put this 'angula.js' modules to any tag you want to blink.
  
        ```
        ng-class="{'class name': blinkswitch == true}"
        ```
      for completing process you should add a new class with a class attribute  color. for example :
      
      ```
      .blink {
        color: #fff; 
        }
        ```
      then put this class into   `ng-class="{'class name': blinkswitch == true}"`.
