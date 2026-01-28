import { useState } from 'react';

const UserHome = ({ user }) => {
    const [products] = useState([
        { id: 1, name: 'Daawat Basmati Rice (5kg)', price: 450, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80' },
        { id: 2, name: 'Fortune Sunflower Oil (1L)', price: 165, image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=400&q=80' },
        { id: 3, name: 'Aashirvaad Atta (10kg)', price: 480, image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=400&q=80' },
        { id: 4, name: 'Tata Salt (1kg)', price: 25, image: 'https://images.unsplash.com/photo-1616641508216-24c65360980f?auto=format&fit=crop&w=400&q=80' },
        { id: 5, name: 'Toor Dal (1kg)', price: 135, image: 'https://images.unsplash.com/photo-1585996639599-2396191b7e19?auto=format&fit=crop&w=400&q=80' },
        { id: 6, name: 'Maggi Noodles (Pack of 4)', price: 56, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=400&q=80' },
        { id: 7, name: 'Good Day Biscuits', price: 30, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80' },
        { id: 8, name: 'Fresh Tomatoes (1kg)', price: 40, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80' },
        { id: 9, name: 'Amul Butter (500g)', price: 275, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80' },
        { id: 10, name: 'Red Label Tea (500g)', price: 320, image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=400&q=80' },
        { id: 11, name: 'Colgate Toothpaste', price: 95, image: 'https://images.unsplash.com/photo-1559304787-945aa4341065?auto=format&fit=crop&w=400&q=80' },
        { id: 12, name: 'Lux Soap (Pack of 3)', price: 140, image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=400&q=80' }
    ]);

    return (
        <div>
            <div className="hero">
                <img src="/logo.jpg" alt="RK MART Logo" style={{ width: '180px', marginBottom: '1.5rem', borderRadius: '50%', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
                <h1>Welcome to RK MART</h1>
                <p>India's Freshest Online Supermarket</p>
                <div style={{ position: 'relative', display: 'inline-block', width: '60%' }}>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search for rice, oil, dal..."
                        style={{ width: '100%' }}
                    />
                    <button style={{
                        position: 'absolute', right: '5px', top: '5px', height: '90%',
                        background: '#FF6B6B', color: 'white', border: 'none',
                        borderRadius: '50px', padding: '0 2rem', cursor: 'pointer', fontWeight: 'bold'
                    }}>Search</button>
                </div>
            </div>

            <h2 className="section-title">Daily Essentials & Groceries</h2>
            <div className="dashboard-grid">
                {products.map(p => (
                    <div className="card" key={p.id}>
                        <div style={{ overflow: 'hidden', height: '220px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                            <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                        </div>
                        <div className="card-content" style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', height: '2.4em', overflow: 'hidden' }}>{p.name}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                <span className="price" style={{ color: '#27ae60', fontSize: '1.4rem', fontWeight: 'bold' }}>₹{p.price}</span>
                                <button className="btn" style={{ width: 'auto', padding: '0.5rem 1.5rem', fontSize: '0.9rem', background: '#FF6B6B' }}>ADD +</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '5rem', textAlign: 'center', padding: '3rem', background: '#e9ecef', borderRadius: '20px' }}>
                <h2 style={{ marginBottom: '2rem' }}>Why Shop With Us?</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '200px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚚</div>
                        <h3>Super Fast Delivery</h3>
                        <p>Get your groceries delivered within 2 hours.</p>
                    </div>
                    <div style={{ flex: '1', minWidth: '200px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥦</div>
                        <h3>Farm Fresh</h3>
                        <p>Vegetables and fruits directly from farmers.</p>
                    </div>
                    <div style={{ flex: '1', minWidth: '200px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💯</div>
                        <h3>Best Prices</h3>
                        <p>Cheaper than your local mandi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
