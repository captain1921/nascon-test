import express from 'express';
const app = express();

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
	res.render('response.ejs'); // Assuming 'index' is the template to render
});
