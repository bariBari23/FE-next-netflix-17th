"use client";

// import { User } from "../types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSearchData } from "../api";


export default function SearchHydrate() {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-datas"],
    queryFn: () => getSearchData(),
  });

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
       <div>
        {data?.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>

    </main>
  );
}
