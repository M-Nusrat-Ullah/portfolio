import type { CaseStudy } from "@/data/case-studies";

/* Small SVG primitives. Colours come from theme tokens, so diagrams follow light/dark mode. */

type Tone = "default" | "accent" | "group";

function Box({
  x,
  y,
  w,
  h,
  title,
  lines = [],
  tone = "default",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines?: string[];
  tone?: Tone;
}) {
  const rect =
    tone === "accent"
      ? "fill-primary/10 stroke-primary"
      : tone === "group"
        ? "fill-none stroke-muted-foreground/60"
        : "fill-card stroke-muted-foreground/50";

  if (tone === "group") {
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} rx={14} strokeWidth={1.5} strokeDasharray="6 5" className={rect} />
        <text x={x + 14} y={y + 22} className="fill-muted-foreground text-[12px] font-semibold uppercase tracking-wider">
          {title}
        </text>
      </g>
    );
  }

  const lineH = 17;
  const block = 15 + lines.length * lineH;
  const first = y + (h - block) / 2 + 13;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} strokeWidth={1.5} className={rect} />
      <text x={x + w / 2} y={first} textAnchor="middle" className="fill-foreground text-[14px] font-semibold">
        {title}
      </text>
      {lines.map((l, i) => (
        <text
          key={l}
          x={x + w / 2}
          y={first + (i + 1) * lineH}
          textAnchor="middle"
          className="fill-muted-foreground text-[12px]"
        >
          {l}
        </text>
      ))}
    </g>
  );
}

function Arrow({
  d,
  marker,
  both,
  dashed,
}: {
  d: string;
  marker: string;
  both?: boolean;
  dashed?: boolean;
}) {
  return (
    <path
      d={d}
      fill="none"
      strokeWidth={1.5}
      strokeDasharray={dashed ? "5 4" : undefined}
      className="stroke-muted-foreground"
      markerEnd={`url(#${marker})`}
      markerStart={both ? `url(#${marker})` : undefined}
    />
  );
}

function Label({
  x,
  y,
  children,
  anchor = "middle",
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      strokeWidth={4}
      strokeLinejoin="round"
      style={{ paintOrder: "stroke" }}
      className="fill-foreground stroke-card text-[12px] font-medium"
    >
      {children}
    </text>
  );
}

function Frame({
  id,
  title,
  description,
  viewBox,
  children,
}: {
  id: string;
  title: string;
  description: string;
  viewBox: string;
  children: React.ReactNode;
}) {
  const marker = `${id}-arrow`;
  return (
    <figure className="rounded-xl border border-border bg-card p-4 sm:p-6">
      <div
        className="overflow-x-auto"
        tabIndex={0}
        role="group"
        aria-label={`${title} (scrolls sideways on small screens)`}
      >
        <svg
          viewBox={viewBox}
          role="img"
          aria-labelledby={`${id}-title ${id}-desc`}
          className="h-auto w-full min-w-[600px]"
        >
          <title id={`${id}-title`}>{title}</title>
          <desc id={`${id}-desc`}>{description}</desc>
          <defs>
            <marker
              id={marker}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" className="fill-muted-foreground" />
            </marker>
          </defs>
          {children}
        </svg>
      </div>
      <figcaption className="mt-4 text-sm text-muted-foreground">{description}</figcaption>
    </figure>
  );
}

function AegisDiagram({ title, description }: CaseStudy["diagram"]) {
  const m = "aegis-arrow";
  return (
    <Frame id="aegis" title={title} description={description} viewBox="0 0 760 360">
      <Box x={20} y={150} w={150} h={70} title="Femto base station" lines={["vSIM credentials"]} />
      <Box x={230} y={20} w={350} h={320} title="Aegis AAA HA pair" tone="group" />
      <Box x={248} y={160} w={96} h={50} title="Virtual IP" lines={["keepalived"]} />
      <Box x={400} y={48} w={160} h={122} title="Active node" lines={["Milenage AuC", "EAP-AKA / AKA′", "RADIUS"]} tone="accent" />
      <Box x={400} y={210} w={160} h={100} title="Standby node" lines={["fenced until", "manual rejoin"]} />
      <Box x={610} y={40} w={130} h={64} title="Hermes NMS" lines={["SNMP alarms"]} />
      <Box x={610} y={146} w={130} h={56} title="Operator console" />
      <Box x={610} y={252} w={130} h={64} title="Signed .deb" lines={["Ed25519 releases"]} />

      <Arrow d="M170 185 L246 185" marker={m} />
      <Label x={208} y={160}>EAP-AKA′</Label>
      <Label x={208} y={175}>over RADIUS</Label>
      <Arrow d="M344 175 L398 120" marker={m} />
      <Arrow d="M344 195 L398 250" marker={m} dashed />
      <Label x={352} y={248} anchor="start">failover</Label>
      <Arrow d="M480 170 L480 208" marker={m} />
      <Label x={490} y={186} anchor="start">Postgres</Label>
      <Label x={490} y={200} anchor="start">replication</Label>
      <Arrow d="M560 90 L608 74" marker={m} />
      <Arrow d="M560 140 L608 172" marker={m} both />
      <Arrow d="M610 284 L582 284" marker={m} />
    </Frame>
  );
}

