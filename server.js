const express = require("express")
const Server = require('socket.io');
const http = require("http")

const app = express();
const port = 3000;

// Create an HTTP server
const server = http.createServer(app);

// Initialize the Socket.IO server
const io = Server(server); // Use the 'Server' class

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for custom events (optional)
  socket.on("customEvent", (data) => {
    console.log("Received custom event with data:", data);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Define routes
app.get("/", (req, res) => {
  res.send("Hello Rishi kdk!");
});

app.get("/sajak", (req, res) => {
  res.send("sajak ho hai ma chai aba");
});

// Start the HTTP server
server.listen(port, () => {
  console.log(`Rishi is listing on port ${port}`);
});
