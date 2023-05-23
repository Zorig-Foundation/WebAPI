const mongoose = require("mongoose");

const ATLAS_URI =
"mongodb+srv://WebBack:tdvq5LZNV8VdsVsD@cluster0.homa41h.mongodb.net/Test?retryWrites=true&w=majority";
const LOCAL_URI = "mongodb://localhost/taskManagement";

let uri;

// if (process.env.NODE_ENV === 'production') {
uri = ATLAS_URI;
console.log("this is prod");
// } else {
// uri = LOCAL_URI
// console.log("this is dev")
// }
mongoose.set("strictQuery", true);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));
