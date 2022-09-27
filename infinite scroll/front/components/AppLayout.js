import React, { useCallback, useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  //   const { isLoggedIn, nick, role } = useSelector((state) => state.auth);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     if (nick === "") {
  //       dispatch(getUserDataAction());
  //     }
  //   }, []);

  //   const onLogOut = useCallback((e) => {
  //     dispatch(logOutAction());
  //   });

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>예제페이지</title>
      </Head>
      <header class="header">예제 헤더임</header>
      <main>
        <nav class="leftnav">으하하하</nav>
        <div className="maincontent">{children}</div>
        <nav class="leftnav">으하하하</nav>
      </main>
    </>
  );
};
export default AppLayout;
