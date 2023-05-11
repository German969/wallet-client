export interface WalletProps {
  address: string;
  balance: number;
  favourite: boolean;
  firstTransactionDate: string;
  onToggleFavourite: (addr: string) => void;
}