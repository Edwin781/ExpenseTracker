import React, { useContext, useEffect, Component } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function scrollToTop() {
    return scroll.scrollToBottom();
  }

  return (
    <>
      <h3>History</h3>
      <Element
        name="test7"
        className="element"
        id="containerElement"
        style={{
          position: "relative",
          height: "180px",
          overflow: "scroll",
          marginBottom: "5px",
        }}
      >
        <ul className="list" onChange={scrollToTop}>
          {transactions.map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))}
        </ul>
      </Element>
    </>
  );
};
