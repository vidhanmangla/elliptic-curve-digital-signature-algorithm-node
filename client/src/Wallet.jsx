import { useEffect } from "react";
import server from "./server";

function Wallet({ address, setAddress, balance, setBalance, setAddressNonce }) {
  useEffect(() => {
    async function fetchAccount() {
      if (address) {
        const { data: { balance, nonce } } = await server.get(`account/${address}`);
        setBalance(balance);
        setAddressNonce(nonce);
      } else {
        setBalance(0);
        setAddressNonce(null);
      }
    }
    fetchAccount();
  }, [address]);

  async function onChange(evt) {
    const address = evt.target.value;
    setAddress(address);
  }

  return (
    <div className="container wallet">
      <h1>Vidhan Wallet</h1>

      <label>
        Ethereum Wallet Address
        <input placeholder="For example: 0x1" value={address} onChange={onChange}></input>
      </label>

      <label>
        Network
        <input placeholder="For example: Ethereum, BNB, TRC20"></input>
      </label>

      <div className="balance">Equity Value (ETH): {balance}</div>
    </div>
  );
}

export default Wallet;