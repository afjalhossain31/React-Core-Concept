const Cart = ({ cart }) => {
    return (
        <div>
            {
                cart.map((c) => <h1 key={c.idMeal}>{c.strMeal} <button>X</button></h1>)
            }
        </div>
    );
};

export default Cart;