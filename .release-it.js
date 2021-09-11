module.exports = {
  "hooks": {
    "before:init": ["yarn test"],
    // "after:my-plugin:bump": "./bin/my-script.sh",
    "after:bump": "NODE_ENV=production yarn build ng-v-class",
    "after:git:release": "echo After git push, before github release",
    "after:release": "echo Successfully released ${name} v${version} to ${repo.repository}."
  },
  "git": {
    "commitMessage": "chore: release v${version}",
    "release": true
  },
  "npm": {
    "publish": false,
    "ignoreVersion": true,
    "publishPath": "dist/ng-v-class",
    "publishConfig": {
      "access": "public"
    }
  },
  "plugins": {
    "@release-it/bumper": {
      "out": ["projects/ng-v-class/package.json", "dist/ng-v-class/package.json"]
    },
    "@release-it/conventional-changelog": {
      "preset": "conventionalcommits",
      "infile": "CHANGELOG.md"
    }
  }
}