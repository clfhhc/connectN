module.exports = {
  presets: [
    [
      'next/babel',
      {
        'styled-jsx': {},
        'preset-env': {},
        'preset-react': {},
      },
    ],
    '@zeit/next-typescript/babel',
  ],
};
