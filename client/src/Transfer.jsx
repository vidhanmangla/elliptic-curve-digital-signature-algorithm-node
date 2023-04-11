import { ethers } from "ethers";
import { useState } from "react";
import server from "./server";

function Transfer({ address, setBalance, provider, setAddressNonce, addressNonce }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    try {
      if (!address || !recipient || !sendAmount) {
        return;
      }

      const data = {
        sender: address,
        recipient,
        amount: parseInt(sendAmount),
        nonce: addressNonce,
      };

      const signer = await provider.getSigner();
      const sign = await signer.signMessage(JSON.stringify(data));

      const {
        data: { balance, nonce },
      } = await server.post(`send`, { ...data, sign });
      setBalance(balance);
      setAddressNonce(nonce);
    } catch (err) {
      if (err?.code !== 4001) {
        alert(err.response.data.message);
      }
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send ETH</h1>

      <label>
        ETH
        <input
          placeholder="Amount"
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient Wallet Address
        <input
          placeholder="For example: 0x00c6348827A2572137b5Ba560fFEc72bAbE14A13"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
