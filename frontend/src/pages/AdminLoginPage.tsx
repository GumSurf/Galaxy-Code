import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/util/authAdmin'; // Assurez-vous de définir et d'importer votre contexte d'authentification

const AdminLoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { login } = useContext(AuthContext); // Utiliser le contexte d'authentification pour la fonction login
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log("handleLogin a été appelé");
        try {
            console.log("avant login");
            await login(email, password);
            console.log("connexion réussie !");
            navigate('/admin/dashboard'); // Rediriger vers la page d'administration après une connexion réussie
        } catch (error) {
            console.log("connexion failed bien");
            console.error('Login failed', error);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2>Admin Login</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={styles.input}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={styles.input}
                />
                <button onClick={handleLogin} style={styles.button}>Login</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
    },
    formContainer: {
        padding: '20px',
        borderRadius: '5px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center' as 'center',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '3px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '3px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default AdminLoginPage;
