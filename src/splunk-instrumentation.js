import SplunkOtelWeb from '@splunk/otel-web';

SplunkOtelWeb.init({
   beaconUrl: "https://rum-ingest.us1.signalfx.com/v1/rum",
   rumAuth: "LWsYXK3lE2CkwlF-qQ3biQ",
   app: "react-cors-spa",
   environment: "dev"
});