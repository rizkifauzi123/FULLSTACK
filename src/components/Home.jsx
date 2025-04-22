// src/components/Home.js
import React from "react";

const Home = () => (
  <section className="container py-5">
    <h1 className="mb-4 text-center">Selamat Datang di Website Kami</h1>
    <p className="lead text-center">Ini adalah halaman Home yang sudah dirapikan dengan konten teks dan gambar.</p>
    <div className="d-flex justify-content-center">
    <img
      src="/images/photo4.jpg"
      alt="Contoh Gambar"
      className="img-fluid rounded-circle"
      style={{ maxWidth: "300px", width:"100%", height: "auto", objectFit:"cover"}}
    />
    </div>
  </section>
);

export default Home;
