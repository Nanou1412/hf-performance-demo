import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé (simulation). Merci !");
    setForm({ nom: "", email: "", message: "" });
  };

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contactez-nous</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={form.nom}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          ></textarea>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
