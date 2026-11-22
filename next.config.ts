import { existsSync } from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";

const INDUSTRY_CV = "M_Nusrat_Ullah_Industry_CV.pdf";

const nextConfig: NextConfig = {
  // Old resume links switch to the Industry CV automatically once its PDF is in public/.
  // Redirects run before public files, so this works even while the v3 PDF still exists.
  async redirects() {
    if (!existsSync(path.join(process.cwd(), "public", INDUSTRY_CV))) return [];
    return [
      {
        source: "/M_Nusrat_Ullah_Resume_v3.pdf",
        destination: `/${INDUSTRY_CV}`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
