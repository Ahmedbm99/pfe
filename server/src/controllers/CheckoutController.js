
module.exports = {
  async createCheckoutSession(req, res) {
    try {
      const checkoutProduct = req.body.checkoutProduct;
      var i;
      var item1 = [];
      console.log(checkoutProduct);
      for (i = 0; i < checkoutProduct.length; i++) {
        item1.push(checkoutProduct[i]);
        
      }
    
    } catch (err) {
      res.status(500).send({
        error: "An error occured when trying to checkout ",
      });
    }
  },
  async retrieveCheckoutSession(req, res) {
    try {
      const sessionId = req.params.sessionId;
      
      res.send(sessionId);
    } catch (err) {
      res.status(500).send({
        error: "An error occured when trying to retrieve checkout session.",
      });
    }
  },
};
