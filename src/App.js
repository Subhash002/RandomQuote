import React, { useEffect, useState } from "react";
import Categories from "./components/Categories";
import Quote from "./components/Quote";
import "./styles.css";
import { getCategories, getQuote } from "./quotesService";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");
  const [quote, setQuote] = useState({});
  useEffect(() => {
    getCategories().then((cats) => {
      if (cats.length > 0) {
        setCategories(cats);
        setSelected(cats[0]);
      }
    });
  }, []);

  useEffect(() => {
    selected && getQuote(selected).then((q) => setQuote(q));
  }, [selected]);

  useEffect(() => {
    let timer = setInterval(() => {
      getQuote(selected).then((q) => setQuote(q));
    }, 5000);
    return () => clearInterval(timer);
  }, [selected]);
  return (
    <div className="quote-master">
      <Categories
        categories={categories}
        selected={selected}
        onSelected={(category) => setSelected(category)}
      />
      {quote && <Quote quote={quote.quote} author={quote.author} />}
    </div>
  );
};

export default App;
