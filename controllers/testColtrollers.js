const testConteoller = (req, res) => {
   res.status(200).send({
    message: "welcpme test rout hi",
    success: true,
   });
};

module.exports = { testConteoller };