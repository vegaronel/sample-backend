import express from "express"

const app = express();

app.get("/", (req, res)=> {
    res.send("Backend is Working");
})

app.listen(3000, ()=>{
    console.log("Server is running");
})

export default app;