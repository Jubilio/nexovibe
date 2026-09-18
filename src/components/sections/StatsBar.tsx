import { stats } from "@/lib/data";
export default function StatsBar() {
  return (
    <div className="container capability-strip">
      {stats.map((stat) => (
        <div key={stat.num}>
          <strong>{stat.num}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
