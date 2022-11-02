import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex h-screen flex-col">
      <Head>
        <title>CustomShop</title>
      </Head>
      <Header />
      <main className="flex flex-1 flex-col overflow-y-scroll">{children}</main>
      <SideBar />
      <Footer />
    </div>
  );
}
