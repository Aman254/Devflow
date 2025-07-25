import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDeviconClassName(techName: string) {
  const normalizedTech = techName.replace(/[ .]/g, "").toLowerCase();

  // Dictionary mapping possible technology names to Devicon class names
  const techMap: { [key: string]: string } = {
    // Existing entries (you already have these)
    javascript: "devicon-javascript-plain",
    js: "devicon-javascript-plain",
    typescript: "devicon-typescript-plain",
    ts: "devicon-typescript-plain",
    react: "devicon-react-original",
    reactjs: "devicon-react-original",
    express: "devicon-express-original",
    nextjs: "devicon-nextjs-plain",
    nodejs: "devicon-nodejs-plain",
    threejs: "devicon-threejs-original",
    bun: "devicon-bun-plain",
    deno: "devicon-denojs-original",
    python: "devicon-python-plain",
    java: "devicon-java-plain",
    cpp: "devicon-cplusplus-plain",
    "c++": "devicon-cplusplus-plain",
    csharp: "devicon-csharp-plain",
    "c#": "devicon-csharp-plain",
    php: "devicon-php-plain",
    html: "devicon-html5-plain",
    css: "devicon-css3-plain",
    git: "devicon-git-plain",
    docker: "devicon-docker-plain",
    mongodb: "devicon-mongodb-plain",
    mysql: "devicon-mysql-plain",
    postgresql: "devicon-postgresql-plain",
    aws: "devicon-amazonwebservices-original",
    tailwind: "devicon-tailwindcss-original",
    tailwindcss: "devicon-tailwindcss-original",

    // Additional entries
    angular: "devicon-angularjs-plain",
    vue: "devicon-vuejs-plain",
    vuejs: "devicon-vuejs-plain",
    nuxt: "devicon-nuxtjs-plain",
    nuxtjs: "devicon-nuxtjs-plain",
    svelte: "devicon-svelte-plain",
    astro: "devicon-astro-plain",
    flutter: "devicon-flutter-plain",
    dart: "devicon-dart-plain",
    graphql: "devicon-graphql-plain",
    redux: "devicon-redux-original",
    vite: "devicon-vitejs-plain",
    webpack: "devicon-webpack-plain",
    babel: "devicon-babel-plain",
    eslint: "devicon-eslint-plain",
    jest: "devicon-jest-plain",
    mocha: "devicon-mocha-plain",
    chai: "devicon-chai-plain",
    playwright: "devicon-playwright-plain",
    cypress: "devicon-cypressio-plain",
    nginx: "devicon-nginx-original",
    redis: "devicon-redis-plain",
    firebase: "devicon-firebase-plain",
    sqlite: "devicon-sqlite-plain",
    linux: "devicon-linux-plain",
    ubuntu: "devicon-ubuntu-plain",
    debian: "devicon-debian-plain",
    centos: "devicon-centos-plain",
    bash: "devicon-bash-plain",
    azure: "devicon-azure-plain",
    azuredevops: "devicon-azuredevops-plain",
    heroku: "devicon-heroku-plain",
    gcp: "devicon-googlecloud-plain",
    github: "devicon-github-original",
    gitlab: "devicon-gitlab-plain",
    bitbucket: "devicon-bitbucket-plain",
    npm: "devicon-npm-original-wordmark",
    yarn: "devicon-yarn-plain",
    pnpm: "devicon-pnpm-original",
    vscode: "devicon-vscode-plain",
    intellij: "devicon-intellij-plain",
    android: "devicon-android-plain",
    androidstudio: "devicon-androidstudio-plain",
    xcode: "devicon-xcode-plain",
    unity: "devicon-unity-original",
    unrealengine: "devicon-unrealengine-plain",
    figma: "devicon-figma-plain",
    canva: "devicon-canva-plain",
    blender: "devicon-blender-original",
    sketch: "devicon-sketch-line",
    illustrator: "devicon-illustrator-plain",
    photoshop: "devicon-photoshop-plain",
    gimp: "devicon-gimp-plain",
    postman: "devicon-postman-plain",
    storybook: "devicon-storybook-plain",
    selenium: "devicon-selenium-original",
    terraform: "devicon-terraform-plain",
    ansible: "devicon-ansible-plain",
    puppet: "devicon-puppet-plain",
    kafka: "devicon-apachekafka-original",
    hadoop: "devicon-hadoop-plain",
    pandas: "devicon-pandas-original",
    numpy: "devicon-numpy-original",
    jupyter: "devicon-jupyter-plain",
    matplotlib: "devicon-matplotlib-plain",
    scikitlearn: "devicon-scikitlearn-plain",
    pytorch: "devicon-pytorch-original",
    tensorflow: "devicon-tensorflow-original",
    keras: "devicon-keras-plain",
    opencv: "devicon-opencv-plain",
    rust: "devicon-rust-plain",
    go: "devicon-go-original",
    ruby: "devicon-ruby-plain",
    rails: "devicon-rails-plain",
    kotlin: "devicon-kotlin-plain",
    swift: "devicon-swift-plain",
    laravel: "devicon-laravel-plain",
    symfony: "devicon-symfony-original",
    composer: "devicon-composer-line",
    prisma: "devicon-prisma-plain",
    mongoose: "devicon-mongoose-original",
  };

  return techMap[normalizedTech]
    ? `${techMap[normalizedTech]} colored`
    : "devicon-devicon-plain";
}

export const getTimeStamp = (date: Date): string => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: [number, string][] = [
    [31536000, "year"],
    [2592000, "month"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
    [1, "second"],
  ];

  for (const [intervalInSeconds, label] of intervals) {
    const count = Math.floor(seconds / intervalInSeconds);
    if (count >= 1) {
      return `${count} ${label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};
