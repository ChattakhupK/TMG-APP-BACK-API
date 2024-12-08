const prisma = require("../config/prisma");

exports.list = async (req, res) => {
  try {
    const getData = await prisma.resources.findMany({});
    res.json({ getData });
  } catch (err) {
    console.log(err);
  }
};

exports.create = async (req, res) => {
  try {
    const { title, pricePer, valuePrice } = req.body;
    const newData = await prisma.resources.create({
      data: {
        title: title,
        pricePer: pricePer,
        valuePrice: valuePrice,
      },
    });

    res.json({ newData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, pricePer, valuePrice } = req.body;
    const updated = await prisma.resources.update({
      where: {
        id: Number(id),
      },
      data: {
        title: title,
        pricePer: pricePer,
        valuePrice: valuePrice,
      },
    });
    res.json({ updated });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const deleted = await prisma.resources.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ deleted });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};
