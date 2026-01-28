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
            {/* Hero Section */}
            <div className="hero">
                <img src="/logo.jpg" alt="RK MART Logo" style={{ width: '150px', borderRadius: '50%', marginBottom: '1rem', border: '3px solid white' }} />
                <h1>RK MART</h1>
                <p>Near Ambedkar Chowrasta, Bodhan</p>
                <div style={{ position: 'relative', display: 'inline-block', width: '70%' }}>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search for groceries..."
                    />
                    <button style={{
                        position: 'absolute', right: '5px', top: '5px', height: '85%',
                        background: '#FF6B6B', color: 'white', border: 'none',
                        borderRadius: '50px', padding: '0 2rem', cursor: 'pointer', fontWeight: 'bold'
                    }}>Search</button>
                </div>
            </div>

            {/* Promotional Banners (Templates in Middle) */}
            <div className="banner-grid">
                <div className="promo-banner">
                    <div className="promo-content">
                        <h3>Super Saver Deal</h3>
                        <p>Flat 20% OFF on Rice & Dals</p>
                    </div>
                    <span style={{ fontSize: '2.5rem' }}>🍚</span>
                </div>
                <div className="promo-banner">
                    <div className="promo-content">
                        <h3>Fresh Vegetables</h3>
                        <p>Farm fresh daily morning</p>
                    </div>
                    <span style={{ fontSize: '2.5rem' }}>🥦</span>
                </div>
                <div className="promo-banner">
                    <div className="promo-content">
                        <h3>Instant Delivery</h3>
                        <p>Free delivery above ₹500</p>
                    </div>
                    <span style={{ fontSize: '2.5rem' }}>🚚</span>
                </div>
            </div>

            {/* Products Section */}
            <h2 className="section-title">Best Selling Groceries</h2>
            <div className="dashboard-grid">
                {products.map(p => (
                    <div className="card" key={p.id}>
                        <img src={p.image} alt={p.name} />
                        <div className="card-content">
                            <h3>{p.name}</h3>
                            <span className="price">₹{p.price}</span>
                            <button className="btn">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer / Contact Section */}
            <div className="footer-section">
                <h2 style={{ marginBottom: '3rem', borderBottom: '1px solid #555', paddingBottom: '1rem', display: 'inline-block' }}>Visit RK MART Today</h2>
                <div className="contact-grid">
                    <div className="contact-item">
                        <h4>📍 ADDRESS</h4>
                        <p>Near Ambedkar Chowrasta,<br />Narsi Road, Bodhan,<br />Telangana - 503185</p>
                    </div>
                    <div className="contact-item">
                        <h4>📞 CONTACT</h4>
                        <p>Mobile: +91 7702312567<br />Email: support@rkmart.com</p>
                    </div>
                    <div className="contact-item">
                        <h4>⏰ OPENING HOURS</h4>
                        <p>Monday - Sunday<br />8:00 AM - 10:00 PM</p>
                    </div>
                </div>
                <p style={{ marginTop: '3rem', color: '#777', fontSize: '0.9rem' }}>© 2026 RK MART. All rights reserved.</p>
            </div>
        </div>
    );
};

export default UserHome;
