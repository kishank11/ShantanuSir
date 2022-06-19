const mongoose = require("mongoose");

try {
  mongoose.connect(
    "mongodb://127.0.0.1:27017/siti",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(`connected to db`);
    }
  );
} catch (error) {
  handleError(error);
}
