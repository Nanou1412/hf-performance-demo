import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profil = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "client") {
      navigate("/client/login");
    }
  }, [user, navigate]);

  if (!user || user.role !== "client") return null;

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Mon Profil</h1>
        <div className="space-y-4 text-gray-300 text-sm">
          <p>
            <strong>Nom :</strong> {user.nom}
          </p>
          <p>
            <strong>Email :</strong> {user.email}
          </p>
          <p>
            <strong>Rôle :</strong> {user.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
