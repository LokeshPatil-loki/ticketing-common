export enum OrderStatus {
  // When the order has been created,
  // but the ticket it is trying to order has not been reserved
  Created = "created",

  // The ticket the order is trying to reservse
  // has already been reserved,
  // or user has cancelled the order.
  // Or The order expires before payment
  Cancelled = "cancelled",

  // The order has successfully reserved the ticket
  AwaitingPayment = "awaiting:payment",

  // The order has reserved the ticket and the user has
  // Provided payment successfully
  Complete = "complete",
}
