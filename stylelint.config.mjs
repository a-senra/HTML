/** @type {import("stylelint").Config} */
export default {
  "extends": ["stylelint-config-standard"],
  "rules": {
  "declaration-property-unit-allowed-list": {
     "/^border/": ["px"],
     "/^padding|^gap/": ["rem"],
     "/^border-radius/": ["rem"]
    },
    "unit-allowed-list": ["%", "deg", "px", "rem", "ms", "fr"]
  }
};
