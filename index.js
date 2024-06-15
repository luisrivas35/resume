import express from "express";
import path from "path";
import { engine } from "express-handlebars";
import fileUpload from "express-fileupload";
import resumeRoutes from "./routes/resume.route.js";

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    limits: { fileSize: 5000000 },
    useTempFiles: true,
  })
);

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/", resumeRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).render("error", { errorMessage: err.message });
});

// 404 Page
app.get("*", (req, res) => {
  res.status(404).render("error_main");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
