# Rollup Demo
A demo of the use of different Rollup build option.

See the scripts in package.json for more info
``` json
{
    "scripts": {
    "build": "npm run build-nm && npm run build-wm && npm run build-nm-ts && npm run build-wm-ts",
    "build-nm": "npm run build-nm-cjs && npm run build-nm-umd && npm run build-nm-es && npm run build-nm-amd && npm run build-nm-iife && npm run build-nm-system",
    "build-wm": "npm run build-wm-cjs && npm run build-wm-umd && npm run build-wm-es && npm run build-wm-amd && npm run build-wm-iife && npm run build-wm-system",

    "build-nm-ts": "npm run build-nm-cjs-ts && npm run build-nm-umd-ts && npm run build-nm-es-ts && npm run build-nm-amd-ts && npm run build-nm-iife-ts && npm run build-nm-system-ts",
    "build-wm-ts": "npm run build-wm-cjs-ts && npm run build-wm-umd-ts && npm run build-wm-es-ts && npm run build-wm-amd-ts && npm run build-wm-iife-ts && npm run build-wm-system-ts",

    "build-nm-cjs": "rollup no-modules.js --format cjs --name out-cjs --file out/no-modules-out-cjs.js -m",
    "build-nm-umd": "rollup no-modules.js --format umd --name out-umd --file out/no-modules-out-umd.js -m",
    "build-nm-es": "rollup no-modules.js --format es --name out-es --file out/no-modules-out-es.js -m",
    "build-nm-amd": "rollup no-modules.js --format amd --name out-amd --file out/no-modules-out-amd.js -m",
    "build-nm-iife": "rollup no-modules.js --format iife --name outiife --file out/no-modules-out-iife.js -m",
    "build-nm-system": "rollup no-modules.js --format system --name out-system --file out/no-modules-out-system.js -m",
    "build-wm-cjs": "rollup with-modules.js --format cjs --name out-cjs --file out/with-modules-out-cjs.js -m -p node-resolve",
    "build-wm-umd": "rollup with-modules.js --format umd --name out-umd --file out/with-modules-out-umd.js -m -p node-resolve",
    "build-wm-es": "rollup with-modules.js --format es --name out-es --file out/with-modules-out-es.js -m -p node-resolve",
    "build-wm-amd": "rollup with-modules.js --format amd --name out-amd --file out/with-modules-out-amd.js -m -p node-resolve",
    "build-wm-iife": "rollup with-modules.js --format iife --name outiife --file out/with-modules-out-iife.js -m -p node-resolve",
    "build-wm-system": "rollup with-modules.js --format system --name out-system --file out/with-modules-out-system.js -m -p node-resolve",

    "build-nm-cjs-ts": "rollup no-modules.ts --format cjs --name out-cjs --file out/no-modules-out-cjs-ts.js -m -p typescript",
    "build-nm-umd-ts": "rollup no-modules.ts --format umd --name out-umd --file out/no-modules-out-umd-ts.js -m -p typescript",
    "build-nm-es-ts": "rollup no-modules.ts --format es --name out-es --file out/no-modules-out-es-ts.js -m -p typescript",
    "build-nm-amd-ts": "rollup no-modules.ts --format amd --name out-amd --file out/no-modules-out-amd-ts.js -m -p typescript",
    "build-nm-iife-ts": "rollup no-modules.ts --format iife --name outiife --file out/no-modules-out-iife-ts.js -m -p typescript",
    "build-nm-system-ts": "rollup no-modules.ts --format system --name out-system --file out/no-modules-out-system-ts.js -m -p typescript",
    "build-wm-cjs-ts": "rollup with-modules.ts --format cjs --name out-cjs --file out/with-modules-out-cjs-ts.js -m -p node-resolve -p typescript",
    "build-wm-umd-ts": "rollup with-modules.ts --format umd --name out-umd --file out/with-modules-out-umd-ts.js -m -p node-resolve -p typescript",
    "build-wm-es-ts": "rollup with-modules.ts --format es --name out-es --file out/with-modules-out-es-ts.js -m -p node-resolve -p typescript",
    "build-wm-amd-ts": "rollup with-modules.ts --format amd --name out-amd --file out/with-modules-out-amd-ts.js -m -p node-resolve -p typescript",
    "build-wm-iife-ts": "rollup with-modules.ts --format iife --name outiife --file out/with-modules-out-iife-ts.js -m -p node-resolve -p typescript",
    "build-wm-system-ts": "rollup with-modules.ts --format system --name out-system --file out/with-modules-out-system-ts.js -m -p node-resolve -p typescript"
  },
}
```