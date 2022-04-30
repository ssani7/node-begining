/* 
1. create a folder or make a directory(mkdir)
2. open that directory in cmd
3. npm init
4. create index.js file

for express 

npm install express

1. inside index.js require express
2. create app variable
3. declare port
4. set app.get('/' , a function with parameter(req,res) and send data to using res.send)
5. set app.listen
6. execute node index.js in cmd
7. check brower using localhost:5000(PORT)

for nodemon

1. npm npm install -g nodemon
2. add start: node index.js and start-dev: nodemon index.js inside in script package.json 
3. from now start cmd using nodemon index.js
*/