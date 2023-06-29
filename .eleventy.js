module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('styles/fonts')
    eleventyConfig.addPassthroughCopy('scripts')
    eleventyConfig.addPassthroughCopy('favicon')
    eleventyConfig.addPassthroughCopy('images')

    eleventyConfig.addWatchTarget('./scripts/')
    eleventyConfig.addWatchTarget('./tailwind.config.js')
    eleventyConfig.addWatchTarget('./styles/tailwind.css')

    return {
        dir: {
            input: 'pages',
        },
    }
}
