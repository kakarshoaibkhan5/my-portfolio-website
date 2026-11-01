import type { DiagramKind } from "./lesson-data"

const accents = {
  sky: "#38BDF8",
  violet: "#A78BFA",
  warm: "#FBBF24",
  rose: "#F472B6",
  mint: "#34D399",
}

function Frame({
  children,
  caption,
}: {
  children: React.ReactNode
  caption: string
}) {
  return (
    <figure className="ps-diagram">
      <svg
        viewBox="0 0 420 170"
        role="img"
        aria-label={caption}
        className="h-auto w-full"
      >
        <rect
          x="0.5"
          y="0.5"
          width="419"
          height="169"
          rx="16"
          fill="rgba(255,255,255,0.025)"
          stroke="rgba(255,255,255,0.08)"
        />
        <g
          fontSize="10"
          fill="rgba(226,232,240,0.72)"
          fontFamily="var(--font-manrope), sans-serif"
        >
          {children}
        </g>
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

function GravityDiagram() {
  return (
    <Frame caption="Two masses attract each other — stronger when closer">
      <ellipse
        cx="210"
        cy="92"
        rx="150"
        ry="52"
        fill="none"
        stroke={accents.sky}
        strokeOpacity="0.35"
        strokeDasharray="4 6"
      />
      <circle cx="150" cy="92" r="30" fill={accents.sky} fillOpacity="0.16" />
      <circle
        cx="150"
        cy="92"
        r="30"
        fill="none"
        stroke={accents.sky}
        strokeWidth="1.5"
      />
      <circle cx="150" cy="88" r="5" fill={accents.sky} fillOpacity="0.8" />
      <text x="150" y="100" textAnchor="middle" fill={accents.sky}>
        m₁
      </text>

      <circle cx="292" cy="92" r="16" fill={accents.violet} fillOpacity="0.2" />
      <circle
        cx="292"
        cy="92"
        r="16"
        fill="none"
        stroke={accents.violet}
        strokeWidth="1.5"
      />
      <text x="292" y="96" textAnchor="middle" fill={accents.violet}>
        m₂
      </text>

      <g stroke={accents.warm} strokeWidth="1.6">
        <line x1="183" y1="84" x2="198" y2="84" />
        <path d="M197 80 L203 84 L197 88" fill="none" />
        <line x1="259" y1="100" x2="244" y2="100" />
        <path d="M245 96 L239 100 L245 104" fill="none" />
      </g>
      <text x="210" y="70" textAnchor="middle" fill={accents.warm}>
        F ∝ 1/r²
      </text>
      <text x="210" y="140" textAnchor="middle" fill="rgba(226,232,240,0.55)">
        distance r
      </text>
    </Frame>
  )
}

function PhotoelectricDiagram() {
  return (
    <Frame caption="A photon frees an electron from a metal surface">
      <rect
        x="46"
        y="108"
        width="328"
        height="26"
        rx="6"
        fill={accents.violet}
        fillOpacity="0.14"
        stroke={accents.violet}
        strokeOpacity="0.45"
      />
      <text x="62" y="125" fill={accents.violet}>
        metal plate
      </text>

      <g stroke={accents.sky} strokeWidth="1.6" fill="none">
        <path d="M50 60 q10 -12 20 0 t20 0 t20 0" />
        <line x1="112" y1="60" x2="150" y2="60" />
        <path d="M149 56 L155 60 L149 64" />
      </g>
      <text x="72" y="44" fill={accents.sky}>
        photon hf
      </text>

      <g fill={accents.warm}>
        <circle cx="176" cy="96" r="4.5" />
        <circle cx="208" cy="76" r="4" />
        <circle cx="238" cy="92" r="3.5" />
      </g>
      <g stroke={accents.warm} strokeWidth="1.2" fill="none" strokeOpacity="0.7">
        <path d="M176 90 L176 76" />
        <path d="M174 79 L176 75 L178 79" />
        <path d="M208 70 L208 56" />
        <path d="M206 59 L208 55 L210 59" />
      </g>
      <text x="176" y="68" textAnchor="middle" fill={accents.warm}>
        e⁻
      </text>
      <text x="330" y="72" textAnchor="end" fill="rgba(226,232,240,0.78)">
        Kmax = hf − φ
      </text>
      <text x="330" y="89" textAnchor="end" fill="rgba(226,232,240,0.5)">
        threshold frequency matters
      </text>
    </Frame>
  )
}

function SchrodingerDiagram() {
  return (
    <Frame caption="The wave function ψ and its probability |ψ|²">
      <line
        x1="42"
        y1="92"
        x2="378"
        y2="92"
        stroke="rgba(226,232,240,0.18)"
      />
      <path
        d="M60 92 C 85 30, 112 30, 137 92 S 189 154, 214 92 S 266 30, 291 92 S 343 154, 368 92"
        fill="none"
        stroke={accents.sky}
        strokeWidth="2"
      />
      <path
        d="M60 92 C 85 30, 112 30, 137 92 S 189 154, 214 92 S 266 30, 291 92 S 343 154, 368 92"
        fill="none"
        stroke={accents.violet}
        strokeWidth="8"
        strokeOpacity="0.12"
      />
      <g fill={accents.warm}>
        <circle cx="98" cy="61" r="3" />
        <circle cx="214" cy="92" r="3" />
        <circle cx="329" cy="61" r="3" />
      </g>
      <text x="60" y="40" fill={accents.sky}>
        ψ(x)
      </text>
      <text x="300" y="52" fill={accents.warm}>
        |ψ|² = probability
      </text>
      <text x="210" y="128" textAnchor="middle" fill="rgba(226,232,240,0.55)">
        position x
      </text>
      <text x="210" y="150" textAnchor="middle" fill="rgba(226,232,240,0.78)">
        iħ ∂ψ/∂t = Ĥψ
      </text>
    </Frame>
  )
}

function HiggsDiagram() {
  const dots = [
    [90, 60],
    [130, 52],
    [172, 62],
    [214, 52],
    [256, 62],
    [298, 52],
    [338, 60],
    [110, 94],
    [150, 88],
    [192, 96],
    [234, 88],
    [276, 96],
    [318, 88],
    [90, 128],
    [130, 120],
    [172, 130],
    [214, 120],
    [256, 130],
    [298, 120],
    [338, 128],
  ]

  return (
    <Frame caption="Particles gain mass by interacting with the Higgs field">
      {dots.map(([x, y], index) => (
        <circle
          key={index}
          cx={x}
          cy={y}
          r={index % 3 === 0 ? 2.4 : 1.7}
          fill="rgba(226,232,240,0.22)"
        />
      ))}
      <circle cx="214" cy="90" r="34" fill={accents.warm} fillOpacity="0.08" />
      <circle cx="214" cy="90" r="24" fill={accents.warm} fillOpacity="0.12" />
      <circle cx="214" cy="90" r="13" fill={accents.warm} fillOpacity="0.25" />
      <circle
        cx="214"
        cy="90"
        r="13"
        fill="none"
        stroke={accents.warm}
        strokeWidth="1.6"
      />
      <circle cx="214" cy="90" r="4.5" fill={accents.warm} />
      <text x="214" y="48" textAnchor="middle" fill={accents.warm}>
        Higgs boson
      </text>
      <text x="214" y="150" textAnchor="middle" fill="rgba(226,232,240,0.55)">
        the field is everywhere — the boson is a ripple in it
      </text>
    </Frame>
  )
}

function NewtonDiagram() {
  return (
    <Frame caption="Net force produces acceleration in the same direction">
      <line
        x1="40"
        y1="118"
        x2="380"
        y2="118"
        stroke="rgba(226,232,240,0.20)"
      />
      <rect
        x="156"
        y="76"
        width="86"
        height="42"
        rx="8"
        fill={accents.sky}
        fillOpacity="0.16"
        stroke={accents.sky}
        strokeWidth="1.5"
      />
      <text x="199" y="101" textAnchor="middle" fill={accents.sky} fontSize="13">
        m
      </text>
      <g stroke={accents.warm} strokeWidth="2" fill="none">
        <line x1="250" y1="97" x2="330" y2="97" />
        <path d="M323 92 L333 97 L323 102" />
      </g>
      <text x="290" y="85" textAnchor="middle" fill={accents.warm}>
        F
      </text>
      <g stroke={accents.mint} strokeWidth="1.6" fill="none">
        <line x1="199" y1="66" x2="252" y2="66" />
        <path d="M246 62 L254 66 L246 70" />
      </g>
      <text x="226" y="56" textAnchor="middle" fill={accents.mint}>
        a = F/m
      </text>
      <text x="199" y="146" textAnchor="middle" fill="rgba(226,232,240,0.55)">
        more mass → less acceleration for the same force
      </text>
    </Frame>
  )
}

function CircuitDiagram() {
  return (
    <Frame caption="Voltage pushes current through resistance: V = IR">
      <path
        d="M96 52 H310 V122 H96 Z"
        fill="none"
        stroke={accents.sky}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <g stroke={accents.warm} strokeWidth="1.8">
        <line x1="184" y1="46" x2="184" y2="58" />
        <line x1="176" y1="52" x2="192" y2="52" />
        <line x1="206" y1="46" x2="206" y2="58" />
        <line x1="214" y1="52" x2="222" y2="52" />
      </g>
      <text x="199" y="36" textAnchor="middle" fill={accents.warm}>
        battery V
      </text>
      <path
        d="M96 122 l10 -12 l10 24 l10 -24 l10 24 l10 -24 l10 24 l10 -12"
        fill="none"
        stroke={accents.violet}
        strokeWidth="1.8"
      />
      <text x="146" y="146" textAnchor="middle" fill={accents.violet}>
        resistor R
      </text>
      <g stroke={accents.mint} strokeWidth="1.5" fill="none">
        <line x1="270" y1="70" x2="270" y2="102" />
        <path d="M265 96 L270 104 L275 96" />
      </g>
      <text x="288" y="90" fill={accents.mint}>
        I
      </text>
      <text x="350" y="90" textAnchor="end" fill="rgba(226,232,240,0.7)">
        V = IR
      </text>
    </Frame>
  )
}

function FaradayDiagram() {
  return (
    <Frame caption="A changing magnetic flux induces an EMF in the coil">
      <g
        stroke={accents.warm}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M280 58 q-28 8 -56 0 t-56 0 t-56 0" />
        <path d="M280 72 q-28 8 -56 0 t-56 0 t-56 0" />
        <path d="M280 86 q-28 8 -56 0 t-56 0 t-56 0" />
      </g>
      <rect
        x="276"
        y="50"
        width="76"
        height="46"
        rx="6"
        fill={accents.violet}
        fillOpacity="0.14"
        stroke={accents.violet}
      />
      <text x="296" y="70" fill={accents.violet}>
        N
      </text>
      <text x="330" y="70" fill={accents.violet}>
        S
      </text>
      <text x="314" y="86" textAnchor="middle" fill={accents.violet}>
        magnet
      </text>
      <g stroke={accents.sky} strokeWidth="1.3" fill="none" strokeDasharray="4 4">
        <path d="M276 73 H246" />
        <path d="M250 69 L244 73 L250 77" />
      </g>
      <text x="160" y="132" fill="rgba(226,232,240,0.6)">
        move the magnet → current flows
      </text>
      <text x="160" y="150" textAnchor="middle" fill={accents.sky}>
        ε = −dΦB/dt
      </text>
    </Frame>
  )
}

function UncertaintyDiagram() {
  return (
    <Frame caption="A narrow position spread means a wider momentum spread">
      <line
        x1="60"
        y1="100"
        x2="360"
        y2="100"
        stroke="rgba(226,232,240,0.18)"
      />
      <path
        d="M78 100 C 130 34, 160 34, 210 100 C 260 34, 290 34, 342 100"
        fill={accents.sky}
        fillOpacity="0.10"
        stroke={accents.sky}
        strokeWidth="1.8"
      />
      <g stroke={accents.warm} strokeWidth="1.4">
        <line x1="168" y1="54" x2="168" y2="116" strokeDasharray="3 4" />
        <line x1="252" y1="54" x2="252" y2="116" strokeDasharray="3 4" />
        <line x1="168" y1="116" x2="252" y2="116" />
      </g>
      <text x="210" y="132" textAnchor="middle" fill={accents.warm}>
        Δx
      </text>
      <text x="210" y="150" textAnchor="middle" fill={accents.sky}>
        Δx · Δp ≥ ħ/2
      </text>
      <text x="320" y="58" textAnchor="end" fill="rgba(226,232,240,0.55)">
        ψ(x)
      </text>
    </Frame>
  )
}

const diagrams: Record<DiagramKind, () => React.JSX.Element> = {
  gravity: GravityDiagram,
  photoelectric: PhotoelectricDiagram,
  schrodinger: SchrodingerDiagram,
  higgs: HiggsDiagram,
  newton: NewtonDiagram,
  circuit: CircuitDiagram,
  faraday: FaradayDiagram,
  uncertainty: UncertaintyDiagram,
}

export function LessonDiagram({ kind }: { kind: DiagramKind }) {
  const Diagram = diagrams[kind] ?? GravityDiagram
  return <Diagram />
}
