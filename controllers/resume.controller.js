export const getAllSkaters = async (req, res) => {
  try {
    const skaters = await findAll();
    res.render("index", { skaters });
  } catch (err) {
    res.status(500).render("error", { err });
  }
};
