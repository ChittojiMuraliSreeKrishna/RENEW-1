# Simple Dental WebApp
## FrameWorks used

1. React,
2. BootStrap,
3. Firebase,
4. Emailjs
5. React-Router-Dom

### Fire Base Config:-
installing firebase
```javaScript
npm i -g firebase firebase-tools
```
Configuring firebase
```javaScript
firebase init
```
it will ask the required options, select them accordingly
then it will create all the necessary files like firebase/firebase.config.js, firebase/firebase.init.js



to deploy the app to firebase
!. make sure react app is built
```javascript
npm run build
```
later deploy the app using this command

```javascript
firebase deploy
```

### EmailJs :-
```javascript
npm i @emailjs/browser
```
add the following to index.html
```html
<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init("YOUR_PUBLIC_KEY");
   })();
</script>
```
!. if we want to send the emails first we have configure the email services
https://dashboard.emailjs.com/admin

<br />

2. then we have to set the email templates
https://dashboard.emailjs.com/admin/templates
#
after after setting up the email templates, we can try a demo to get the syntax
```javascript
emailjs.send("service_xgg695s","template_v97mxwj",{
from_name: "murali",
to_name: "kadali",
message: "hey there i am",
}, 'public_key');
```

