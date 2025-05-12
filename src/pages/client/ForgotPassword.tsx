import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true); // Simule l'envoi
  };

  return (
    <div className="bg-black text-white py-20 px-4 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Mot de passe oublié</h1>

      {sent ? (
        <p className="text-green-400 text-sm">
          Si cet email est reconnu, un lien de réinitialisation a été envoyé.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold"
          >
            Réinitialiser
          </button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
