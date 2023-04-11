import server from "./server";

function Wallet({ address, setAddress, balance, setBalance }) {
  async function onChange(evt) {
    const address = evt.target.value;
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
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
        <input placeholder="Select Network" value={address} onChange={onChange}></input>
      </label>

      <div className="balance">Equity Value (ETH): {balance}</div>
    </div>
  );
}

export default Wallet;
