export enum Currency {
  USD = 'usd',
  EUR = 'eur',
}

export type Rate = {
  [key in Currency]: number | null;
}

export interface WalletProps {
  address: string;
  balance: number;
  favourite: boolean;
  firstTransactionDate: string;
  rates: Rate;
  onToggleFavourite: (addr: string) => void;
  onSetNewBalance: (addr: string, balance: number) => void;
}