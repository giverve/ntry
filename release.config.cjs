/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["main", { name: "next", prerelease: true }],
};
