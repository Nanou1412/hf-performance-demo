import { createContext, useState, ReactNode } from 'react'

interface Produit {
  id: string
  nom: string
  prix: number
  description: string
  image: string
}

interface CartContextType {
  panier: Produit[]
  ajouterAuPanier: (produit: Produit) => void
  retirerDuPanier: (id: string) => void
  viderPanier: () => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [panier, setPanier] = useState<Produit[]>([])

  const ajouterAuPanier = (produit: Produit) => {
    setPanier((prev) => [...prev, produit])
  }

  const retirerDuPanier = (id: string) => {
    setPanier((prev) => prev.filter((p) => p.id !== id))
  }

  const viderPanier = () => setPanier([])

  return (
    <CartContext.Provider value={{ panier, ajouterAuPanier, retirerDuPanier, viderPanier }}>
      {children}
    </CartContext.Provider>
  )
}
