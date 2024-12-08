exports.list = async (req, res) => {
  try {
    res.send('Hello list user')
  } catch (err) {
    console.log(err);
  }
};
