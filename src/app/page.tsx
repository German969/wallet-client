'use client';

import { useState } from 'react';
import Wallet from '@/components/wallet';

export default function Home() {
  const [newAddress, setNewAddress] = useState('');

  const onAddNewAddress = () => {};

  return (
    <div className="container">
      <h1 className="text-center mt-3">Ethereum Wallets</h1>
      <div className="d-flex justify-content-center p-3">
        <div className="form-group">
          <label>Add Wallet</label>
          <input
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            className="form-control"
            style={{width: "500px"}}
          />
        </div>
        <button className="btn btn-primary align-self-end">Add</button>
      </div>
      <div className="container d-flex flex-column align-items-center">
        <Wallet address="0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC" balance={3456746.43} />
      </div>
    </div>
  )
}
