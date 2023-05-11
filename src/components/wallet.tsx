import { WalletProps } from "./wallet.types";

export default function Wallet ({ address, balance }: WalletProps) {
  const editBalance = (addr: string) => {};
  const toggleFavourite = (addr: string) => {};

  const convertedValue = 12435;

  return (
    <div className="container d-flex justify-content-between" style={{width: "740px"}}>
      <div className="card" style={{ width: '500px'}}>
        <div className="card-body">
          <small className="card-text text-muted">{address}</small>
          <i className="bi bi-pencil-square" style={{ position: 'absolute' , right: '20px', cursor: 'pointer'}} onClick={() => editBalance(address)}></i>
          <h5 className="card-title mt-4" style={{ position: 'absolute', bottom: '20px' }}>{balance} ETH</h5>
          <i className="bi bi-star" style={{ position: 'absolute' , right: '20px', bottom: '20px', cursor: 'pointer'}} onClick={() => toggleFavourite(address)}></i>
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
  );
}