import React from "react";
import { stats } from "../demo-data";

const Stats = () => {
  return (
    <div className=" mt-40 mb-20 bg-slate-100 py-12">
      <div className="content grid grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <div key={index}>
            <h2 className="text-5xl font-bold">{stat.value}</h2>
            <p className="uppercase mt-3 text-black/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
