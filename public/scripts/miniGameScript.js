$(document).ready(function () {
  let metaMastAccount = null;
  checkMetaMask();

  $("#btnConnectMetaMask").click(() => {
    connectMetaMask()
      .then((data) => {
        console.log("🚀 ~ file: miniGameScript.js ~ line 8 ~ .then ~ data", data)
        metaMastAccount = data;
      })
      .catch((err) => {
        console.log(
          "🚀 ~ file: miniGameScript.js ~ line 9 ~ connectMetaMask.then ~ err",
          err
        );
      });
  });

  $("#btnRegis").click(function () {
    $.post(
      "/register",
      {
        name: $("#txtName").val(),
        email: $("#txtEmail").val(),
        phone: $("#txtPhone").val(),
      },
      (dataResponse) => {
        console.log(
          "🚀 ~ file: miniGameScript.js ~ line 5 ~ $.post ~ dataResponse",
          dataResponse
        );
      }
    );
  });
});

const connectMetaMask = async () => {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  console.log(
    "🚀 ~ file: miniGameScript.js ~ line 34 ~ connectMetaMask ~ accounts",
    accounts
  );
  return accounts[0];
};

const checkMetaMask = () => {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
  } else {
    console.log("MetaMask is not installed!");
  }
};
