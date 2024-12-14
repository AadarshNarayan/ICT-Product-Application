import React from 'react';

const Home = ({ products }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'seashell' }}>
      <h1 style={{ textAlign: 'center', fontSize: '30px', color: 'black', marginBottom: '25px' }}>Home Page / Product Dashboard</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem', }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{backgroundColor: 'white',borderRadius: '8px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',padding: '10px',}}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '200px', objectFit: 'contain' }}/>
            <div style={{ marginTop: '10px' }}>
              <h2 style={{
                  fontSize: '20px',color: 'black',marginBottom: '8px',fontWeight: 'bold',
                }}>
                {product.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '0.5rem' }}>
                {product.category}</p>
              <p style={{
                  fontSize: '15px',color: 'lightcoral',fontWeight: 'bold',
                }} >
                ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;