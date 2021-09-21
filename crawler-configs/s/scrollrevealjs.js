new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://scrollrevealjs.org/guide/hello-world.html",
    "https://scrollrevealjs.org/",
    "https://scrollrevealjs.org/guide/",
    "https://scrollrevealjs.org/api/reveal.html",
    "https://scrollrevealjs.org/api/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://scrollrevealjs.org/**"],
  schedule: "at 15:00 on Friday",
  actions: [
    {
      indexName: "scrollrevealjs",
      pathsToMatch: [
        "https://scrollrevealjs.org/guide/**",
        "https://scrollrevealjs.org/guide/hello-world.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content:
              ".layout__two-column__main.layout__padding__vertical p, .layout__two-column__main.layout__padding__vertical li, .layout__two-column__main.layout__padding__vertical table td:last-of-type",
            lvl0: {
              selectors: ".crown__menu__link.is-active",
              defaultValue: "Documentation",
            },
            lvl2: ".layout__two-column__main.layout__padding__vertical h1",
            lvl3: ".layout__two-column__main.layout__padding__vertical h2",
            lvl4: ".layout__two-column__main.layout__padding__vertical h3",
            lvl5: ".layout__two-column__main.layout__padding__vertical h4, .layout__two-column__main.layout__padding__vertical table td:first-of-type",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scrollrevealjs",
      pathsToMatch: [
        "https://scrollrevealjs.org/api/**",
        "https://scrollrevealjs.org/api/reveal.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content:
              ".layout__two-column__main.layout__padding__vertical p, .layout__two-column__main.layout__padding__vertical li, .layout__two-column__main.layout__padding__vertical table td:last-of-type",
            lvl0: {
              selectors: ".crown__menu__link.is-active",
              defaultValue: "Documentation",
            },
            lvl2: ".layout__two-column__main.layout__padding__vertical h1",
            lvl3: ".layout__two-column__main.layout__padding__vertical h2",
            lvl4: ".layout__two-column__main.layout__padding__vertical h3",
            lvl5: ".layout__two-column__main.layout__padding__vertical h4, .layout__two-column__main.layout__padding__vertical table td:first-of-type",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    scrollrevealjs: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.page_rank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
});