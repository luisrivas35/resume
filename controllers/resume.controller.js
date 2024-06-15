export const getIndex = async (req, res) => {
  try {
    
    res.render("index");
  } catch (err) {
    res.status(500).render("error", { err });
  }
};

export const getAbout = async (req, res) => {
  try {
    res.render("about_me");
  } catch (err) {
    res.status(500).render("error", { err });
  }
};

export const getExperience = async (req, res) => {
  try {
    res.render("experience");
  } catch (err) {
    res.status(500).render("error", { err });
  }
};

export const getEducation = async (req, res) => {
  try {
    res.render("education");
  } catch (err) {
    res.status(500).render("error", { err });
  }
};

