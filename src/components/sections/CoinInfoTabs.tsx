import { useEffect, useState, type FC } from 'react';
// import { Link } from 'react-router-dom'; // Descomenta se fores usar links
import { auth, db } from '../../services/firebaseConfig';
import { type User, onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot, type DocumentSnapshot } from 'firebase/firestore';

export const CoinInfoTabs: FC = () => {
    // Definimos explicitamente que 'isAuthenticated' é boolean
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
    const [coins, setCoins] = useState<number>(0);
    const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
    const [active, setActive] = useState<'login' | 'coins' | 'benefits' | 'about'>('login');

    useEffect(() => {
        // CORREÇÃO AQUI: Adicionado o tipo (user: User | null)
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            setFirebaseUser(user);
            setIsAuthenticated(!!user);
            setLoadingAuth(false);
            if (user) {
                setActive('coins');
            } else {
                setCoins(0);
                setActive('login');
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (firebaseUser) {
            // CORREÇÃO AQUI: Adicionado o tipo (doc: DocumentSnapshot)
            const unsub = onSnapshot(doc(db, 'users', firebaseUser.uid), (documentSnapshot: DocumentSnapshot) => {
                if (documentSnapshot.exists()) {
                    // forçamos a tipagem do data() ou usamos ?.
                    const data = documentSnapshot.data();
                    setCoins(data?.saldo_olimpo_coins ?? 0);
                }
            });
            return () => unsub();
        }
    }, [firebaseUser]);

    if (loadingAuth) return <div>A carregar...</div>;

    return (
        <div className="coin-tabs-container">
            {/* Header das Tabs */}
            <div className="tabs-header">
                {!isAuthenticated && <button onClick={() => setActive('login')} className={active === 'login' ? 'active' : ''}>Login</button>}
                {isAuthenticated && <button onClick={() => setActive('coins')} className={active === 'coins' ? 'active' : ''}>Coins</button>}
                <button onClick={() => setActive('benefits')} className={active === 'benefits' ? 'active' : ''}>Benefícios</button>
                <button onClick={() => setActive('about')} className={active === 'about' ? 'active' : ''}>Sobre</button>
            </div>

            {/* Conteúdo */}
            <div className="tab-content">
                {active === 'login' && (
                    <div className="tab-pane">
                        <h3>Faz login para veres as tuas moedas</h3>
                        <p>Ganhe recompensas a cada corte.</p>
                        <button className="btn-gold">Login / Registo</button>
                    </div>
                )}

                {active === 'coins' && (
                    <div className="tab-pane">
                        <h3>Saldo Atual</h3>
                        <div className="coin-display">{coins} Olimpo Coins</div>
                    </div>
                )}

                {active === 'benefits' && (
                    <div className="tab-pane">
                        <h3>Tabela de Recompensas</h3>
                        <ul>
                            <li>15 Coins: 10% Desconto</li>
                            <li>55 Coins: 50% Desconto</li>
                            <li>100 Coins: T-shirt Grátis</li>
                        </ul>
                    </div>
                )}

                {active === 'about' && (
                    <div className="tab-pane">
                        <p>A cada corte recebes 1 coin. A cada skin care recebes 2.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoinInfoTabs;