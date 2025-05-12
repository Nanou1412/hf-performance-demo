import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ClientLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(form.email, form.password);
    if (success) {
      navigate("/client/dashboard");
    } else {
      setError("Identifiants incorrects.");
    }
  };

  return (
    <div className="bg-black text-white py-20 px-4 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Connexion Client</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default ClientLogin;
