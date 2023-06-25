import React from "react";

const fetchDoctor = async (doctorId: string) => {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/users/${doctorId}`
  );
  const data = await res.json();
  return data;
};

async function DoctorPage({ params }: any) {
  console.log("🚀 ~ file: page.tsx:12 ~ DoctorPage ~ doctorId:", params);

  const doctor = await fetchDoctor(params.doctorId);

  return (
    <>
      <h1>Doctor Page</h1>
      <p>{doctor.name}</p>
      <p>{doctor.email}</p>
    </>
  );
}

export default DoctorPage;
