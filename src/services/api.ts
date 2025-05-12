// Simule une API côté client (mock)
// Peut être remplacé plus tard par des appels réels via axios.ts

import { demoUsers } from "../context/DemoUsers";

export const fakeLogin = (email: string, password: string) => {
  return demoUsers.find((u) => u.email === email && u.password === password) || null;
};

export const getFakeRdv = () => {
  return [
    {
      nom: "Jean Dupont",
      voiture: "Audi RS3",
      prestation: "Stage 1",
      date: "2025-05-20",
      heure: "10:00",
      statut: "Confirmé",
    },
  ];
};

export const getFakeCommandes = () => {
  return [
    {
      id: 1,
      montant: 390,
      date: "2025-05-01",
      statut: "Payé",
    },
  ];
};
