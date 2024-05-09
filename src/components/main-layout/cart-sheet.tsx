const CartSheet = () => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex flex-col h-full">
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default CartSheet;
