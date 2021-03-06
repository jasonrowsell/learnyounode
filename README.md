# learnyounode

📚 A library of Node exercises completed using the LearnYouNode workshop

## About

learnyounode is a Node.js package that contains a series of workshop lessons which will teach you the basics of writing Node.js applications. The lessons start with a basic "HELLO WORLD" lesson, and then move on to more advanced exercises about dealing with synchronous & asynchronous I/O, filesystem operations, TCP and HTTP networking, events and streams.

### Installing learnyounode

1. Install `Node.js`
2. Run `npm install -g learnyounode` (this installs the learnyounode Node.js package globally). If this step fails, try one of the following fixes:
   Prefix the install command with sudo: `sudo npm install -g learnyounode`
   or
   fix your npm permissions.
3. Test that learnyounode has been installed successfully by running the command learnyounode in your terminal. This will start the learnyounode application, and you should see a blue screen similar to the one in the screenshot above.
   (Ubuntu users) In case step 3 fails, run `sudo apt-get install nodejs-legacy`
4. _profit!_

### Completing your first exercise

1. Start up learnyounode in your terminal by running the command `learnyounode` (you should see a blue screen similar to the one in the screenshot above).
2. Start a learnyounode exercise by using the arrow keys to navigate, and the enter key to select a lesson. For this example, scroll to the "HELLO WORLD" lesson and press enter. This will result in three things happening:
3. The instructions for the "HELLO WORLD" lesson will now be printed out to your terminal (note: You may need to scroll up in your terminal to see the beginning of the lesson instructions if it has been cut off by your terminal window).
4. The `learnyounode verify` command will now be set to verify any script that you pass into it with the expected output of the lesson that you selected (in the case of the "HELLO WORLD" lesson, the command `learnyounode verify` will now check that the script file you pass in satisfies the expected outcomes of the "HELLO WORLD" lesson by making sure the script prints the text "HELLO WORLD" to stdout).
5. The learnyounode application will exit, allowing you to use your terminal again.
6. _Create your solution for the exercise_ by creating a new script file named "program.js" and following the instructions and hints that were printed out above for the lesson. For the "HELLO WORLD" lesson, your script "program.js" should have code in it that prints the text "HELLO WORLD" to stdout when run with Node.js (you can test your script file with Node.js by using the command: `node program.js`).
7. _Verify that your solution to the lesson is correct_ by running the command learnyounode verify program.js (note: if you named your script file something other than "program.js", replace "program.js" with the correct filename). If your solution is not correct, you will see a FAIL message along with some information about why your solution didn't pass the tests. In the case of a FAIL message, rework your solution until running the verify command passes. If your solution passes the tests, you should see a "PASS" message. Congratulations! :)
8. _Move on to the next lesson if you have verified that your solution is correct._ Repeat these instructions from step 1 and select the next lesson that you would like to do (it is suggested to do the lessons in order from top to bottom).

## Checklist

- [x] [01-hello-world](01-hello-world)
- [x] [02-baby-steps](02-baby-steps)
- [x] [03-my-first-io](03-my-first-io)
- [x] [04-my-first-async-io](04-my-first-async-io)
- [x] [05-filtered-ls](05-filtered-ls)
- [x] [06-make-it-modular](06-make-it-modular)
- [x] [07-http-client](07-http-client)
- [x] [08-http-collect](08-http-collect)
- [x] [09-juggling-async](09-juggling-async)
- [x] [10-time-server](10-time-server)
- [x] [11-http-file-server](11-http-file-server)
- [x] [12-http-uppercaserer](12-http-uppercaserer)
- [ ] [13-http-json-api-server](13-http-json-api-server)
