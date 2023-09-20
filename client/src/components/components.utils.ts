import { ISectionConfig } from "../types";

export function configWrapper(config: ISectionConfig, isMobile: boolean) {
  const newConfig: ISectionConfig = config;
  if (config.wrap != "wrap" && config.wrap != "nowrap") {
    console.log("ide bejön");
    if (config.wrap == "mobile") {
      console.log("ide is bejön");
      newConfig.wrap = isMobile ? "wrap" : "nowrap";
    }
    newConfig.wrap = isMobile ? "nowrap" : "wrap";
  }
  return newConfig;
}
