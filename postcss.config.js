require("postcss-import");
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-reporter": {
      clearReportedMessages: true,
    },
  },
};
