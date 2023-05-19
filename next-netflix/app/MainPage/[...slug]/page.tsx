"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import styled from 'styled-components'
import styles from '../../styles/home.module.css'
import SearchHydrate from "@/app/SearchPage/SearchHydrate";

export default function Page({
  params,
  searchParams,
}: {
  params: { id: number, title: string, image: string, description: string };
  searchParams: { [title: string]: string | string[] | undefined };
}) {
  console.log(params);
  console.log(searchParams);
  return <h1>My Page</h1>;
}
const PosterBox = styled.img`
  width: 100%;
  height: 415px;
`
const TitleBox = styled.div`
  font-size: 27px;
  font-weight: 700%;
  color: white;
`
const DesBox = styled.div`
  font-size: 12px;
  font-weight: 400%;
  color: white;
`
