// @flow

// Framework
import { Meteor } from "meteor/meteor";

// Collections
import { Orders } from "./collection";

/**
 * Get the most recent order created.
 *
 * @returns {Object} A single order object.
 */
export const getLastOrder = () => {
  if (Meteor.isServer) {
    const options = { sort: { createdAt: -1 }, limit: 1 };
    try {
      const lastOrderCursor = Orders.find({}, options);
      const lastOrder = lastOrderCursor.fetch()[0];
      return lastOrder;
    } catch (error) {
      throw new Meteor.Error(
        "api.orders.getLastOrder.findOrFetchError",
        "Could not find or fetch most recent order.",
        error
      );
    }
  }
};

// Register meteor methods.
Meteor.methods({
  "orders.getLastOrder": getLastOrder
});
