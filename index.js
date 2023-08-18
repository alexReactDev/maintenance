const Express = require("express");
const path = require("path");

const app = Express();
const port = 5000;

app.use(Express.static(path.join(__dirname, "public")));
app.use("/", (req, res, next) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(port, () => console.log(`Server started on port ${port}`));