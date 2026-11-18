const root = document.getElementById("app");

root.innerHTML = `
  <header class="top">
    <div class="brand">FX<span>DAGOAT</span></div>
    <span class="tag">EA PORTAL</span>
  </header>
  <main>
    <section class="hero">
      <p class="eyebrow">AUTOMATED GOLD TRADING</p>
      <h1>XAUUSD Gold EA</h1>
      <p class="muted">Manage your trial, request a licence, and submit eWallet payment proof.</p>
      <div class="price"><strong>$30</strong><span>one-time licence price</span></div>
      <button id="trialBtn" class="primary">Start 3-day free trial</button>
    </section>

    <section class="panel">
      <h2>Get your licence</h2>
      <p class="muted">Licence price: <strong>$30 USD</strong>. Confirm the current eWallet instructions with the administrator before paying.</p>
      <div class="payline"><span>eWallet contact</span><strong>+264 81 450 8926</strong></div>
      <p class="hint">Do not send money to a different number unless the administrator confirms it.</p>
      <form id="paymentForm">
        <label for="customerName">Your name</label>
        <input id="customerName" name="customerName" required placeholder="Enter your name">
        <label for="mt5Id">MT5 account number</label>
        <input id="mt5Id" name="mt5Id" required inputmode="numeric" placeholder="Enter your MT5 account number">
        <label for="proof">Payment proof (image or PDF)</label>
        <input id="proof" name="proof" type="file" accept="image/*,.pdf" required>
        <button class="primary" type="submit">Submit proof for review</button>
      </form>
      <p id="formMessage" class="hint" role="status"></p>
    </section>

    <section class="panel">
      <h2>Already have a licence?</h2>
      <p class="muted">Licence activation and account verification will be enabled when the secure backend is connected.</p>
      <label for="licenceKey">Licence key</label>
      <input id="licenceKey" placeholder="Enter your licence key">
      <button id="checkBtn" class="secondary">Check licence</button>
      <p id="licenceMessage" class="hint" role="status"></p>
    </section>
    <p class="disclaimer">Trading involves risk. The portal does not promise profits. Never share your trading password.</p>
  </main>
  <footer>© ${new Date().getFullYear()} FXDAGOAT · XAUUSD Gold EA</footer>
`;

document.getElementById("trialBtn").addEventListener("click", () => {
  alert("Demo only: trial activation requires the secure backend.");
});

document.getElementById("paymentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const proof = document.getElementById("proof").files[0];
  if (!proof) return;
  document.getElementById("formMessage").textContent =
    "Demo only: your proof has not been uploaded or sent. Connect a secure server before accepting payments.";
});

document.getElementById("checkBtn").addEventListener("click", () => {
  document.getElementById("licenceMessage").textContent =
    "Licence checking is not connected yet. A secure licence API must be configured first.";
});
