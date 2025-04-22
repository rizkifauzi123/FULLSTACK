import React from "react";

const Team = () => (
  <section className="container py-5">
    <h2 className="mb-4 text-center">Tim Kami</h2>
    <div className="row">
      <div className="col-md-4 text-center">
        <img
          src="/images/photo1.jpg"
          alt="Anggota 1"
          className="rounded-circle mb-3 img-fluid"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h5>Sarah</h5>
        <p>Design grafis</p>
      </div>
      <div className="col-md-4 text-center">
        <img
          src="/images/photo2.jpg"
          alt="Anggota 2"
          className="rounded-circle mb-3 img-fluid"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h5>Dwi</h5>
        <p>Social media specialis</p>
      </div>
      <div className="col-md-4 text-center">
        <img
          src="/images/photo3.jpg"
          alt="Anggota 3"
          className="rounded-circle mb-3 img-fluid"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h5>Deri</h5>
        <p>Digital marketing</p>
      </div>
    </div>
  </section>
);

export default Team;
