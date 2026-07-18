<template>
  <div class="page-no-tab">
    <div class="nav-bar">
      <button class="back-btn" @click="$router.back()">
        <img src="/icons/back.png" />
      </button>
      <span class="nav-title">User Privacy Agreement</span>
    </div>

    <div class="policy-wrap card">
      <h2 class="policy-title">Terms and Conditions (Legally Strengthened Version)</h2>
      <p class="policy-intro">
        By accessing, registering, or using this platform, you (“User”) agree to be legally bound by the following terms:
      </p>

      <ol class="policy-list">
        <li>
          <strong>Eligibility</strong>
          You confirm that you are at least 25 years of age and legally competent to enter into binding agreements under applicable law.
        </li>
        <li>
          <strong>Voluntary Participation</strong>
          Your use of this platform is entirely voluntary. If you do not agree with these Terms, you must immediately discontinue use.
        </li>
        <li>
          <strong>Use of Personal Funds</strong>
          You confirm that all funds used on this platform belong to you and are used at your sole discretion and risk.
        </li>
        <li>
          <strong>High-Risk Activity Disclaimer</strong>
          You acknowledge that participation involves extremely high financial risk, including the possibility of total loss of funds. You accept that losses are highly probable.
        </li>
        <li>
          <strong>No Guarantee of Returns</strong>
          This platform does not guarantee any returns, winnings, or recovery of funds under any circumstances.
        </li>
        <li>
          <strong>No Refund Policy</strong>
          All payments, deposits, and transactions are final and non-refundable, regardless of outcome or technical issues.
        </li>
        <li>
          <strong>Payment Risks and Failures</strong>
          You acknowledge and agree that:
          <ul>
            <li>Payments may fail, be delayed, be reversed, or time out</li>
            <li>Transactions may remain pending or unprocessed</li>
            <li>Funds may become temporarily or permanently inaccessible</li>
            <li>Withdrawals may be restricted, delayed, or not processed</li>
          </ul>
          You agree that you bear full responsibility for all such risks.
        </li>
        <li>
          <strong>Withdrawal Disclaimer</strong>
          There is no guarantee that any funds, balance, or winnings can or will be withdrawn to your bank account or any payment method.
        </li>
        <li>
          <strong>Technical Issues Disclaimer</strong>
          The platform is provided “as is.” We are not responsible for:
          <ul>
            <li>Server downtime</li>
            <li>System errors or bugs</li>
            <li>Data loss</li>
            <li>Transaction failures</li>
          </ul>
          Any loss arising from such issues is solely your responsibility.
        </li>
        <li>
          <strong>Limitation of Liability</strong>
          To the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential loss, including loss of money, data, or opportunity.
        </li>
        <li>
          <strong>Assumption of Full Responsibility</strong>
          You accept 100% responsibility for all actions taken on this platform and all financial outcomes resulting from its use.
        </li>
        <li>
          <strong>Fund Retention Risk</strong>
          You acknowledge that funds deposited into the platform may not be returned and may be permanently retained within the system.
        </li>
        <li>
          <strong>No Obligation to Provide Service Outcomes</strong>
          The platform is not obligated to ensure successful transactions, payouts, or financial outcomes.
        </li>
        <li>
          <strong>Indemnification</strong>
          You agree to indemnify and hold harmless the platform, its owners, and operators from any claims, losses, or damages arising from your use.
        </li>
        <li>
          <strong>Acceptance of Terms</strong>
          By using this platform, you confirm that:
          <ul>
            <li>You understand the risks</li>
            <li>You accept that financial loss is highly guaranteed</li>
            <li>You agree that the platform bears no responsibility</li>
          </ul>
        </li>
        <li>
          <strong>Final Agreement</strong>
          If you do not agree to any part of these Terms, you must not use this platform.
        </li>
      </ol>

      <p class="policy-intro">
        By continuing to use the platform, you acknowledge that you have read, understood, and agreed to all terms stated above.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicyPage'
}
</script>

<style scoped>
.policy-wrap {
  margin: 16px;
  line-height: 1.65;
}

.policy-title {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 10px;
}

.policy-intro {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.policy-list {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.policy-list li {
  font-size: 14px;
  color: var(--text-primary);
}

.policy-list strong {
  display: block;
}

.policy-list ul {
  margin-top: 6px;
  padding-left: 18px;
}
</style>
