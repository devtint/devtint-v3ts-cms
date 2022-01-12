module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          // return `element-plus/dist/${name}.css`
          // css路径
          name = name.slice(3)
          return `element-plus/lib/components/${name}/style/css`
        }
      }
    ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
