// Simule un service de paiement pour la démo
// En version réelle : remplacer par intégration Stripe ou PayPal

export const fakePayment = (amount: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paiement simulé de", amount, "€");
      resolve(true);
    }, 1000);
  });
};
