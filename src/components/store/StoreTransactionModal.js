import React from "react";
import StoreTransactionItem from "./StoreTransactionItem";

function StoreTransactionModal({
  setStoreTransactionModal,
  transaction,
  orderNumber,
}) {
  return (
    <div>
      <div
        className="w-full min-h-screen max-h-full fixed left-0 top-0 bot-0 z-10 pt-24 "
        style={{ background: `rgba(0, 0, 0, 0.8)` }}
        onClick={() => setStoreTransactionModal(false)}
      ></div>
      <div className="fixed left-0 top-0 right-0 mt-10 bg-white w-11/12 border z-20 border-gray-300 rounded-md mx-auto p-5 overflow-y-scroll">
        <p className="text-2xl">Order Number: #{orderNumber}</p>
        <div className="grid grid-cols-10 gap-4 w-full justify-items-center items-center font-bold bg-black text-white py-2 mt-5">
          <p className="col-span-1">Image</p>
          <p className="col-span-3">Product Name</p>
          <p className="col-span-2">Description</p>
          <p className="col-span-1">Category</p>
          <p className="col-span-1">Quantity</p>
          <p className="col-span-1">Price</p>
          <p className="col-span-1">Total Price</p>
        </div>
        {transaction.items.map((item) => (
          <StoreTransactionItem item={item} key={item.cartId} />
        ))}
      </div>
    </div>
  );
}

export default StoreTransactionModal;