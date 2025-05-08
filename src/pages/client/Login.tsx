import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { demoUsers } from '../../context/DemoUsers'
import toast from 'react-hot-toast'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const user = demoUsers.find((u) => u.email === email && u.password === password)

    if (user) {
      localStorage.setItem('hf-demo-user', JSON.stringify(user))
      toast.success('Connexion réussie ✅')
      // ✅ Plus de redirection automatique ici
    } else {
      toast.error('Identifiants incorrects ❌')
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-neutral-800 text-white"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-neutral-800 text-white"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded hover:bg-red-600 transition"
        >
          Se connecter
        </button>
      </form>

      <p className="text-neutral-500 mt-6 text-sm text-center">
        Comptes de test :
        <br />
        <strong>Client :</strong> demo@client.fr / demo123
        <br />
        <strong>Admin :</strong> admin@hf.fr / admin123
      </p>
    </div>
  )
}

export default Login
