import React, { useMemo } from 'react';
import Svg, { Circle, Defs, G, Line, LinearGradient, Path, Rect, Stop, Text as SvgText } from 'react-native-svg';

type Props = { worldId: number; width: number; height: number; accent: string };
type Dim = Pick<Props, 'width' | 'height'>;

const TEAL = '#14b8a6';

// Deterministic PRNG so the specks are stable between visits.
function rng(seed: number) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

// Tiny "data bits" scattered over the background.
function Bits({ worldId, width, height }: Props) {
  const bits = useMemo(() => {
    const r = rng(worldId + 11);
    return Array.from({ length: 40 }, () => ({ x: r() * width, y: r() * height, s: 1.5 + r() * 2.5, o: 0.15 + r() * 0.35 }));
  }, [worldId, width, height]);
  return (
    <G>
      {bits.map((b, i) => (
        <Rect key={i} x={b.x} y={b.y} width={b.s} height={b.s} fill={TEAL} opacity={b.o} />
      ))}
    </G>
  );
}

// World 1 — Computers & Hardware: a CPU chip and circuit-board traces.
function Hardware({ width: w, height: h }: Dim) {
  const pins = [1, 2, 3, 4, 5].map((n) => n / 6);
  return (
    <G>
      <Rect x={w * 0.05} y={h * 0.03} width={w * 0.3} height={w * 0.3} rx={8} fill="#0f766e" opacity={0.9} />
      <Rect x={w * 0.1} y={h * 0.03 + w * 0.05} width={w * 0.2} height={w * 0.2} rx={4} fill="#042f2e" />
      <SvgText x={w * 0.2} y={h * 0.03 + w * 0.17} fill={TEAL} fontSize={14} fontWeight="bold" textAnchor="middle">CPU</SvgText>
      {pins.map((p, i) => (
        <G key={i}>
          <Rect x={w * (0.05 + 0.3 * p) - 1} y={h * 0.03 - 7} width={3} height={7} fill={TEAL} opacity={0.8} />
          <Rect x={w * 0.05 - 7} y={h * 0.03 + w * 0.3 * p} width={7} height={3} fill={TEAL} opacity={0.8} />
        </G>
      ))}
      <Path d={`M ${w * 0.02} ${h * 0.62} H ${w * 0.1} V ${h * 0.5} H ${w * 0.16}`} stroke={TEAL} strokeWidth={2} fill="none" opacity={0.35} />
      <Circle cx={w * 0.16} cy={h * 0.5} r={4} fill={TEAL} opacity={0.6} />
      <Path d={`M ${w * 0.98} ${h * 0.86} H ${w * 0.9} V ${h * 0.74} H ${w * 0.84}`} stroke={TEAL} strokeWidth={2} fill="none" opacity={0.35} />
      <Circle cx={w * 0.84} cy={h * 0.74} r={4} fill={TEAL} opacity={0.6} />
      <Path d={`M ${w * 0.98} ${h * 0.3} H ${w * 0.9} V ${h * 0.42}`} stroke={TEAL} strokeWidth={2} fill="none" opacity={0.3} />
      <Rect x={w * 0.86} y={h * 0.44} width={w * 0.1} height={w * 0.06} rx={2} fill="#134e4a" opacity={0.9} />
    </G>
  );
}

// World 2 — Programming & Algorithms: code braces and binary.
function Programming({ width: w, height: h }: Dim) {
  return (
    <G>
      <SvgText x={w * 0.8} y={h * 0.2} fill={TEAL} fontSize={w * 0.34} fontWeight="bold" textAnchor="middle" opacity={0.28}>{'{ }'}</SvgText>
      <SvgText x={w * 0.13} y={h * 0.9} fill={TEAL} fontSize={w * 0.2} fontWeight="bold" textAnchor="middle" opacity={0.28}>{'</>'}</SvgText>
      {[['0101', 0.05, 0.3], ['1100', 0.06, 0.36], ['1011', 0.9, 0.52], ['0110', 0.9, 0.58]].map(([t, x, y], i) => (
        <SvgText key={i} x={w * (x as number)} y={h * (y as number)} fill={TEAL} fontSize={13} opacity={0.4} textAnchor="middle">{t as string}</SvgText>
      ))}
      <Rect x={w * 0.88} y={h * 0.68} width={w * 0.09} height={w * 0.09} rx={4} fill="#0d9488" opacity={0.7} />
      <Rect x={w * 0.9} y={h * 0.68 + w * 0.09} width={w * 0.09} height={w * 0.09} rx={4} fill="#14b8a6" opacity={0.5} />
    </G>
  );
}

