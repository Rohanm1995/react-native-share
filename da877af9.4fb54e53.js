(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{150:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(2),i=t(9),r=(t(0),t(154)),l={id:"install",title:"Installing"},o={id:"install",title:"Installing",description:"If you are using react-native >= 0.60 you just need to do a simple:",source:"@site/docs/installing.mdx",permalink:"/react-native-share/docs/install",editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/installing.mdx",sidebar:"someSidebar",next:{title:"Share.open",permalink:"/react-native-share/docs/share-open"}},p=[{value:"Manual Linking",id:"manual-linking",children:[]},{value:"Manual Install",id:"manual-install",children:[{value:"iOS Install",id:"ios-install",children:[]},{value:"Android Install",id:"android-install",children:[]},{value:"Windows Install",id:"windows-install",children:[]},{value:"Adding your implementation of FileProvider",id:"adding-your-implementation-of-fileprovider",children:[]}]},{value:"Older versions",id:"older-versions",children:[]},{value:"react-native 0.59.10",id:"react-native-05910",children:[]}],c={rightToc:p};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you are using ",Object(r.b)("inlineCode",{parentName:"p"},"react-native >= 0.60")," you just need to do a simple:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"yarn add react-native-share\n")),Object(r.b)("p",null,"Or if are using npm:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm i react-native-share --save\n")),Object(r.b)("p",null,"After that, we need to install the dependencies to use the project on iOS(you can skip this part, if you are using this on Android)."),Object(r.b)("p",null,"Now run a simple: ",Object(r.b)("inlineCode",{parentName:"p"},"npx pod-install")," or ",Object(r.b)("inlineCode",{parentName:"p"},"cd ios && pod install"),". After that, you should be able to use the library on both Platforms, iOS and Android. "),Object(r.b)("p",null,"Also, to use this library on iOS you will need:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"XCode 11 or higher"),Object(r.b)("li",{parentName:"ul"},"iOS 13 SDK or higher")),Object(r.b)("p",null,"After that, you will see that the library is now available at your ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(r.b)("h2",{id:"manual-linking"},"Manual Linking"),Object(r.b)("p",null,"If the auto-linking doesn't work for any reason, you can still run a:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"react-native link react-native-share\n")),Object(r.b)("h2",{id:"manual-install"},"Manual Install"),Object(r.b)("h3",{id:"ios-install"},"iOS Install"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"yarn add react-native-share")),Object(r.b)("li",{parentName:"ol"},"In XCode, in the project navigator, right click ",Object(r.b)("inlineCode",{parentName:"li"},"Libraries")," \u279c ",Object(r.b)("inlineCode",{parentName:"li"},"Add Files to [your project's name]")),Object(r.b)("li",{parentName:"ol"},"Go to ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules")," \u279c ",Object(r.b)("inlineCode",{parentName:"li"},"react-native-share")," \u279c ",Object(r.b)("inlineCode",{parentName:"li"},"ios")," and add ",Object(r.b)("inlineCode",{parentName:"li"},"RNShare.xcodeproj")),Object(r.b)("li",{parentName:"ol"},"In XCode, in the project navigator, select your project. Add ",Object(r.b)("inlineCode",{parentName:"li"},"libRNShare.a")," to your project's ",Object(r.b)("inlineCode",{parentName:"li"},"Build Phases")," \u279c ",Object(r.b)("inlineCode",{parentName:"li"},"Link Binary With Libraries")),Object(r.b)("li",{parentName:"ol"},"In XCode, in the project navigator, select your project. Add ",Object(r.b)("inlineCode",{parentName:"li"},"Social.framework")," and ",Object(r.b)("inlineCode",{parentName:"li"},"MessageUI.framework")," to your project's ",Object(r.b)("inlineCode",{parentName:"li"},"General")," \u279c ",Object(r.b)("inlineCode",{parentName:"li"},"Linked Frameworks and Libraries")),Object(r.b)("li",{parentName:"ol"},"Run your project (",Object(r.b)("inlineCode",{parentName:"li"},"Cmd+R"),")")),Object(r.b)("h3",{id:"android-install"},"Android Install"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"yarn add react-native-share"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open up ",Object(r.b)("inlineCode",{parentName:"p"},"android/app/src/main/java/[...]/MainApplication.java")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"import cl.json.RNSharePackage;")," and ",Object(r.b)("inlineCode",{parentName:"li"},"import cl.json.ShareApplication;")," to the imports at the top of the file"),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"new RNSharePackage()")," to the list returned by the ",Object(r.b)("inlineCode",{parentName:"li"},"getPackages()")," method"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Append the following lines to ",Object(r.b)("inlineCode",{parentName:"p"},"android/settings.gradle"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"include ':react-native-share'\nproject(':react-native-share').projectDir = new File(rootProject.projectDir,    '../node_modules/react-native-share/android')\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Insert the following lines inside the dependencies block in\n",Object(r.b)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"  implementation project(':react-native-share')\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"(Optional)")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#adding-your-implementation-of-fileprovider"}),"Follow this for implementing Provider")))),Object(r.b)("h3",{id:"windows-install"},"Windows Install"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ReactWindows/react-native"}),"Read it! :D")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"yarn add react-native-share")),Object(r.b)("li",{parentName:"ol"},"In Visual Studio add the ",Object(r.b)("inlineCode",{parentName:"li"},"RNShare.sln")," in ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules/react-native-share/windows/RNShare.sln")," folder to their solution, reference from their app."),Object(r.b)("li",{parentName:"ol"},"Open up your ",Object(r.b)("inlineCode",{parentName:"li"},"MainPage.cs")," app")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"using Cl.Json.RNShare;")," to the usings at the top of the file"),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"new RNSharePackage()")," to the ",Object(r.b)("inlineCode",{parentName:"li"},"List<IReactPackage>")," returned by the ",Object(r.b)("inlineCode",{parentName:"li"},"Packages")," method")),Object(r.b)("h3",{id:"adding-your-implementation-of-fileprovider"},"Adding your implementation of FileProvider"),Object(r.b)("p",null,"Follow this to implement your ",Object(r.b)("inlineCode",{parentName:"p"},"FileProvider"),". If you have any doubt please you found more about that ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/training/secure-file-sharing/setup-sharing.html"}),"here")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"applicationId")," should be defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"defaultConfig")," section in your ",Object(r.b)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"File: ",Object(r.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'defaultConfig {\n    applicationId "com.yourcompany.yourappname"\n    ...\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add this ",Object(r.b)("inlineCode",{parentName:"p"},"<provider>")," section to your ",Object(r.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")),Object(r.b)("p",{parentName:"li"},"  File: ",Object(r.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<application>\n    <provider\n        android:name="androidx.core.content.FileProvider"\n        android:authorities="${applicationId}.provider"\n        android:grantUriPermissions="true"\n        android:exported="false">\n        <meta-data\n            android:name="android.support.FILE_PROVIDER_PATHS"\n            android:resource="@xml/filepaths" />\n    </provider>\n</application>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"filepaths.xml")," under this directory:\n",Object(r.b)("inlineCode",{parentName:"p"},"android/app/src/main/res/xml"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'In this file, add the following contents:\n\nFile: `android/app/src/main/res/xml/filepaths.xml`\n```xml\n<?xml version="1.0" encoding="utf-8"?>\n<paths xmlns:android="http://schemas.android.com/apk/res/android">\n  <external-path name="myexternalimages" path="Download/" />\n</paths>\n```\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Edit your ",Object(r.b)("inlineCode",{parentName:"p"},"MainApplication.java")," class to add ",Object(r.b)("inlineCode",{parentName:"p"},"implements ShareApplication")," and ",Object(r.b)("inlineCode",{parentName:"p"},"getFileProviderAuthority"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"getFileProviderAuthority")," function returns the ",Object(r.b)("inlineCode",{parentName:"p"},"android:authorities")," value added in the ",Object(r.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"applicationId")," is defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"defaultConfig")," section of your ",Object(r.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," and referenced using ",Object(r.b)("inlineCode",{parentName:"p"},"BuildConfig.APPLICATION_ID")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'import cl.json.ShareApplication\npublic class MainApplication extends Application implements ShareApplication, ReactApplication {\n\n     @Override\n     public String getFileProviderAuthority() {\n            return BuildConfig.APPLICATION_ID + ".provider";\n     }\n\n     // ...Your own code\n\n}\n')))),Object(r.b)("h2",{id:"older-versions"},"Older versions"),Object(r.b)("p",null,"If you need to use a older version of ",Object(r.b)("inlineCode",{parentName:"p"},"react-native < 0.60"),", then you will need to run a:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"yarn add react-native-share@version\n")),Object(r.b)("p",null,"Or with npm:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm i react-native-share@version --save\n")),Object(r.b)("p",null,"You can look at all versions, that we published ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-share/releases"}),"here"),"."),Object(r.b)("h2",{id:"react-native-05910"},"react-native 0.59.10"),Object(r.b)("p",null,"If you can't update your project to the most recent version of both react-native and react-native-share, please use ",Object(r.b)("inlineCode",{parentName:"p"},"1.2.1"),". Alternatively you can use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikehardy/jetifier#to-reverse-jetify--convert-node_modules-dependencies-to-support-libraries"}),"jetifier")," running a ",Object(r.b)("inlineCode",{parentName:"p"},"npx jetify -r"),"."))}b.isMDXComponent=!0},154:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=b(t),m=a,u=d["".concat(l,".").concat(m)]||d[m]||s[m]||r;return t?i.a.createElement(u,o(o({ref:n},c),{},{components:t})):i.a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);