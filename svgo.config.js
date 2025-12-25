export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeUselessStrokeAndFill: false,
        },
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill', 'stroke'],
      },
    },
  ],
}
