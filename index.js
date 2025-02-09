import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
import session from 'express-session'
import UserRoutes from './Users/routes.js'
import RatingRoutes from './Ratings/routes.js'
import FriendsRoutes from './Friends/routes.js'
import ReviewRoutes from './Review/routes.js'
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/innerMusic";
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(
    cors({
      credentials: true,
      origin: process.env.NETLIFY_URL || "http://localhost:3000",
    })
   ); 
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "music",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.get("/", (req, res) => {
    res.send("Welcome to InnerMusic API");
});
app.use(session(sessionOptions));
app.use(express.json())
UserRoutes(app)
RatingRoutes(app)
FriendsRoutes(app)
ReviewRoutes(app)
console.log(process.env.PORT || 4000);
console.log(process.env.NETLIFY_URL || "http://localhost:3000");
app.listen(process.env.PORT || 4000);