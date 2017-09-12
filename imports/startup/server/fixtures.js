import { Meteor } from "meteor/meteor";
import { Orders } from "../../api/orders/collection.js";

Meteor.startup(() => {
  // If orders is empty add a new example order.
  if (Orders.find().count() === 0) {
    const orderFixtures = [
      {
        merchantOrders: [
          {
            name: "Buffalo Bill's Shirts",
            items: [
              {
                name: "Tuna Bread T-shirt",
                brand: "Super Shirts",
                size: "M",
                color: "Red",
                quantityPurchased: 2,
                pricePerItem: 102.33
              },
              {
                name: "Legit Street Shirt",
                brand: "Bum Shirts",
                size: "S",
                color: "Almond White",
                quantityPurchased: 5,
                pricePerItem: 44.44
              }
            ]
          },
          {
            name: "Snorkel Shoes",
            items: [
              {
                name: "Tin Can Times, Shoes of the Ages",
                brand: "Smurf Products LLC.",
                size: "44",
                color: "Blue and Clear",
                quantityPurchased: 1,
                pricePerItem: 1022.013
              }
            ]
          }
        ]
      }
    ];

    // Create unique time stamps.
    const currentDate = new Date();
    const now = currentDate.getTime();
    const timeStamps = orderFixtures.map((order, i) => now + i);

    // Create a new database document for each fixture.
    orderFixtures.forEach((order, i) =>
      Orders.insert({
        ...order,
        createdAt: new Date(timeStamps[i])
      })
    );
  }
});
