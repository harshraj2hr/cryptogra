export const DAHeaderButtons = [
    { buttonName: '0', contentname: 'Use Internet', stylingClass: 'use-internet' },
    { buttonName: '1', contentname: 'Add Documents', stylingClass: 'add-documents' },
    { buttonName: '2', contentname: 'Add Columns', stylingClass: 'add-columns' }
  ];
  
//   const getRandomElement = <T>(arr: T[]): T =>

  const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
  const getRandomFloat = (min: number, max: number, decimals: number): number => parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
  
  const documents = ["Trade Log 1", "Trade Log 2", "Trade Log 3", "Trade Log 4"];
  const trades = ["Reliance Industries", "TCS", "Infosys", "HDFC Bank", "ICICI Bank"];
  const exchanges = ["NSE", "BSE", "NYSE", "NASDAQ"];
  const tradeTypes = ["Long Position", "Short Position"];
  const instruments = ["Indian Stock", "Foreign Stock", "Bond", "Commodity"];
  const dateOptions = ["Jan 05, 2024", "Feb 10, 2024", "Mar 15, 2024", "Apr 20, 2024"];
  
  type TradeData = {
    document: string;
    trade: string;
    date: string;
    exchange: string;
    "type of trade": string;
    "trade size": number;
    "type of instrument": string;
    "profit/loss %": number;
  };
  
  const generateTradeData = (): TradeData[] => {
    return Array.from({ length: 25 }, (): TradeData => ({
      document: getRandomElement(documents),
      trade: getRandomElement(trades),
      date: getRandomElement(dateOptions),
      exchange: getRandomElement(exchanges),
      "type of trade": getRandomElement(tradeTypes),
      "trade size": getRandomNumber(1000, 100000),
      "type of instrument": getRandomElement(instruments),
      "profit/loss %": getRandomFloat(-5, 5, 2),
    }));
  };
  
  export default {
    DAHeaderButtons,
    generateTradeData,
  };

function getRandomElement(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}
  