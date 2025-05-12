import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Panier = () => {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-red-500">Mon Panier</h1>

        {cart.length === 0 ? (
          <p className="text-gray-400 text-sm">Votre panier est vide.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-neutral-900 p-4 rounded"
                >
                  <div>
                    <h2 className="font-semibold">{item.nom}</h2>
                    <p className="text-sm text-gray-400">{item.prix} €</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Supprimer
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-right">
              <p className="text-lg font-semibold">
                Total : <span className="text-red-500">{total} €</span>
              </p>
              <Link
                to="/reservation"
                className="inline-block mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm font-semibold"
              >
                Réserver maintenant
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Panier;
