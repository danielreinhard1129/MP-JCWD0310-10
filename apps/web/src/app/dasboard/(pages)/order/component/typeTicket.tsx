"use client";

import React, { useState } from "react";

const TypeTicket = () => {
  const [todo, setTodo] = useState([
    { name: "event 1", price: 10000, seats: 24 },
    { name: "event 2", price: 20000, seats: 20 },
    { name: "event 3", price: 30000, seats: 10 },
  ]);
  return (
    <>
      {todo.map((e, i) => (
        <div className="flex items-center gap-4" key={i}>
          <p className="font-semibold">{e.name}</p>
          <p className="font-semibold">{e.price}</p>
          <p className="font-semibold">{e.seats} seats</p>
          <p>
            <button className="text-red-500 hover:text-red-700 focus:outline-none focus:ring">
              Delete
            </button>
          </p>
        </div>
      ))}
    </>
    // <>
    //   {todo.map((e, i) => {
    //     <div className="flex items-center gap-4" key={i}>
    //       <p className="font-semibold">{e.name}</p>
    //       <p className="font-semibold">{e.price}</p>
    //       <p className="font-semibold">{e.seats} seats</p>
    //       <p>
    //         <button className="text-red-500 hover:text-red-700 focus:outline-none focus:ring">
    //           Delete
    //         </button>
    //       </p>
    //     </div>;
    //   })}
    // </>
  );
};

export default TypeTicket;