// World 3 — Internet & Networks: a globe and a mesh of linked nodes.
function Networks({ width: w, height: h }: Dim) {
  const nodes: [number, number][] = [[0.06, 0.28], [0.14, 0.4], [0.05, 0.5], [0.94, 0.5], [0.88, 0.7], [0.96, 0.8], [0.1, 0.85], [0.2, 0.95]];
  const links = [[0, 1], [1, 2], [3, 4], [4, 5], [6, 7]];
  const cx = w * 0.82;
  const cy = h * 0.14;
  const r = w * 0.14;
  return (
    <G>
      <Circle cx={cx} cy={cy} r={r} fill="#0f766e" opacity={0.5} stroke={TEAL} strokeWidth={2} />
      <Path d={`M ${cx - r} ${cy} H ${cx + r} M ${cx} ${cy - r} V ${cy + r}`} stroke={TEAL} strokeWidth={1.5} opacity={0.6} />
      <Path d={`M ${cx - r * 0.7} ${cy - r * 0.7} Q ${cx} ${cy} ${cx - r * 0.7} ${cy + r * 0.7} M ${cx + r * 0.7} ${cy - r * 0.7} Q ${cx} ${cy} ${cx + r * 0.7} ${cy + r * 0.7}`} stroke={TEAL} strokeWidth={1.5} fill="none" opacity={0.6} />
      {links.map(([a, b], i) => (
        <Line key={i} x1={w * nodes[a][0]} y1={h * nodes[a][1]} x2={w * nodes[b][0]} y2={h * nodes[b][1]} stroke={TEAL} strokeWidth={2} opacity={0.4} />
      ))}
      {nodes.map(([x, y], i) => (
        <Circle key={i} cx={w * x} cy={h * y} r={5} fill={TEAL} opacity={0.75} />
      ))}
    </G>
  );
}

// World 4 — AI & The Future: neural-net layers and a glowing orb.
function AI({ width: w, height: h }: Dim) {
  const layers = [0.04, 0.11, 0.18];
  return (
    <G>
      <Circle cx={w * 0.9} cy={h * 0.1} r={w * 0.16} fill="#5eead4" opacity={0.12} />
      <Circle cx={w * 0.9} cy={h * 0.1} r={w * 0.09} fill="#5eead4" opacity={0.25} />
      <Circle cx={w * 0.9} cy={h * 0.1} r={w * 0.035} fill="#ccfbf1" opacity={0.9} />
      {layers.map((lx, li) =>
        [0.06, 0.12, 0.18].map((ly, i) => (
          <G key={`${li}-${i}`}>
            {li < 2 && [0.06, 0.12, 0.18].map((ly2, j) => (
              <Line key={j} x1={w * lx} y1={h * ly} x2={w * layers[li + 1]} y2={h * ly2} stroke={TEAL} strokeWidth={1} opacity={0.3} />
            ))}
            <Circle cx={w * lx} cy={h * ly} r={5} fill={TEAL} opacity={0.85} />
          </G>
        )),
      )}
      {layers.map((lx, li) =>
        [0.8, 0.86, 0.92].map((ly, i) => (
          <G key={`b${li}-${i}`}>
            {li < 2 && [0.8, 0.86, 0.92].map((ly2, j) => (
              <Line key={j} x1={w * (0.78 + lx)} y1={h * ly} x2={w * (0.78 + layers[li + 1])} y2={h * ly2} stroke={TEAL} strokeWidth={1} opacity={0.3} />
            ))}
            <Circle cx={w * (0.78 + lx)} cy={h * ly} r={5} fill={TEAL} opacity={0.85} />
          </G>
        )),
      )}
      <SvgText x={w * 0.06} y={h * 0.52} fill={TEAL} fontSize={w * 0.12} fontWeight="bold" opacity={0.22}>AI</SvgText>
    </G>
  );
}

export default function MapBackdrop({ worldId, width, height, accent }: Props) {
  const Scene = worldId === 2 ? Programming : worldId === 3 ? Networks : worldId === 4 ? AI : Hardware;
  return (
    <Svg width={width} height={height}>
      <Defs>
        <LinearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#00100e" />
          <Stop offset="0.6" stopColor="#001a18" />
          <Stop offset="1" stopColor={accent} stopOpacity={0.35} />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={width} height={height} fill="url(#sky)" />
      <Bits worldId={worldId} width={width} height={height} accent={accent} />
      <Scene width={width} height={height} />
    </Svg>
  );
}
