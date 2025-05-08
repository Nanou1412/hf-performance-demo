export const simulateFakePayment = async (): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Paiement fictif réussi 🎉' })
    }, 1000)
  })
}
