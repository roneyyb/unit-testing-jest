//wallaby.js
module.exports = function () {
    return {
        testFramework: 'jest', // 1
        env: {
            type: 'node', // 2
        },
        tests: ['tests/**/*.test.js'], // 3
        files: ['**/*.js', '!node_modules/**/*', '!**/*.test.js', '!**/.*'], // 4
    };
};

// testFramework: 'jest' is pretty self-explanatory. It tells Wallaby to use Jest to run our tests instead of another framework like Jasmine or Mocha.

// env.type: 'node' tells Wallaby to run our tests in Node, as opposed to a browser environment.

// tests: ['tests/**/*.test.js'] tells Wallaby where to find the test files in this project.

// files: ['**/*.js', '!node_modules/**/*', '!**/*.test.js', '!**/.*'] tells Wallaby where to find the project’s source files. The patterns preceded by ! are excluded, preventing Wallaby from trying to treat JS files in node_modules, ending in .test.js, or starting with . (like .eslintrc.js) as source files.
