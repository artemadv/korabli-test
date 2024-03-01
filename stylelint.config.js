const kebabCase = '([a-z][a-z0-9]*(-[a-z0-9]+)*)'; // kebab-case
const camelCase = '([a-z0-9]+([A-Z][a-z0-9]+)*)'; // camelCase
const pattern =
    `^(${camelCase}|${kebabCase})` + // block
    `(__(${camelCase}|${kebabCase}))?` + // element
    `((_(${camelCase}|${kebabCase})){1,2})?$`; // modifier

module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        'selector-class-pattern': [
            pattern,
            {
                resolveNestedSelectors: true,
                message: `Error ${pattern}`,
            },
        ],
        'media-feature-range-notation': 'prefix',
        'at-rule-no-unknown': null,
    },
};
