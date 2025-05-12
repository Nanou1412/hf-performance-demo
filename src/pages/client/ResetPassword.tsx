import { useState } from "react";

const ResetPassword = () => {
  const [form, setForm] = useState({ password: "", confirm: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password === form.confirm) {
      setSuccess(true); // Simulation uniquement
    }
  };

  return (
    <div className="bg-black text-white py-20 px-4 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Réinitialisation du mot de passe</h1>

      {success ? (
        <p className="text-green-400 text-sm">
          Mot de passe réinitialisé avec succès (simulation). Vous pouvez maintenant vous connecter.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <input
            type="password"
            name="password"
            placeholder="Nouveau mot de passe"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          />
          <input
            type="password"
            name="confirm"
            placeholder="Confirmer le mot de passe"
            value={form.confirm}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          />
          {form.password !== form.confirm && form.confirm && (
            <p className="text-red-500 text-sm">Les mots de passe ne correspondent pas.</p>
          )}
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

export default ResetPassword;
