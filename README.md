<h1>Project Title: Event App</h1>

To run the Frontend, enter the client folder and run this command: <b>pnpm run dev</b> <br/>
To run the Backend, enter the server folder and run this command: <b>npm run dev</b><br/>
<h3>Packages:</h3>
<ul>
   Start a React-Typescript project with Vite<br/>
	→ npm create vite . || npm create vite@latest <br/>
	→ choose the library<br/>
	→ typescript<br/>
	→ npm install<br/>
	→ delete not necessary files<br/>
 
  Frontend packages<br/>
	→ Installing packages:   styled-components   
  pnpm i styled-components <br/> 
	pnpm install polished
  Eslint setup<br/>
	→ pnpm i -D eslint eslint-config-react-app <br/>

  Create an eslintrc.json file configuration <br/>

  Add the follwoing code: 
	{
  "extends": "react-app"
  }<br/>

  <br/>
	→ pnpm run dev <br/>
  Server configurations  <br/>
	→ npm init -y ---> create an initial setup with a package.json with all the default settings<br/>
	→ npm i express body-parser cors dotenv helmet morgan mongoose mongoose-currency <br/>
	→ express ---> which is going to be the framework that handles api calls   <br/>
	→ body-parser ---> handles information that are coming from the body of our request   <br/>
	→ cors ---> handles Cross Origin resource Sharing, so that we can call from a different URL    <br/>
	→ dotenv ---> handle environment variables   <br/>
	→ morgan ---> handles console logs, it will help us to display information in the terminal   <br/>
	→ mongoose ---> ORM used for MongoDB   <br/>
	→ mongoose-currency  ---> handles number and values that our monetary    <br/>
	→ helmet --> end point api security  <br/>
	→ npm i -D nodemon - it allow to run our server and refresh when we make changes   <br/>

  <li>'npm install --save-dev' ---> adds the package into <li>
  <li>the devDependencies</li>
</ul>

<h2>Full-Stack Developer ___ <span>Salvatore Dininni</span></h2>

<h4>Something about Me<h4>
<p>A Highly Motivated Individual, open to new challenges and quickly learns new technologies. Self-driven, dedicated, and hard-working. Passionate about Web Development and Web Technologies.</p>
<br/>
<p>
Attended remote HackJS course, based in Bari, Italy. Topics learned during the part-time course: Advanced Javascript, TDD, Type Coercion, React framework, React Native, Strapi. As a final project, i implemented Rehacktor, a Game Streaming application.
</p>
<br/>
<p>
Attended remote Hackademy course, based in Bari, Italy. The technology involved were HTML5, CSS3, Bootstrap5, PHP, JS, Laravel, Vue, React, and React Native. As a final project, I implemented Presto, an E-commerce announcement application.
</p>
<br/>
<p>
Completed Full-Stack Bootcamp with Propulsion Academy based in Zurich, Switzerland. Learned HTML5, CSS3, SCSS, JavaScript, React, Redux, Python, Django, PostgresSQL, REST Framework, Docker, GitLab, Git, NPM, Node, and Web Deployment. As a final project, I developed a Student Tracker, where professors of the course can keep track of student progress and grades. 
</p>
<br/>
<p>
Spoken languages: Italian, English, German.</p>
<br/>
<p>
I will share GitLab and Github accounts upon request.</p>
<br/>
<strong>More details...<strong>

<b>LinkedIn Profile: <a href="https://www.linkedin.com/in/salvatoredininni/" >https://www.linkedin.com/in/salvatoredininni/ </a></b>

<b>Portfolio Website: <a href="https://salvatore-dininni.com/" >https://salvatore-dininni.com</a></b> 

<h3>My other projects:</h3>

<strong>Domain on Firebase hosting</strong>
https://places-bdf14.web.app
<b>MERN Ecommerce App: <a href="http://ecommerce-mern.salvatore-dininni.com/" >http://ecommerce-mern.salvatore-dininni.com/</a></b> 

<b>Game Streaming App: <a href="https://rehacktor.salvatore-dininni.com/" >https://rehacktor.salvatore-dininni.com/</a></b> 

<b>Search Bar: <a href="http://github-search.salvatore-dininni.com">http://github-search.salvatore-dininni.com</a></b>

<b>Task App, React and Laravel Stack: <a href="https://task.salvatore-dininni.com">https://task.salvatore-dininni.com</a></b>

<b>Ricorsi App, React and Laravel Stack: <a href="https://ricorsi.salvatore-dininni.com">https://ricorsi.salvatore-dininni.com</a></b>

<b>Search Console, React and Laravel Stack: <a href="https://search-console.salvatore-dininni.com">https://search-console.salvatore-dininni.com</a></b>

Links: 
node: https://nodejs.org/en/download/ 
npx: https://www.npmjs.com/package/npx
vscode: https://code.visualstudio.com/download
nodemon: https://github.com/remy/nodemon
vite: https://vitejs.dev/guide/ 
react router: https://reactrouter.com/en/v6.3.0/get... 
react dropzone: https://github.com/react-dropzone/rea...
redux toolkit: https://redux-toolkit.js.org/introduc... 
redux toolkit query: https://redux-toolkit.js.org/rtk-quer... 
regression: https://github.com/tom-alexander/regr...
mui: https://mui.com/material-ui/getting-s...
mui data grid: https://mui.com/x/api/data-grid/data-...
recharts: https://recharts.org/en-US/
flexbox guide: https://css-tricks.com/snippets/css/a...
css grid cheatsheet: https://grid.malven.co/
data model diagram: https://lucid.app/lucidchart/23d63d3a...)
redux dev tools: https://chrome.google.com/webstore/de...
pesticide extension: https://chrome.google.com/webstore/de...
fly io node: https://fly.io/docs/languages-and-fra...
vercel: https://vercel.com/
docker: https://www.docker.com/products/docke...

Completed Code: 
github: https://github.com/ed-roh/finance-app
github theme: https://github.com/ed-roh/finance-app...
github data: https://github.com/ed-roh/finance-app...

<h2>Backend Setup</h2>

<h3>Installation</h3>
- npm init -y 
- pnpm install express typescript ts-node @types/node @types/express
- touch tsconfig.json
- copy this in the tsconfig.json

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}

- mkdir src 
- touch src/index.ts
- pnpm i body-parser mongoose cors morgan  nodemon dotenv
