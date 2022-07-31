const path = require('path');

async function turnCidersIntoPages({ graphql, actions }) {
  const ciderTemplate = path.resolve('./src/templates/Cider.js');

  const { data } = await graphql(`
    query {
      ciders: allSanityCider {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.ciders.nodes.forEach((cider) => {
    actions.createPage({
      path: `cider/${cider.slug.current}`,
      component: ciderTemplate,
      context: {
        slug: cider.slug.current,
      },
    });
  });
}

async function turnFlavorsIntoPages({ graphql, actions }) {
  const flavorTemplate = path.resolve('./src/pages/ciders.js');

  const { data } = await graphql(`
    query {
      flavors: allSanityFlavor {
        nodes {
          name
          id
        }
      }
    }
  `);

  data.flavors.nodes.forEach((flavor) => {
    actions.createPage({
      path: `flavors/${flavor.name}`,
      component: flavorTemplate,
      context: {
        flavor: flavor.name,
        flavorRegex: `/${flavor.name}/i`,
      },
    });
  });
}

async function turnBeersIntoPages({ graphql, actions }) {
  const beerTemplate = path.resolve('./src/templates/Beer.js');

  const { data } = await graphql(`
    query {
      beers: allSanityOther {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.beers.nodes.forEach((beer) => {
    actions.createPage({
      path: `beer/${beer.slug.current}`,
      component: beerTemplate,
      context: {
        slug: beer.slug.current,
      },
    });
  });
}

async function turnPourmastersIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      pourmasters: allSanityPerson {
        totalCount
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);

  data.pourmasters.nodes.forEach((pourmaster) => {
    actions.createPage({
      component: path.resolve('./src/templates/pourmaster.js'),
      path: `/pourmaster/${pourmaster.slug.current}`,
      context: {
        name: pourmaster.person,
        slug: pourmaster.slug.current,
      },
    });
  });

  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.pourmasters.totalCount / pageSize);
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/pourmasters/${i + 1}`,
      component: path.resolve('./src/pages/pourmasters.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

exports.createPages = async (params) => {
  await Promise.all([
    turnCidersIntoPages(params),
    turnBeersIntoPages(params),
    turnFlavorsIntoPages(params),
    turnPourmastersIntoPages(params),
  ]);
};
