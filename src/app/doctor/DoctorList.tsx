import Link from "next/link";
import React from "react";

const fetchDoctors = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

async function DoctorList() {
  const doctors = await fetchDoctors();
  return (
    <>
      <h1>Doctor List</h1>
      {doctors.map((doctor: any) => {
        return (
          <div key={doctor.id}>
            <Link href={`/doctor/${doctor.id}`}>{doctor.name}</Link>

            <p>{doctor.email}</p>
          </div>
        );
      })}
    </>
  );
}

export default DoctorList;
