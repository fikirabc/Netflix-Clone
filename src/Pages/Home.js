import React from "react";
import { Header } from "../Component/Header/Header";
import { Footer } from "../Component/Footer/Footer";
import Banner from "../Component/Banner/Banner";
import RowList from "../Component/RowList/RowList";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};
