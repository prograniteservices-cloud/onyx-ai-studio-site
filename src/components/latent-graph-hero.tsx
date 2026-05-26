const clusters = [
  {
    delay: 0.65,
    nodes: [
      [880, 230],
      [950, 276],
      [1020, 250],
      [1094, 204],
      [1162, 278],
      [1088, 326],
      [1232, 220],
      [1268, 310],
      [1188, 382],
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [3, 5],
      [4, 6],
      [6, 7],
      [5, 8],
      [7, 8],
    ],
    accent: "#0f7b75",
  },
  {
    delay: 2.05,
    nodes: [
      [650, 438],
      [760, 488],
      [850, 434],
      [944, 480],
      [894, 558],
      [1038, 552],
      [808, 618],
      [1124, 610],
      [990, 680],
      [704, 570],
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [3, 4],
      [4, 1],
      [3, 5],
      [4, 6],
      [5, 7],
      [4, 8],
      [1, 9],
      [6, 9],
    ],
    accent: "#b96924",
  },
  {
    delay: 3.45,
    nodes: [
      [984, 590],
      [1058, 648],
      [1130, 642],
      [1214, 590],
      [1298, 660],
      [1236, 736],
      [1076, 738],
      [1328, 770],
      [1166, 812],
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [3, 4],
      [4, 5],
      [2, 6],
      [5, 6],
      [4, 7],
      [5, 8],
      [6, 8],
    ],
    accent: "#183a5a",
  },
  {
    delay: 4.85,
    nodes: [
      [520, 356],
      [610, 294],
      [704, 232],
      [800, 300],
      [724, 372],
      [850, 386],
      [640, 440],
      [928, 324],
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [3, 4],
      [4, 1],
      [3, 5],
      [4, 6],
      [5, 7],
    ],
    accent: "#0f7b75",
  },
] as const;

const strayNodes = [
  [1180, 424, 1.15],
  [990, 700, 2.75],
  [1320, 355, 4.15],
  [930, 178, 5.35],
] as const;

function makePath(from: readonly [number, number], to: readonly [number, number]) {
  const midX = (from[0] + to[0]) / 2;
  const midY = (from[1] + to[1]) / 2;
  const lift = Math.abs(from[0] - to[0]) * 0.025;

  return `M ${from[0]} ${from[1]} Q ${midX} ${midY - lift} ${to[0]} ${to[1]}`;
}

export function LatentGraphHero() {
  return (
    <div className="latent-graph-hero absolute inset-0 overflow-hidden bg-card" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_34%,rgba(15,123,117,0.13),transparent_28%),radial-gradient(circle_at_84%_78%,rgba(185,105,36,0.11),transparent_26%),linear-gradient(108deg,rgba(255,253,248,0.98)_0%,rgba(247,244,238,0.9)_47%,rgba(236,229,216,0.76)_100%)]" />
      <div className="paper-grain absolute inset-0 opacity-28" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,248,0.97)_0%,rgba(255,253,248,0.84)_32%,rgba(255,253,248,0.28)_64%,rgba(255,253,248,0.44)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/72 via-background/36 to-background/88" />
      <svg
        className="absolute inset-0 z-10 h-full w-full mix-blend-multiply"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        role="presentation"
      >
          <defs>
            <filter id="latent-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="latent-line" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#183a5a" stopOpacity="0" />
              <stop offset="45%" stopColor="#183a5a" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#0f7b75" stopOpacity="0" />
            </linearGradient>
          </defs>

        {clusters.map((cluster, clusterIndex) => (
          <g key={`cluster-${clusterIndex}`} opacity={0.72}>
              {cluster.links.map(([from, to], linkIndex) => {
                const fromNode = cluster.nodes[from];
                const toNode = cluster.nodes[to];

                if (!fromNode || !toNode) {
                  return null;
                }

                return (
                  <path
                    key={`cluster-${clusterIndex}-link-${linkIndex}`}
                    d={makePath(fromNode, toNode)}
                    fill="none"
                    stroke="url(#latent-line)"
                    strokeLinecap="round"
                    strokeWidth="1.55"
                  />
                );
              })}

              {cluster.nodes.map(([cx, cy], nodeIndex) => (
                <circle
                  key={`cluster-${clusterIndex}-node-${nodeIndex}`}
                  cx={cx}
                  cy={cy}
                  r={nodeIndex === 1 ? 5.8 : 4.1}
                  fill={nodeIndex === 1 ? cluster.accent : "#17130f"}
                  filter={nodeIndex === 1 ? "url(#latent-soft-glow)" : undefined}
                />
              ))}
            </g>
          ))}

          {strayNodes.map(([cx, cy, delay], index) => (
            <circle
              key={`stray-${index}`}
              cx={cx}
              cy={cy}
              r="2.8"
              fill="#0f7b75"
              opacity={0.44 + delay * 0.02}
            />
          ))}
      </svg>
    </div>
  );
}
