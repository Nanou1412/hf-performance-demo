const PolitiqueConfidentialite = () => {
  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Politique de Confidentialité</h1>

        <div className="text-gray-300 space-y-4 text-sm">
          <p>
            Ce site est une démonstration. Aucune donnée personnelle n’est collectée, stockée ou
            utilisée à des fins commerciales.
          </p>
          <p>
            Les formulaires présents sur le site ne déclenchent aucune action réelle. Toute
            information saisie est automatiquement ignorée.
          </p>
          <p>
            Aucune technologie de suivi (cookies, analytics, pixels) n’est activée sur cette
            version démo.
          </p>
          <p>
            Pour plus d’informations ou pour découvrir nos prestations dans un cadre réel,
            veuillez nous contacter directement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
