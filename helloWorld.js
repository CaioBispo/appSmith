(function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define([], factory);
    } else if (typeof exports !== "undefined") {
      factory();
    } else {
      var mod = {
        exports: {}
      };
      factory();
      global.repl = mod.exports;
    }
  })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
    "use strict";
  
    const MyLibrary = {};
    MyLibrary.testMessage = () => {
      console.log("Hello World");
    };
    }
);