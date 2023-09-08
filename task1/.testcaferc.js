let os = require("os"); // Import any Node.js module you want.

module.exports = { // Settings go inside the module.exports statement.
    skipJsErrors: true, // Ignores JavaScript errors
    hostname: os.hostname(), // Node.js dynamically calculates the value of this parameter.
    baseUrl: "https://dev.deepthought.education/login", // URL
    browsers: ["chrome", "edge"],

    "screenshots": {
        "takeOnFails": true,
        "pathPattern": "${TEST}_${BROWSER}_Failed.png"
    },

    
};