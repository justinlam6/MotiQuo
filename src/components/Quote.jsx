import { useState, useEffect } from "react";

const Quote = ({ setScreen }) => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://zenquotes.io/api/random?nocache=" + Math.random()
        )}`
      );
      const data = await response.json();
      const parsedData = JSON.parse(data.contents);

      if (Array.isArray(parsedData) && parsedData.length > 0) {
        setQuote(parsedData[0]);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="h-screen bg-zinc-900 flex flex-col justify-between">
      <div className="flex flex-grow items-center justify-center select-none">
        {loading ? (
          <div className="text-white"></div>
        ) : (
          <div
            className="p-6 rounded-md text-white mt-7  w-1/2 text-center cursor-pointer"
            onClick={fetchQuote}
          >
            <p className="text-2xl font-semibold">{quote?.q}</p>
            <p className="text-lg mt-5 text-gray-400">{quote?.a}</p>
            <p className="text-sm mt-5 text-slate-500">[ click to refresh ]</p>
          </div>
        )}
      </div>

      <div className="flex text-slate-500  py-4 px-3 justify-between">
        <a className=" text-sm select-none" onClick={() => setScreen("about")}>
          about
        </a>
      </div>
    </div>
  );
};

export default Quote;
