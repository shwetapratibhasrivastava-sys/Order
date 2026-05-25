import Order from "../models/orderModel.js"


export const createOrder = async (req, res) => {
  try {
    const { item, quantity, customer } = req.body;

    if (!item || !quantity || !customer) {
      return res.json({
        message: "All fields are required",
      });
    }

    const existingOrder = await Order.findOne({ item, customer });

    if (existingOrder) {
      return res.json({
        message: "Order already exists",
        data: existingOrder,
      });
    }

    const order = await Order.create({ item, quantity, customer });

    res.status(200).json({
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Order.find();
    res.json(order);
  } catch (error) {
    res.json(error.message);
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json(order);
  } catch (error) {
    res.json(error.message);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Order updated", data: order });
  } catch (error) {
    res.json(error.message);
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted", data: order });
  } catch (error) {
    res.json(error.message);
  }
};