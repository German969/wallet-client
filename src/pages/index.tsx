'use client';

import { ReactElement, useCallback, useEffect, useState } from 'react';
import Wallet from '@/components/wallet';
import axios from 'axios';
import { IWallet } from '@/types/wallet.model';

const Home = ({ apiUrl }: { apiUrl: string }) => {
  const [newAddress, setNewAddress] = useState('');
  const [walletList, setWalletList] = useState<IWallet[]>([]);
  const [responseMessage, setResponseMessage] = useState<ReactElement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setResponseMessage(
        <div className="alert alert-secondary m-auto" role="alert" style={{ width: '530px' }}>
          Loading...
        </div>
      );
    }
  }, [loading])

  const fetchWallets = useCallback((callback?: () => void) => {
    setLoading(true);
    axios.get(apiUrl + '/wallets')
    .then((response) => {
      setWalletList(response.data);
      setLoading(false);
      callback && callback();
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    })
  }, [apiUrl]);

  const onAddNewAddress = () => {
    setLoading(true);
    axios.post(apiUrl + '/wallets', { address: newAddress })
      .then((response) => {
        setLoading(false);
        setResponseMessage(
          <div className="alert alert-success m-auto" role="alert" style={{ width: '530px' }}>
            Added wallet {response.data.address}
          </div>
        );
        fetchWallets();
        setNewAddress('');
      })
      .catch(error => {
        setLoading(false);
        setResponseMessage(
          <div className="alert alert-danger m-auto" role="alert" style={{ width: '530px' }}>
            {error.response.data?.message || 'Invalid wallet'}
          </div>
        );
        console.log(error);
      })
  };

  useEffect(() => {
    fetchWallets(() => setResponseMessage(null));
  }, [fetchWallets]);

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
            disabled={loading}
          />
        </div>
        <button className="btn btn-primary align-self-end" onClick={onAddNewAddress} disabled={loading}>Add</button>
      </div>
      {responseMessage}
      <div className="container d-flex flex-column align-items-center mt-4">
        {walletList.map((wallet) => {
          return (<Wallet key={wallet.address} address={wallet.address} balance={wallet.amount} favourite={wallet.favourite} />);
        })}
      </div>
    </div>
  )
}

export const getServerSideProps = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return {
    props: {apiUrl}
  };
};

export default Home;