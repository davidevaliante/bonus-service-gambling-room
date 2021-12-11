export interface Config {
  streamerId: string | number;
  streamerName: string;
  api: string;
  primaryColor: string;
  secondaryColor: string;
  fontString: string;
  font: string;
  youtubeMetatag?: string;
  geoApi: string;
}

export const defaultConfig: Config = {
  streamerId: 21,
  streamerName: "gamblingroom",
  api: "https://compare.topadsservices.com",
  primaryColor: "#fc9803",
  secondaryColor: "#fc9803",
  fontString: "",
  font: `'Roboto', sans-serif`,
  geoApi: "https://api.ipgeolocation.io/ipgeo",
};

export let configuration: Config = {
  streamerId: 21,
  streamerName: "gamblingroom",
  api: "https://compare.topadsservices.com",
  primaryColor: "#fc9803",
  secondaryColor: "#fc9803",
  fontString: "",
  font: `'Roboto', sans-serif`,
  geoApi: "https://api.ipgeolocation.io/ipgeo",
};

export const setConfigurationFile = (newConfig: Config = configuration) => {
  configuration = newConfig;
};
