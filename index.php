<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Interactive DOM Page</title>
        <style>
            .container { padding: 20px; margin: 20px; border: 1px solid #ccc;}
            .box { width: 100px; height: 100px; background-color: lightblue; margin: 10px; }
            .dark-mode { background-color: #333; color: white; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>DOM Manipulation Demo</h1>
            <button id="toggleBtn">Toggle Dark Mode</button>
            <button id="counterBtn">Click Count: <span id="count">0</span></button>
            <div id="hoverBox" class="box">Hover Over Me</div>
            <button id="resetBtn" class="reset">reset</button>
        </div>

        <script src="script.js"></script>

    </body>
</html>