function AthenaDiagram({ title, description }: CaseStudy["diagram"]) {
  const m = "athena-arrow";
  return (
    <Frame id="athena" title={title} description={description} viewBox="0 0 760 380">
      <Box x={20} y={150} w={110} h={64} title="UE / CPE" lines={["custom SIM"]} />
      <Box x={168} y={150} w={130} h={64} title="gNB" lines={["NanoLink n78"]} />
      <Box x={330} y={16} w={290} h={348} title="Kubernetes cluster" tone="group" />
      <Box
        x={350}
        y={48}
        w={250}
        h={140}
        title="Control plane"
        lines={["AMF · SMF · NRF", "AUSF · UDM · PCF", "indirect SBI via SCP"]}
      />
      <Box x={350} y={232} w={250} h={90} title="UPF (CUPS)" lines={["FRR routing sidecar"]} tone="accent" />
      <text x={475} y={350} textAnchor="middle" className="fill-muted-foreground text-[11px]">
        Per-interface networks: Flannel · OVS · MACVLAN
      </text>
      <Box x={650} y={245} w={92} h={64} title="Internet" lines={["no NAT"]} />

      <Arrow d="M130 182 L166 182" marker={m} />
      <Label x={148} y={172}>NR</Label>
      <Arrow d="M298 168 L348 128" marker={m} />
      <Label x={316} y={140}>N2</Label>
      <Arrow d="M298 198 L348 266" marker={m} />
      <Label x={316} y={246}>N3</Label>
      <Arrow d="M475 188 L475 230" marker={m} both />
      <Label x={486} y={214} anchor="start">N4 (PFCP)</Label>
      <Arrow d="M600 277 L648 277" marker={m} />
      <Label x={625} y={267}>N6</Label>
    </Frame>
  );
}

function HermesDiagram({ title, description }: CaseStudy["diagram"]) {
  const m = "hermes-arrow";
  return (
    <Frame id="hermes" title={title} description={description} viewBox="0 0 760 390">
      <Box x={20} y={40} w={120} h={70} title="LTE radios" lines={["PM counters"]} />
      <Box x={178} y={40} w={140} h={70} title="PM files" lines={["FTP upload"]} />
      <Box x={358} y={40} w={170} h={70} title="Multi-cell parser" lines={["per-cell merge"]} tone="accent" />
      <Box x={570} y={40} w={170} h={70} title="Aggregation" lines={["two-stage"]} />
      <Box x={358} y={170} w={170} h={70} title="Ingest ledger" lines={["O(limit) status reads"]} />
      <Box x={570} y={170} w={170} h={70} title="InfluxDB" lines={["batched per-cell writes"]} />
      <Box x={570} y={300} w={170} h={70} title="KPI views" lines={["Graph grid · Table"]} />
      <Box x={20} y={170} w={300} h={130} title="Fixed in this pipeline" tone="group" />
      <text x={36} y={222} className="fill-foreground text-[13px]">• Last-wins multi-cell merge (data loss)</text>
      <text x={36} y={246} className="fill-foreground text-[13px]">• 1000× and 100× unit errors</text>
      <text x={36} y={270} className="fill-foreground text-[13px]">• InfluxDB OOM under load</text>

      <Arrow d="M140 75 L176 75" marker={m} />
      <Arrow d="M318 75 L356 75" marker={m} />
      <Arrow d="M528 75 L568 75" marker={m} />
      <Arrow d="M443 110 L443 168" marker={m} />
      <Arrow d="M655 110 L655 168" marker={m} />
      <Arrow d="M655 240 L655 298" marker={m} />
    </Frame>
  );
}

export function CaseStudyDiagram({ slug, diagram }: { slug: CaseStudy["slug"]; diagram: CaseStudy["diagram"] }) {
  switch (slug) {
    case "aegis-aaa":
      return <AegisDiagram {...diagram} />;
    case "athena-core":
      return <AthenaDiagram {...diagram} />;
    case "hermes-nms":
      return <HermesDiagram {...diagram} />;
  }
}
