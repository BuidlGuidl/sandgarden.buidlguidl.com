import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url);
  const title = searchParams.get("title") || "BG Sand Garden";
  const logoUrl = `${origin}/logo-white.svg`;

  // Load Share Tech Mono from Google Fonts (ttf format required by Satori)
  const font = await fetch("https://fonts.gstatic.com/s/sharetechmono/v16/J7aHnp1uDWRBEqV98dVQztYldFc7pA.ttf").then(
    res => res.arrayBuffer(),
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          padding: "60px",
          justifyContent: "space-between",
          fontFamily: "Share Tech Mono",
        }}
      >
        {/* Top: Branding + Logo */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div
            style={{
              fontSize: 42,
              color: "#49ff13",
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            BG Sand Garden
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoUrl} width={192} height={38} alt="" />
        </div>

        {/* Center: Blog Title */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 48 : title.length > 40 ? 56 : 64,
            color: "#ffffff",
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: "95%",
          }}
        >
          {title}
        </div>

        {/* Bottom: decorative line */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              display: "flex",
              width: "60px",
              height: "3px",
              backgroundColor: "#c913ff",
            }}
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "1px",
              backgroundColor: "#49ff13",
              opacity: 0.2,
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Share Tech Mono",
          data: font,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
