const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log("Connected:", accounts[0]);
  } catch (err) {
    console.error(err);
  }
};