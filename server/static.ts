import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const staticCandidates = [
    path.resolve(import.meta.dirname, "..", "dist"),
    path.resolve(import.meta.dirname, "public"),
    path.resolve(import.meta.dirname, "..", "dist", "public"),
  ];
  const distPath = staticCandidates.find((candidate) =>
    fs.existsSync(path.join(candidate, "index.html")),
  );

  if (!distPath) {
    throw new Error(
      `Could not find a build directory with index.html. Checked: ${staticCandidates.join(", ")}`,
    );
  }

  app.use(express.static(distPath));

  // SPA fallback — all routes serve index.html for client-side routing
  app.use("/{*path}", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
