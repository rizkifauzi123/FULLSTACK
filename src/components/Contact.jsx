import React from "react";

const Contact = () => (
  <section className="container py-5">
    <h2 className="mb-4">Kontak Kami</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nama</label>
        <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Masukkan email Anda" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Pesan</label>
        <textarea className="form-control" id="message" rows="4" placeholder="Tulis pesan Anda"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Kirim</button>
    </form>
  </section>
);

export default Contact;