// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     orderItems: [
//       {
//         name: { type: String, required: true },
//         quantity: { type: Number, required: true },
//         image: { type: String, required: true },
//         price: { type: Number, required: true },
//       },
//     ],
//     billingAddress: {
//       fullName: { type: String, required: true },
//       address: { type: String, required: true },
//       city: { type: String, required: true },
//       postalCode: { type: String, required: true },
//       country: { type: String, required: true },
//     },
//     paymentDetails: { type: String, required: false },
//     totalAmount: { type: Number, required: true },
//     isPaid: { type: Boolean, required: true },
//     paidAt: { type: Date },
//   },
//   {
//     timestamps: true,
//   },
// );
// const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
// export default Order;
