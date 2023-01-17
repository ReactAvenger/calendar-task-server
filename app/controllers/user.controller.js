exports.allAccess = (_, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (_, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (_, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (_, res) => {
  res.status(200).send("Moderator Content.");
};
