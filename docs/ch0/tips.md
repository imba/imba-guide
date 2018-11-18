# Tips and tricks for beginners

If you are new to compile-to-JavaScript languages, here's a few tips that can
help you get up to speed.

## Know JavaScript

Do try to learn JavaScript as well as Imba. Even after learning Imba, you will
still need to be at least aware of the various Web APIs that browsers offer. 
Even though Imba is a separate language, it runs in the browser after it's 
compiled to JavaScript, so you can and should take advantage of all the APIs 
browsers offer.

Here is a short list of resources that can get you started:

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API)
- [NPM](https://docs.npmjs.com/)
- [Webpack](https://webpack.js.org/concepts/)

## Use the developer tools in your browser

Learn how to use developer tools in your browser. Especially the console. An 
easy start would be to add `console.log` calls in your code to inspect variable
names.

- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox developer tools](https://developer.mozilla.org/en-US/docs/Tools)
- [Safari web inspector](https://apple.co/2A0JW9j)
- [Edge devtools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide)

## Read the code Imba generates

If you already know JavaScript, it's very helpful to inspect the code emitted 
by the Imba compiler. Especially in the beginning and when you run into issues.
This is sometimes way faster than debugging.

![Playground code and compiled output side by side in VS 
Code](../img/playground-vscode.png)
