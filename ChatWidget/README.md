HOW TO RUN LOCALLY:

1. Copy this code onto your own local machine (pls make your own branches if you've got any changes you'd like to suggest, don't commit to main just yet)

2. Make sure you have node js installed on your local machine - if you don't, follow this guide based on your OS https://www.theodinproject.com/lessons/foundations-installing-node-js

3. Run `npm install` in the ChatWidget (Root) directory

4. Run `npm run dev` from the same directory


5. OPTIONAL: If you have a website that you want to embed your code on, go into your index.html file (and/or whichever pages you want to install the chat-widget on) and copy paste the following code right before the closing </body> tag of the page:

```
    
    <!-- The below URL is subject to change based on where the most up to date code is being hosted -->

    <div id="chat-widget-container"></div>
    <script src="https://melodic-horse-fb42e0.netlify.app/chat-widget.umd.js"></script>
    <script>
      ChatWidget('chat-widget-container', 'Improvize'); //ChatWidget(containerID, brand) ---> the brand is sent in the POST request, will default to Improvize if nothing is provided.
    </script>

```

NOTES: Ignore the dist folder, this contains the build/bundle files for the JS. Component files are located in the src directory
    