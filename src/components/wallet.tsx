import { useMemo } from "react";
import { WalletProps } from "./wallet.types";

export default function Wallet ({ address, balance, favourite, firstTransactionDate, onToggleFavourite }: WalletProps) {
  const editBalance = (addr: string) => {};
  const toggleFavourite = () => {
    onToggleFavourite(address);
  };

  const oldWallet = useMemo(() => {
    const current = new Date();
    const first = new Date(firstTransactionDate);
  
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    const daysPassed = Math.floor((current.getTime() - first.getTime()) / _MS_PER_DAY);

    return daysPassed > 365;
  }, [firstTransactionDate]);

  const convertedValue = 12435;

  return (
    <div>
      {oldWallet && (
        <div className="alert alert-danger d-flex align-items-center" role="alert" style={{width: '720px', height: '35px', margin: '10px auto' }}>
        <i className="bi bi-exclamation-triangle-fill"></i>
          <div>
            Wallet is old!
          </div>
        </div>
      )}
    
    <div className="container d-flex justify-content-between mb-5" style={{width: "740px"}}>
      
      <div className="card" style={{ width: '500px'}}>
        <div className="card-body">
          <small className="card-text text-muted">{address}</small>
          <i className="bi bi-pencil-square" style={{ position: 'absolute' , right: '20px', cursor: 'pointer'}} onClick={() => editBalance(address)}></i>
          <h5 className="card-title mt-4" style={{ position: 'absolute', bottom: '20px' }}>{balance} ETH</h5>
          <i className={`bi ${favourite ? 'bi-star-fill' : 'bi-star'}`} style={{ position: 'absolute' , right: '20px', bottom: '20px', cursor: 'pointer'}} onClick={toggleFavourite}></i>
        </div>
      </div>
      <div className="card p-3" style={{ width: '200px'}}>
        <div className="form-group">
          <label htmlFor="currency">Currency</label>
          <select className="form-control" id="currency" style={{width: "100px"}}>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
        <h5 className="card-title mt-3">$ {convertedValue}</h5>
      </div>
    </div>
    </div>
  );
}