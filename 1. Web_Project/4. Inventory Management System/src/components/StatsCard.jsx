import "../styles/Dashboard.css";

export default function StatsCard({ title, value, color }) {
  return (
    <div className={`stats-card ${color}`}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}