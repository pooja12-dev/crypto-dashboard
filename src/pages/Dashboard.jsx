import React from "react";
import "./Dashboard.css";
import CryptoChart from "../components/CryptoChart"; // Import your CryptoChart component
import CryptoList from "../components/CryptoList"; // Import your CryptoList component

const dummySidebarItems = [
  { label: "Migration", icon: "⇅" },
  { label: "Dypius", icon: "⚡", active: true },
  { label: "Staking", icon: "💰" },
  { label: "Launchpad", icon: "🚀" },
  { label: "Games", icon: "🎮" },
  { label: "Loyalty", icon: "🎁" },
  { section: true },
  { label: "Governance", icon: "⚖️" },
  { label: "Bridge", icon: "🌉" },
  { label: "Yields", icon: "📈" },
  { label: "DYP Locker", icon: "🔒" },
  { label: "News", icon: "📰" },
];

export default function Dashboard() {
  return (
    <div className="dashboard-root">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo">DYP TOOLS</div>
        <ul className="sidebar-menu">
          {dummySidebarItems.map((item, i) =>
            item.section ? (
              <div key={i} className="sidebar-section-sep"></div>
            ) : (
              <li key={item.label} className={item.active ? "active" : ""}>
                <span className="sidebar-icon">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            )
          )}
        </ul>
        <div className="sidebar-upgrade">
          <span role="img" aria-label="rocket" className="upgrade-icon">
            🚀
          </span>
          <div>
            <div className="upgrade-title">Upgrade Premium</div>
            <div className="upgrade-desc">
              Unlock the potential of dApps with latest trends and analytics.
            </div>
          </div>
        </div>
      </aside>
      {/* Main dashboard */}
      <div className="dashboard-main">
        {/* Top Bar */}
        <div className="dashboard-topbar">
          <span className="dashboard-welcome">
            Hello <b>User</b>
            <br />
            <span className="dashboard-desc">
              Explore latest trends, news, and powerful dapps access.
            </span>
          </span>
          <div className="topbar-actions">
            <button className="net-btn">
              <span role="img" aria-label="">
                🌐
              </span>{" "}
              Ethereum
            </button>
            <button className="wallet-btn">Connect Wallet</button>
            <span className="profile-avatar"></span>
          </div>
        </div>
        {/* Main Card */}
        <div className="dashboard-main-grid">
          <section className="main-feature-card">
            <div>
              <h3 className="main-feature-title">Dypius Earn</h3>
              <p className="main-feature-desc">
                Maximize your assets with Dypius Earn products. Dypius provides
                three productive methods to utilize your assets: Staking,
                Farming, and Vault. Begin earning now!
              </p>
              <div className="main-feature-stats">
                <div>🔒 9,188</div>
                <div>💰 10,195</div>
                <div>🪙 27,000</div>
              </div>
            </div>
            <div className="main-feature-logo">
              <div className="main-feature-orbit">
                <span className="main-feature-core">⦿</span>
                <span className="main-feature-orbit-icon">🟣</span>
              </div>
            </div>
          </section>
          <section className="main-right-widget">
            <div className="video-card">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/watch?v=Zoz9gvhLgpM"
                title="DeFi Protocol"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <div className="video-title">
              Dypius <span>- Embrace new opportunities</span>
            </div>
          </section>
        </div>
        {/* Tabs */}
        <div className="dashboard-tabs">
          <button className="tab-btn active">Vault</button>
          <button className="tab-btn">Staking</button>
          <button className="tab-btn">Farming</button>
          <div style={{ flex: 1 }} />
          <div className="tab-chains">
            <button>
              Ethereum <span className="apr-badge">25% APR</span>
            </button>
            <button>
              BNB Chain <span className="apr-badge">25% APR</span>
            </button>
            <button>
              BASE <span className="apr-badge">27.5% APR</span>
            </button>
            <button>
              Avalanche <span className="apr-badge">25% APR</span>
            </button>
          </div>
        </div>
        {/* Main Section (Insert your components here) */}
        <div className="dashboard-content-flex">
          {/* LEFT: Your Crypto Chart */}
          <div className="dashboard-chart">
            {/* PLACEHOLDER: Insert <CryptoChart /> here */}
            <div className="chart-placeholder">
              <CryptoChart />
            </div>
          </div>
          {/* RIGHT: Your Crypto List */}
          <div className="dashboard-list">
            {/* PLACEHOLDER: Insert <CryptoList /> here */}
            <div className="list-placeholder">
              <CryptoList />
            </div>
          </div>
        </div>
        {/* Optionally add more dashboard cards below (Deposit, Yields...) */}
        <div className="dashboard-cards-row">
          {[1, 2, 3].map((card, idx) => (
            <div key={idx} className="dash-card">
              <div className="dash-card-title">
                DYP <span className="apr-badge">25% APR</span>
              </div>
              <div className="dash-card-amount">
                Total value locked
                <br />
                <b>$12,694.01</b>
              </div>
              <div className="dash-card-lock">
                Lock Time
                <br />
                <span>90 days</span>
              </div>
              <button className="deposit-btn">Deposit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
