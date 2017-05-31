/**
 * Created by chintan on 5/31/17.
 */

// config file to generate bundle.js
module.exports = {
  entry : './js/app.jsx', // starting point for webpack (it recursively goes to each file it finds in imports)
  output : {
    path : __dirname, // current directory
    filename : './js/bundle.js' // resultant file name with location (all js will reside in this file)
  },
  resolve : {
    extensions  : [ '' , '.js', '.jsx'] // target files with extension (this will all be put in final bundle)
  },
  module :{
    loaders :[{
        loader : 'babel-loader', // used for translating to es2015
        query : {
          presets : ['react', 'es2015'] // tells babel-loader to take our files & parse thru reactjs and then translate to es2015
        },
        test: /\.jsx?$/, // which file to target for conversion to es2015 (not same as resolve above)
        exclude : /(node_modules|bower_components|archives)/ // folders that we don't wanna parse
        // note : put "node_modules|" in exclude when you want to run on nodejs backend - if not, let webpack translate folder so that bundle.js can run on browser
    }]//end loaders
  }
};


/*
Flow :

1) This file will goto app.jsx
2) See all the imports (react, react-dom)
3) Get those and parse them untill all recursive files are done
4) Come back to app.jsx - parses code through react
5) Converts the code to ES2015
6) Generates a bundle.js inside js folder
7) When browser invokes index.html - this bundle.js will be served saving bandwidth and load time

 */
