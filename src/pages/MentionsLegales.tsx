const MentionsLegales = () => {
  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Mentions Légales</h1>

        <div className="text-gray-300 space-y-4 text-sm">
          <p>
            <strong>Éditeur du site :</strong> HF Performance France – Société fictive pour démonstration.
          </p>
          <p>
            <strong>Adresse :</strong> 21 rue de la Performance, 75000 Paris
          </p>
          <p>
            <strong>Email :</strong> contact@hf-performance.fr
          </p>
          <p>
            <strong>Directeur de publication :</strong> Mr. DÉMO
          </p>
          <p>
            <strong>Hébergeur :</strong> Vercel Inc – 340 S Lemon Ave #4133 Walnut, CA 91789
          </p>
          <p>
            Ce site est une démonstration. Aucune information saisie ne sera traitée ou conservée.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
