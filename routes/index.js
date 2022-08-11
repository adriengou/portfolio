import { Router } from "express";

const router = Router();

/* GET index page. */
router.get("/", (req, res) => {
  res.render("index", {
    title: "Express",
  });
});

export default router;
