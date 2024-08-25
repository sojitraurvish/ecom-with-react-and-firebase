pwa is like normal app in mobile
and you can use it in mobile and web


go to heaker new website and do inspect ele got to menuefsto in application

where you will find option add to home screen

to make are web app as progressive web app we will see the three aspects of it

1)https
2) app manifest
3) service worker

https://web.dev/articles/pwa-checklist

in above link all the things are there to make your app as progressive web application
but we are just going to follow best practices

so if our website is using https protocol then our user and and password 
will travel in internet with encription so bob can not get it

letsencrypt form this website you can get https certificate

cloudfare host our site or host it

2) app manifest

    in react app you get manifest.json file this file give ability to controll 
    your app that how it will appear in user screen such as mobile device home screen

    react fevicon genrater and it give you different size fevicon icon for your pwa app 
    and you can put them in public folder and referece in manifest.json file 

3) sevice worker
 is script that your browser run in background it is generally use full when 
 do not need web page or user interaction

 beside offline experiences it also helps us with background sinks and push notifications

 here we want to see only one feature offline experiences